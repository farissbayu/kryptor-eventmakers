"use server";

import { auth } from "@/libs/auth";
import { prisma } from "@/utils/prisma";
import Link from "next/link";
import { EventItem } from "./_components/event-item";
import { EventList } from "./_components/event-list";

export default async function Page() {
  const session = await auth();

  let firstName = "user";
  let events = [];

  if (session) {
    firstName = session?.user.name.split(" ")[0].toLowerCase();
    events = await prisma.event.findMany({
      where: {
        authorId: session.userId,
        isDeleted: false,
        isPublished: true,
      },
    });
  }

  return (
    <div className="w-full px-4 space-y-4">
      <div className="flex flex-row justify-between items-center">
        <h1 className="font-semibold text-lg">{firstName}'s created events.</h1>
        <Link
          href="/event/create"
          className="p-2 border-2 rounded-lg hover:border-slate-600 hover:bg-slate-100 transition-all"
        >
          + Create event
        </Link>
      </div>
      <EventList events={events} />
    </div>
  );
}
