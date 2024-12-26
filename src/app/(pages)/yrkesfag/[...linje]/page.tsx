import { checkIfLinjeExists, getLinjeData } from "@/functions/yrkesfag/databaseFunctions";
import { redirect, usePathname } from 'next/navigation'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card";
import SubLinjeCards from "@/components/SubLinjeCards";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator, } from "@/components/ui/breadcrumb"


export default async function Page({
  params,
}: {
  params: Promise<{ linje: string }>
}) {
  const linje = (await params).linje
  const linjeExists = await checkIfLinjeExists(linje);

  if (!linjeExists) { redirect("/"); } 

  const linjeData = await getLinjeData(linje);
  const sortedLinjeData = Object.values(linjeData.year_data).sort((a, b) => a.year - b.year);

  const hasSubLinje = linje.length > 1;

  if (!hasSubLinje) {
    return (
      <div className="">
        <h1>{linjeData.name}</h1>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Hjem</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{linjeData.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <SubLinjeCards data={sortedLinjeData} />
      </div>
    )
  }

  return (
    <div>
      <h1>{linjeData.year_data[parseInt(linje[1])].name}</h1>

      <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Hjem</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href={"/yrkesfag/"+linje[0]}>{linjeData.name}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{linjeData.year_data[parseInt(linje[1])].name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      test
    </div>

  )
}