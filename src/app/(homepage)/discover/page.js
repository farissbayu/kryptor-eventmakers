import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
} from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="block space-y-10 items-center justify-center">
      <section className="items-center">
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
        <Card className="max-w-[500px] shadow-sm">
          <CardHeader>
            <h1 className="font-semibold text-sm">
              Jakarta | AI-Builder Co-working - 22 Feb
            </h1>
          </CardHeader>
          <Divider />
          <CardBody className="flex">
            <p className="text-slate-300 text-sm">Today , 06:00 PM </p>
            <p className="text-slate-300 text-sm">Trinity Tower - Ary P</p>
          </CardBody>
          <Divider />
        </Card>
        <Card className="max-w-[500px] shadow-sm">
          <CardHeader>
            <h1 className="font-semibold text-sm">
              Jakarta | AI-Builder Co-working - 22 Feb
            </h1>
          </CardHeader>
          <Divider />
          <CardBody className="flex">
            <p className="text-slate-300 text-sm">Today , 06:00 PM </p>
            <p className="text-slate-300 text-sm">Trinity Tower - Ary P</p>
          </CardBody>
          <Divider />
        </Card>
        <Card className="max-w-[500px] shadow-sm">
          <CardHeader>
            <h1 className="font-semibold text-sm">
              Jakarta | AI-Builder Co-working - 22 Feb
            </h1>
          </CardHeader>
          <Divider />
          <CardBody className="flex">
            <p className="text-slate-300 text-sm">Today , 06:00 PM </p>
            <p className="text-slate-300 text-sm">Trinity Tower - Ary P</p>
          </CardBody>
          <Divider />
        </Card>
      </section>
    </div>
  );
}
