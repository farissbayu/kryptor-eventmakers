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
  image,
  description,
  updatedAt,
}) {
  const eventDate = moment(datetime).calendar();
  const updatedAtMoment = moment(updatedAt).calendar();

  return (
    <Link href={`/${id}`}>
      <Card className="w-96 h-[500px] shadow-sm">
        <Skeleton className="rounded-lg " isLoaded={!isLoading}>
          <div className="h-64">
            <Image
              key={id}
              src={`https://pub-7b7153db905041f797194b1a5ea73784.r2.dev/kryptor-eventmakers/${id}/${image}`}
              width={400}
              height={400}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        </Skeleton>
        <CardHeader>
          <Skeleton isLoaded={!isLoading}>
            <h1 className="font-semibold text-sm line-clamp-2">{title}</h1>
          </Skeleton>
        </CardHeader>
        <Divider />
        <CardBody className="flex">
          <Skeleton isLoaded={!isLoading}>
            <p className="text-slate-300 text-sm">{eventDate} </p>
            <p className="text-slate-300 text-sm">{description}</p>
          </Skeleton>
        </CardBody>
        <Divider />
        <CardFooter>
          <Skeleton isLoaded={!isLoading}>
            <p className="text-slate-300 text-sm">
              {location} - {author}
            </p>
            <p className="text-slate-300 text-sm">{updatedAtMoment} </p>
          </Skeleton>
        </CardFooter>
      </Card>
    </Link>
  );
}
