"use server";

import dbConnect from "@/lib/dbConnect";

export const postSingleData = async (postedData) => {
    try {

        const result = await dbConnect("practice_data").insertOne(postedData)
        revalidatePath("/products")
        return result
    } catch (error) {
        console.log(error)
        return null
    }

}
