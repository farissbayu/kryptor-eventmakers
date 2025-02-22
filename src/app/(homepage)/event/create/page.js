"use client";

import { Button, DatePicker, Input, Textarea } from "@heroui/react";
import { now, getLocalTimeZone } from "@internationalized/date";
import { useActionState } from "react";
import { createEventAction } from "./action";

export default function Page() {
  const [state, formAction, pending] = useActionState(createEventAction, null);

  return (
    <div className="w-full">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-xl font-semibold mb-12">Create new event</h1>
        <form className="flex flex-col space-y-4" action={formAction}>
          <div className="flex flex-row space-x-4 justify-stretch items-end">
            <Input
              type="text"
              name="name"
              variant="bordered"
              labelPlacement="outside"
              label="Event name"
              placeholder="Your event name"
              className="basis-128"
            />
            <DatePicker
              hideTimeZone
              defaultValue={now(getLocalTimeZone())}
              label="Event Date"
              labelPlacement="outside"
              variant="bordered"
              name="eventDate"
              className="text-start basis-64"
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
          />
          <div className="flex flex-row space-x-4 justify-stretch items-end">
            <Input
              type="text"
              name="place"
              variant="bordered"
              labelPlacement="outside"
              label="Event place"
              placeholder="Your event place or link"
              className="flex-grow"
            />
            <Input
              type="file"
              name="image"
              variant="bordered"
              labelPlacement="outside"
              label="Event image"
              className="basis-80"
            />
          </div>
          <Button
            type="submit"
            className="bg-cyan-700 text-white font-semibold w-48 max-w-64 mx-auto"
          >
            Create
          </Button>
        </form>
      </div>
    </div>
  );
}
