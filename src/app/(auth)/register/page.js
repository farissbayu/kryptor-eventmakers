import { Button, Input } from "@heroui/react";
import React from "react";
import { ButtonOauthGoogle } from "../_components/button-oauth-google";
import Link from "next/link";

export default function Page() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="p-8 rounded-xl border">
        <h1 className="font-semibold text-lg text-slate-600 mb-4">
          Create an account
        </h1>
        <form className="space-y-4">
          <Input
            label="Email"
            type="email"
            name="email"
            variant="underlined"
            placeholder="Enter your email"
            className="min-w-64"
          />
          <Input
            label="Name"
            type="text"
            name="name"
            variant="underlined"
            placeholder="Enter your name"
            className="min-w-64"
          />
          <Input
            label="Password"
            type="password"
            name="password"
            variant="underlined"
            placeholder="********"
            className="min-w-64"
          />
          <Button
            className="w-full bg-cyan-700 text-white font-semibold"
            radius="lg"
          >
            Sign up
          </Button>
        </form>
        <hr className="my-4" />
        <ButtonOauthGoogle />
        <p className="text-sm mt-8 text-center">
          Already have an account?{" "}
          <Link href="/login" className="font-semibold hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
