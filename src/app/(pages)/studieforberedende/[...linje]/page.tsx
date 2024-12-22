"use client";

import { checkIfLinjeExists, getLinjeData } from "@/functions/studieforberedende/databaseFunctions";
import { redirect, usePathname } from 'next/navigation'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card";


export default async function Page({
  params,
}: {
  params: Promise<{ linje: string }>
}) {
  const linje = (await params).linje
  const linjeExists = await checkIfLinjeExists(linje);

  if (!linjeExists) { redirect("/"); } 

  const linjeData = await getLinjeData(linje);

  const handleCardClick = (id: number) => {
    redirect("/"+(id.toString()))
  }

  return (
    <div className="">
      <h1>{linjeData.name}</h1>

      {Object.values(linjeData.year_data).map((item, key) => (
          <Card key={item.id} className="bg-[] rounded-2xl cursor-pointer" onClick={() => handleCardClick(item.id)}>
            <CardHeader>
              <CardTitle>{item.name}</CardTitle>
              <CardDescription>{item.fag}</CardDescription>
            </CardHeader>
          </Card>
        ))}

    </div>
  )
}