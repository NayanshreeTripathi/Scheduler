
"use server"

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

export async function getUserAvailability() {

    const { userId } = await auth();

    if (!userId) {
        throw new Error("Unauthorized");
    }
        
    const user = await db.user.findUnique({
        where: { clerkUserId: userId },
        include : {
            availability:{
                include:{days:true},
            },
        },
    });
        
    if (!user || !user.availability) {
        return null ;
    }

    const availabilityData  = {
        timeGap : user.availability.timeGap
    }

    [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ].forEach((day) => {
       const dayAvailability = user.availability.days.find((d) => d.days === day.toUpperCase());
       availabilityData[day]={
        isAvailable: !!dayAvailability,
        startTime : dayAvailability?dayAvailability.startTime.toISOString().slice(11,16) : "09:00",
        endTime : dayAvailability?dayAvailability.endTime.toISOString().slice(11,16) : "17:00",
       }
    });

    return availabilityData ;
}