"use client";

import { HeroUIProvider } from "@heroui/react";

export const Provider = ({ children }) => {
  return <HeroUIProvider>{children}</HeroUIProvider>;
};
