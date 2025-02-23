"use server";

import { prisma } from "@/utils/prisma";
import { revalidatePath } from "next/cache";

export async function deleteParticipantAction(_, formData) {
  const id = formData.get("id");

  await prisma.participant.delete({
    where: {
      id,
    },
  });

  revalidatePath(`/event/${id}`);
}
