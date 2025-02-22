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
import Image from "next/image";
import Link from "next/link";
import { useActionState, useEffect, useState } from "react";

export default function SectionCard({ id, title, datetime, location, author }) {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Link href={`/${id}`}>
      <Card className="max-w-[500px] shadow-sm">
        <Skeleton className="rounded-lg" isLoaded={isLoaded}>
          <div className="h-24 rounded-lg bg-default-300" />
        </Skeleton>
        <CardHeader>
          <Skeleton isLoaded={isLoaded}>
            <h1 className="font-semibold text-sm">{title}</h1>
          </Skeleton>
        </CardHeader>
        <Divider />
        <CardBody className="flex">
          <Skeleton isLoaded={isLoaded}>
            <p className="text-slate-300 text-sm">{datetime} </p>
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
