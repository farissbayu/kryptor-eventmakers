import { Button, Input } from "@heroui/react";
import React from "react";
import { ButtonOauthGoogle } from "../_components/button-oauth-google";
import Link from "next/link";

export default function Page() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="p-8 rounded-xl border">
        <h1 className="font-semibold text-lg text-slate-600">
          Welcome to{" "}
          <span className="underline text-slate-900 font-bold">
            .eventmakers
          </span>
        </h1>
        <p className="text-sm text-slate-600 mt-4 mb-2">
          Please login first to continue!
        </p>
        <form className="space-y-4">
          <Input
            label="Email"
            type="email"
            variant="underlined"
            placeholder="Enter your email"
            className="min-w-64"
          />
          <Input
            label="Password"
            type="password"
            variant="underlined"
            placeholder="********"
            className="min-w-64"
          />
          <Button
            className="w-full bg-cyan-700 text-white font-semibold"
            radius="lg"
          >
            Login
          </Button>
        </form>
        <hr className="my-4" />
        <ButtonOauthGoogle />
        <p className="text-sm mt-8 text-center">
          Don't have an account?{" "}
          <Link href="/register" className="font-semibold hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
