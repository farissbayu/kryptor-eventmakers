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

export default function SectionCard({ id, title, datetime, location, author }) {
  return (
    <Link href={`/${id}`}>
      <Card className="max-w-[500px] shadow-sm">
        <CardHeader>
          <h1 className="font-semibold text-sm">{title}</h1>
        </CardHeader>
        <Divider />
        <CardBody className="flex">
          <p className="text-slate-300 text-sm">{datetime} </p>
          <p className="text-slate-300 text-sm">
            {location} - {author}
          </p>
        </CardBody>
        <Divider />
      </Card>
    </Link>
  );
}
