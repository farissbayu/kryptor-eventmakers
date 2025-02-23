"use client";

import { Button } from "@heroui/react";
import React, { useActionState } from "react";
import { deleteParticipantAction } from "../action";

export const ButtonDeleteParticipant = ({ id }) => {
  const [state, formAction, pending] = useActionState(
    deleteParticipantAction,
    null
  );

  return (
    <form action={formAction}>
      <input name="id" defaultValue={id} hidden readOnly />
      <Button
        className="w-fit hover:font-semibold transition-all"
        variant="bordered"
        color="danger"
        type="submit"
      >
        delete
      </Button>
    </form>
  );
};
