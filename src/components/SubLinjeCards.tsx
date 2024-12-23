"use client";

import { redirect, usePathname } from 'next/navigation'
import { Card, CardDescription, CardHeader, CardTitle, } from "@/components/ui/card";

interface YearData {
  name: string;
  id: number,
  fag: number,
  year: number,
  [key: number]: { name: string; timer?: number };

}

interface SubLinjeCardsProps {
  linjeData: YearData;
}

const SubLinjeCards: React.FC<SubLinjeCardsProps> = ({ linjeData /* other props */ }) => {
  const pathname = usePathname()

  const handleCardClick = (id: number) => {
    const newUrl = pathname.toString() + "/" + id.toString()
    redirect(newUrl)
  }

  return (
    <Card key={linjeData.id} id={"year_"+linjeData.id.toString()} className="bg-[] rounded-2xl cursor-pointer" onClick={() => handleCardClick(linjeData.id)}>
      <CardHeader>
        <CardTitle>{linjeData.name}</CardTitle>
        <CardDescription>{linjeData.year}</CardDescription>
      </CardHeader>
    </Card>

  )

}

export default SubLinjeCards