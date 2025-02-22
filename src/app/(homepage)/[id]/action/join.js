"use server";

import { prisma } from "@/utils/prisma";
import { revalidatePath } from "next/cache";

export default async function joinAction(_, formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const phoneNumber = formData.get("phoneNumber");
  const eventId = formData.get("eventId");
  console.log(eventId, name, email, phoneNumber);
  if (!name || !email || !phoneNumber || !eventId) {
    return {
      success: false,
      message: "Fill in the blank form",
    };
  }
  // Check registered or not
  const getEmail = await prisma.participant.findFirst({
    where: {
      email,
      eventId,
    },
  });
  if (getEmail) {
    return {
      success: false,
      message: `${email} already Participate`,
    };
  }
  await prisma.participant.create({
    data: {
      name,
      email,
      phoneNumber,
      eventId,
    },
  });
  revalidatePath(`/${eventId}`);
  return {
    success: true,
    message: `${email} Joined to this Event!`,
  };
}
