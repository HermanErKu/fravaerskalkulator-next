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

interface LinjeData {
  name: string;
  year_data: {
    [key: number]: YearData;
  };
};


interface SubLinjeCardsProps {
  data: YearData[];
}

const SubLinjeCards: React.FC<SubLinjeCardsProps> = ({ data }) => {
  const pathname = usePathname()

  const handleCardClick = (id: number) => {
    const newUrl = pathname.toString() + "/" + id.toString()
    redirect(newUrl)
  }

  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        {Object.values(data.filter((filterData) => filterData.year == 1)).map((linjeData) => (
          <Card key={linjeData.id} id={"year_"+linjeData.id.toString()} className="bg-[] rounded-2xl cursor-pointer" onClick={() => handleCardClick(linjeData.id)}>
            <CardHeader>  
              <CardTitle>{linjeData.name}</CardTitle>
              <CardDescription>{linjeData.year}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4">
        {Object.values(data.filter((filterData) => filterData.year == 2)).map((linjeData) => (
          <Card key={linjeData.id} id={"year_"+linjeData.id.toString()} className="bg-[] rounded-2xl cursor-pointer" onClick={() => handleCardClick(linjeData.id)}>
            <CardHeader>  
              <CardTitle>{linjeData.name}</CardTitle>
              <CardDescription>{linjeData.year}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4">
        {Object.values(data.filter((filterData) => filterData.year == 3)).map((linjeData) => (
          <Card key={linjeData.id} id={"year_"+linjeData.id.toString()} className="bg-[] rounded-2xl cursor-pointer" onClick={() => handleCardClick(linjeData.id)}>
            <CardHeader>  
              <CardTitle>{linjeData.name}</CardTitle>
              <CardDescription>{linjeData.year}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4">
        {Object.values(data.filter((filterData) => filterData.year == 4)).map((linjeData) => (
          <Card key={linjeData.id} id={"year_"+linjeData.id.toString()} className="bg-[] rounded-2xl cursor-pointer" onClick={() => handleCardClick(linjeData.id)}>
            <CardHeader>  
              <CardTitle>{linjeData.name}</CardTitle>
              <CardDescription>{linjeData.year}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )

}

export default SubLinjeCards