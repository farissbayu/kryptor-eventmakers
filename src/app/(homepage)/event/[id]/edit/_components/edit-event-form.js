"use client";

import { Button, Input, Textarea } from "@heroui/react";
import { useActionState } from "react";
import moment from "moment";
import { editEventAction } from "../action";
import { redirect } from "next/navigation";

export const EditEventForm = ({ event }) => {
  const [state, formAction, pending] = useActionState(editEventAction, null);

  if (state?.success === true) {
    redirect("/event");
  }

  const eventDate = moment(event.eventDate).format("YYYY-MM-DDTHH:mm");

  return (
    <>
      <form className="flex flex-col space-y-4" action={formAction}>
        <input name="id" defaultValue={event.id} hidden readOnly />
        <div className="flex flex-row space-x-4 justify-stretch items-end">
          <Input
            type="text"
            name="name"
            variant="bordered"
            labelPlacement="outside"
            label="Event name"
            placeholder="Your event name"
            className="basis-128"
            defaultValue={event.name}
          />
          <Input
            type="datetime-local"
            name="eventDate"
            variant="bordered"
            labelPlacement="outside"
            label="Event date"
            className="basis-64"
            placeholder=" "
            defaultValue={eventDate}
          />
          <Input
            type="number"
            name="capacity"
            variant="bordered"
            labelPlacement="outside"
            label="Capacity"
            placeholder="100"
            min={10}
            className="basis-64"
            defaultValue={event.capacity}
          />
        </div>
        <Textarea
          type="text"
          name="description"
          variant="bordered"
          labelPlacement="outside"
          label="Event description"
          placeholder="This is the coolest tech event in the universe."
          className="text-start"
          defaultValue={event.description}
        />
        <div className="flex flex-row space-x-4 justify-stretch items-center">
          <Input
            type="text"
            name="place"
            variant="bordered"
            labelPlacement="outside"
            label="Event place"
            placeholder="Your event place or link"
            className="flex-grow"
            defaultValue={event.place}
          />
          <Input
            type="file"
            name="image"
            variant="bordered"
            labelPlacement="outside"
            label="Event image"
            className="basis-80"
            isRequired
          />
        </div>
        <Button
          type="submit"
          className="bg-cyan-700 text-white font-semibold w-48 max-w-64 mx-auto"
          isDisabled={pending}
        >
          Edit event
        </Button>
      </form>
      {state?.success === false && (
        <p className="text-xs text-red-500 text-center my-2">
          {state?.message}
        </p>
      )}
    </>
  );
};
