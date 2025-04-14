// /api/clerk/webhook
import { db } from "@/server/db";
export const POST = async (req: Request) => {
    const {data} = await req.json();
    console.log('Webhook data:', data);
    // Perform any necessary processing with the webhook data here
    const email = data.email_addresses[0].email_address;
    const firstName = data.first_name;
    const lastName = data.last_name;
    const userId = data.id;
    const imageUrl = data.profile_image_url;
    await db.user.create({
        data: {
            id: userId,
            email: email,
            firstName: firstName,
            lastName: lastName,
            image: imageUrl,
        },
    });
    return new Response('Webhook received', { status: 200 });
}