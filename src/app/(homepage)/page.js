import Link from "next/link";

import TypedComponent from "./components/typed";

export default async function Page() {
  return (
    <div className="items-center justify-center p-56 text-center">
      <h1 className="text-5xl font-bold text-gray-900 mb-6">
        <TypedComponent />
      </h1>
      <h4 className="text-3xl font-bold text-gray-900 mb-6">
        Discover and Create Events
      </h4>
      <p className="text-xl text-gray-600 mb-8">
        Join the best events around you or host your own.
      </p>
      <div className="flex flex-col space-y-12">
        <div className="space-x-4">
          <Link
            href="/discover"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
          >
            Explore Events
          </Link>
        </div>
        <div className="space-x-4">
          <Link
            href="/event/create"
            className="border-2 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:border-blue-700 hover:bg-gray-100 transition-all"
          >
            Create Event
          </Link>
        </div>
      </div>
    </div>
  );
}
