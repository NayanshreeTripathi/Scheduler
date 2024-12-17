import { Description } from "@radix-ui/react-dialog";
import { z } from "zod";

export const usernameSchema = z.object({
    username:z
     .string()
     .min(3)
     .max(20)
     .regex(
        /^[a-zA-Z0-9_]+$/,
        "Username can only conatain letters number and underscore"
     ),
});

export const eventSchema = z.object({
   tittle:z
    .string()
    .min(1,"Tittle is required")
    .max(100 , "Tittle must be 100 character or less"),
   description:z
    .string()
    .min(1,"Description is required")
    .max(500 , "Description must be 500 character or less"),
   duration:z.number().int().positive("Duration must be positive integer"),
   isPrivate:z.boolean(),
});