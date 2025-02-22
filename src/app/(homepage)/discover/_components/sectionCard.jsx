"use client";
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

export default function SectionCard() {
  return (
    <section className="grid grid-cols-4 gap-5 ">
      <Link href={"/"}>
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
      </Link>
      <Link href={"/"}>
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
      </Link>
      <Link href={"/"}>
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
      </Link>
    </section>
  );
}
