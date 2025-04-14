import { db } from "@/server/db";

export const POST = async (req: Request) => {
    const { data } = await req.json();
    console.log("Webhook data:", data);

    const emailAddress = data.email_addresses?.[0]?.email_address;
    const firstName = data.first_name;
    const lastName = data.last_name;
    const id = data.id;
    const imageUrl = data.image_url;

    if (!emailAddress || !id) {
        return new Response("Missing required user info", { status: 400 });
    }

    await db.user.create({
        data: {
            id,
            emailAddress,
            firstName,
            lastName,
            imageUrl,
        },
    });

    return new Response("Webhook received", { status: 200 });
};
