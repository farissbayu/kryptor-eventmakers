"use server";

import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginAction(_, formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  if (!email || !password) {
    return {
      success: false,
      message: "Please fill in all fields first!",
    };
  }

  const existingUser = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!existingUser) {
    return {
      success: false,
      message: "User not found, please make an account first!",
    };
  }

  const isPasswordMatch = await bcrypt.compare(password, existingUser.password);

  if (!isPasswordMatch) {
    return {
      success: false,
      message: "Wrong password, try again!",
    };
  }

  const cookieStore = await cookies();
  const newSession = await prisma.session.create({
    data: {
      userId: existingUser.id,
    },
  });

  cookieStore.set("sessionId", newSession.id, {
    httpOnly: true,
    sameSite: true,
    secure: process.env.NODE_ENV === "production",
  });

  redirect("/");
}
