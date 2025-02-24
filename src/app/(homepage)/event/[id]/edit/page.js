import { prisma } from "@/utils/prisma";
import { EditEventForm } from "./_components/edit-event-form";

export default async function Page({ params }) {
  const { id } = await params;

  const event = await prisma.event.findUnique({
    where: {
      id,
    },
  });

  if (!event) {
    return <p className="text-red-500">Event not found!</p>;
  }

  return (
    <div className="w-full">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-xl font-semibold mb-4">Edit event</h1>
        <EditEventForm event={event} />
      </div>
    </div>
  );
}
