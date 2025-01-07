"use server";

import dbConnect, { collectionNames } from "@/lib/dbConnect";

export const getProducts = async () => {
    try {
        const data = await dbConnect(collectionNames.PRACTICE_DATA).find({}).toArray();
        return data;
    } catch (error) {
        console.log(error)
        return []
    }

}