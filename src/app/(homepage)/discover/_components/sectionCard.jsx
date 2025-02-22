"use client";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Skeleton,
} from "@heroui/react";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";

export default function SectionCard({
  id,
  title,
  datetime,
  location,
  author,
  isLoading,
}) {
  const eventDate = moment(datetime).calendar();
  return (
    <Link href={`/${id}`}>
      <Card className="max-w-[500px] shadow-sm">
        <Skeleton className="rounded-lg" isLoaded={!isLoading}>
          <div className="h-24 rounded-lg bg-default-300" />
        </Skeleton>
        <CardHeader>
          <Skeleton isLoaded={!isLoading}>
            <h1 className="font-semibold text-sm">{title}</h1>
          </Skeleton>
        </CardHeader>
        <Divider />
        <CardBody className="flex">
          <Skeleton isLoaded={!isLoading}>
            <p className="text-slate-300 text-sm">{eventDate} </p>
            <p className="text-slate-300 text-sm">
              {location} - {author}
            </p>
          </Skeleton>
        </CardBody>
        <Divider />
      </Card>
    </Link>
  );
}
