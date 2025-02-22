import Image from "next/image";
import JoinSection from "./_components/joinSection";
import { prisma } from "@/utils/prisma";
import moment from "moment";

export default async function page({ params }) {
  const { id } = await params;
  const event = await prisma.event.findFirst({
    where: {
      id,
    },
    include: {
      author: true,
      participants: true,
    },
  });
  const eventDate = moment(event?.eventDate).calendar();
  const createdDate = moment(event?.createdAt).calendar();

  return (
    <div className="block space-y-10 p-10 w-full">
      <section className="space-y-2">
        <h1 className="text-2xl font-semibold">{event?.name}</h1>
        <div className="flex space-x-2">
          <Image
            src={"data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="}
            width={100}
            height={100}
          />

          <div className="block">
            <h1 className="text-medium text-slate-500">{event?.description}</h1>
            <h1 className="text-sm text-slate-500">Event Start {eventDate}</h1>
            <h1 className="text-sm text-slate-500">
              Quota : {event?.capacity}
            </h1>
            <h1 className="text-sm text-slate-500">
              Remaining Quota : {event?.capacity - event.participants.length}
            </h1>

            <h1 className="text-sm text-slate-500">
              Registered : {event?.participants.length}
            </h1>

            <h1 className="text-sm text-slate-500">
              {event?.place} | {event?.author.name} | Posted {createdDate}
            </h1>
          </div>
        </div>
      </section>
      <JoinSection id={id} />
    </div>
  );
}
