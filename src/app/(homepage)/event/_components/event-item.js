import { Button } from "@heroui/react";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { ButtonDeleteEvent } from "./button-delete-event";

export const EventItem = ({ event }) => {
  return (
    <div className="flex flex-row border-2 rounded-xl p-4 space-x-4 w-96">
      <Image
        src={`${process.env.R2_BASE_URL}/${event.id}/${event.image}`}
        alt={event.name}
        width={400}
        height={400}
        className="w-40 h-32 object-cover rounded-lg"
      />
      <div className="flex flex-col justify-between w-full">
        <div className="flex flex-col space-y-1">
          <h3 className="text-lg font-semibold">{event.name}</h3>
          <p className="truncate w-full text-slate-700 text-sm">
            {event.description}
          </p>
          <p className="text-xs text-slate-500">
            {moment(event.eventDate.toString()).format("DD MMMM YYYY")}
          </p>
        </div>
        <div className="flex flex-row justify-between w-fit space-x-2">
          <Link href={`/event/${event.id}`}>
            <Button
              isIconOnly
              color="primary"
              variant="bordered"
              className="hover:bg-blue-50 transition-all"
              size="sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 7q-.825 0-1.412-.587T10 5t.588-1.412T12 3t1.413.588T14 5t-.587 1.413T12 7m-1.5 14V9h3v12z"
                ></path>
              </svg>
            </Button>
          </Link>
          <Link href={`/event/${event.id}/edit`}>
            <Button
              isIconOnly
              color="default"
              variant="bordered"
              className="hover:bg-gray-50 transition-all"
              size="sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="gray"
                  d="M5 19h1.425L16.2 9.225L14.775 7.8L5 17.575zm-1 2q-.425 0-.712-.288T3 20v-2.425q0-.4.15-.763t.425-.637L16.2 3.575q.3-.275.663-.425t.762-.15t.775.15t.65.45L20.425 5q.3.275.437.65T21 6.4q0 .4-.138.763t-.437.662l-12.6 12.6q-.275.275-.638.425t-.762.15zM19 6.4L17.6 5zm-3.525 2.125l-.7-.725L16.2 9.225z"
                ></path>
              </svg>
            </Button>
          </Link>
          <ButtonDeleteEvent id={event.id} />
        </div>
      </div>
    </div>
  );
};
