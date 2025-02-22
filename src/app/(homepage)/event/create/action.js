"use server";

import { auth } from "@/libs/auth";
import { uploadFile } from "@/libs/file-ops";
import { prisma } from "@/utils/prisma";
import { redirect } from "next/navigation";

export async function createEventAction(_, formData) {
  const name = formData.get("name");
  const description = formData.get("description");
  const eventDate = new Date(formData.get("eventDate"));
  const capacity = Number(formData.get("capacity"));
  const place = formData.get("place");
  const image = formData.get("image");

  const session = await auth();
  if (!session) {
    redirect("/login");
  }

  if (!name || !description || !eventDate || !capacity || !place || !image) {
    return {
      success: false,
      message: "All fields are required",
    };
  }

  const newEvent = await prisma.event.create({
    data: {
      name,
      description,
      eventDate,
      capacity,
      place,
      image: image.size !== 0 ? image.name : "",
      authorId: session.userId,
    },
  });

  await uploadFile({ key: image.name, folder: newEvent.id, body: image });

  return {
    success: true,
    message: "Event successfully created",
  };
}
