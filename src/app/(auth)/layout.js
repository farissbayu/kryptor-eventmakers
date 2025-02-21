import { prisma } from "@/utils/prisma";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

export default async function Layout({ children }) {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get("sessionId")?.value;

  if (sessionId) {
    const isSessionValid = await prisma.session.findUnique({
      where: {
        id: sessionId,
      },
    });

    // if user already login, they can't open auth page
    if (isSessionValid) {
      redirect("/");
    }
  }

  return <main>{children}</main>;
}
