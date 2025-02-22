"use client";

import { usePathname } from "next/navigation";
import { useActionState } from "react";
import logoutAction from "../action/logout";
import Link from "next/link";

export default function Navbar({ isLogin }) {
  const [state, formAction, pending] = useActionState(logoutAction, null);
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="flex bg-gray-50 p-4 justify-between">
      <h1 className="font-semibold text-black text-2xl">.Eventmaker</h1>
      {!isLogin && (
        <Link
          href="/register"
          className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold border border-blue-600 hover:bg-blue-50"
        >
          Sign Up
        </Link>
      )}
      {isLogin && (
        <div>
          <h1 className="font-semibold text-black text-2xl">
            {isLogin.data.user.name}
          </h1>
          <form action={formAction}>
            <button type="submit">Logout</button>
          </form>
        </div>
      )}
    </div>
  );
}
