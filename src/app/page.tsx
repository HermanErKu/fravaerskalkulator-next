"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  
  const studieForberedende = [{ name: "Idrettsfag", description: "Studieforberedende", id: 0, }, { name : "Kunst, design og arkitektur", description: "Studieforberedende", id: 1, }, { name: "Medier og kommunikasjon", description: "Studieforberedende", id: 2, }, { name: "Musikk, dans og drama", description: "Studieforberedende", id: 3, }, { name: "Studiespesialisering", description: "Studieforberedende", id: 4, } ]
  const yrkesfag = [{ name: "Bygg- og anleggsteknikk", description: "Yrkesfag", id:0 }, { name: "Elektro og datateknologi", description: "Yrkesfag", id:1 }, { name: "Frisør, blomster, interiør og eksponeringsdesign", description: "Yrkesfag", id:2 }, { name: "Helse- og oppvekstfag", description: "Yrkesfag", id:3 }, { name: "Håndverk, design og produktutvikling", description: "Yrkesfag", id:4 }, { name: "Informasjonsteknologi og medieproduksjon", description: "Yrkesfag", id:5 }, { name: "Naturbruk", description: "Yrkesfag", id:6 }, { name: "Restaurant- og matfag", description: "Yrkesfag", id:7 }, { name: "Salg, service og reiseliv", description: "Yrkesfag", id:8 }, { name: "Teknologi- og industrifag", description: "Yrkesfag", id:9 }]

  const handleCardClick = (description:string, id: number) => {
    router.push("/"+description.toLowerCase()+"/"+(id.toString()))
  }

  return (
    <div className="m-4">
      <div className="grid grid-cols-2 gap-4">
      {studieForberedende.map((item) => (
          <Card key={item.id} className="bg-[] border-solid border-2 border-[#fcc025] rounded-2xl cursor-pointer" onClick={() => handleCardClick(item.description, item.id)}>
            <CardHeader className="px-2 py-3 md:px-3 lg:px-6 lg:py-6">
              <CardTitle>{item.name}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      <div className="py-4"></div>

      <div className="grid grid-cols-2 gap-4">
        {yrkesfag.map((item) => (
          <Card key={item.id} className="bg-[] border-solid border-2 border-[#8ac75a] rounded-2xl cursor-pointer" onClick={() => handleCardClick(item.description, item.id)}>
            <CardHeader className="px-2 py-3 md:px-3 lg:px-6 lg:py-6">
              <CardTitle>{item.name}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}

      </div>
    </div>
  );
}
