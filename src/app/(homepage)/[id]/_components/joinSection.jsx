"use client";
import { Button, Input } from "@heroui/react";
import { useActionState } from "react";
import joinAction from "../action/join";

export default function JoinSection({ id }) {
  const [state, formAction, pending] = useActionState(joinAction, null);
  return (
    <section className="space-y-5">
      <h1 className="text-xl ">Lets Join This Event !</h1>
      <form className="space-y-4" action={formAction}>
        <Input
          label="Name"
          type="text"
          name="name"
          variant="underlined"
          placeholder="Enter your Name"
          className="min-w-64"
        />
        <Input
          label="Email"
          type="email"
          name="email"
          variant="underlined"
          placeholder="Enter your email"
          className="min-w-64"
        />
        <Input
          label="Phone Number"
          type="text"
          name="phoneNumber"
          variant="underlined"
          placeholder="********"
          className="min-w-64"
        />
        <Input label="Name" type="hidden" name="eventId" value={id} />
        <Button
          className="w-full bg-indigo-700 text-white font-semibold"
          radius="lg"
          type="submit"
          isLoading={pending}
        >
          Join
        </Button>
      </form>
      {state?.success === false && (
        <p className="text-xs text-red-500 text-center my-2">
          {state?.message}
        </p>
      )}
      {state?.success === true && (
        <p className="text-xs text-green-500 text-center my-2">
          {state?.message}
        </p>
      )}
    </section>
  );
}
