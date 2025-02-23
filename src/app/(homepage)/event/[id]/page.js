import { prisma } from "@/utils/prisma";
import moment from "moment";
import Image from "next/image";
import React from "react";
import { ButtonDeleteParticipant } from "./_components/button-delete-participant";

export default async function Page({ params }) {
  const { id } = await params;

  const event = await prisma.event.findUnique({
    where: {
      id,
    },
    include: {
      participants: true,
    },
  });

  if (!event) {
    return <p>Event not found.</p>;
  }

  const eventDate =
    event.eventDate > new Date()
      ? moment(event.eventDate).calendar()
      : "Event already done.";

  return (
    <div className="w-full px-16">
      <div className="p-8 border-2 flex flex-row space-x-16">
        <Image
          src={`${process.env.R2_BASE_URL}/${event.id}/${event.image}`}
          alt={event.name}
          width={400}
          height={400}
          className="w-128 h-full object-cover rounded-lg"
        />
        <div className="flex flex-col">
          <h1 className="text-2xl font-semibold mb-2">{event.name}</h1>
          <p className="text-sm">{eventDate}</p>
          <p className="text-sm">Quota: {event.capacity}</p>
          <p className="text-sm text-slate-500">{event.description}</p>
        </div>
      </div>
      <h2 className="text-xl text-center font-semibold my-4">Participants</h2>
      <div>
        {event.participants.length === 0 && (
          <p className="text-center">No participants yet.</p>
        )}
        {event.participants.length > 0 &&
          event.participants.map((participant) => (
            <div
              key={participant.id}
              className="w-full grid grid-cols-4 gap-4 border-b-2 py-2 items-center"
            >
              <p>{participant.name}</p>
              <p>{participant.email}</p>
              <p>{participant.phoneNumber}</p>
              <ButtonDeleteParticipant id={participant.id} />
            </div>
          ))}
      </div>
    </div>
  );
}
