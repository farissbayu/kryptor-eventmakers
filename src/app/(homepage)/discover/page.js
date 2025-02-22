import { Button } from "@heroui/react";
import Link from "next/link";
import React, { Suspense } from "react";
import SectionCard from "./_components/sectionCard";

export default function page() {
  return (
    <div className="block space-y-10 items-center justify-center p-10">
      <section className="items-center text-center">
        <h1 className="text-2xl font-semibold">Discover Events</h1>
        <h1 className="text-sm text-slate-500">
          Explore popular events near you, browse by category, or check out some
          of the great community calendars.
        </h1>
      </section>
      <section>
        <h1 className="text-xl">Popular Events</h1>
        <h1 className="text-sm text-slate-500">Jakarta</h1>
        <div className="flex items-end justify-end">
          <Button variant="flat">
            <Link href={"/discover/all"}>View All </Link>
          </Button>
        </div>
      </section>
      <section className="grid grid-cols-4 gap-5 ">
        <SectionCard
          id="1"
          title="Jakarta | AI-Builder Co-working - 22 Feb"
          datetime="Today , 06:00 PM "
          location="Jakarta"
          author="Ary"
        />
        <SectionCard
          id="1"
          title="Jakarta | AI-Builder Co-working - 22 Feb"
          datetime="Today , 06:00 PM "
          location="Jakarta"
          author="Ary"
        />
      </section>
    </div>
  );
}
