import React from "react";
import { EventItem } from "./event-item";

export const EventList = ({ events }) => {
  return (
    <div className="w-full">
      <div className="flex flex-wrap justify-center gap-4">
        {events.map((event) => (
          <EventItem event={event} key={event.id} />
        ))}
      </div>
    </div>
  );
};
