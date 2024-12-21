
"use client"

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

export async function UserAvailability() {

    const { userId } = await auth();

    if (!userId) {
        throw new Error("Unauthorized");
    }
        
    const user = await db.user.findUnique({
        where: { clerkUserId: userId },
        include : {
            availability:{
                include:{days:ture},
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
       }
    });
}