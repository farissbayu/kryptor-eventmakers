"use server";

import { prisma } from "@/utils/prisma";
import { revalidatePath } from "next/cache";

export async function deleteEventAction(_, formData) {
  const id = formData.get("id");

  if (!id) {
    return {
      success: false,
      message: "Event not found",
    };
  }

  const deletedEvent = await prisma.event.update({
    where: {
      id,
    },
    data: {
      isDeleted: true,
    },
  });

  console.log(deletedEvent);

  revalidatePath("/event");
}
