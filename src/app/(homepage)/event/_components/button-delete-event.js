"use client";

import React, { useActionState } from "react";
import { deleteEventAction } from "../action";
import { Button } from "@heroui/react";

export const ButtonDeleteEvent = ({ id }) => {
  const [__, formAction, _] = useActionState(deleteEventAction, null);

  return (
    <form action={formAction}>
      <input name="id" defaultValue={id} hidden readOnly />
      <Button
        isIconOnly
        color="danger"
        variant="bordered"
        className="hover:bg-red-50 transition-all"
        size="sm"
        type="submit"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5em"
          height="1.5em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="m9.4 16.5l2.6-2.6l2.6 2.6l1.4-1.4l-2.6-2.6L16 9.9l-1.4-1.4l-2.6 2.6l-2.6-2.6L8 9.9l2.6 2.6L8 15.1zM7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21z"
          ></path>
        </svg>
      </Button>
    </form>
  );
};
