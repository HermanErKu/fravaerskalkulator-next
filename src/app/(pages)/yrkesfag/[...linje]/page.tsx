import { checkIfLinjeExists, getLinjeData } from "@/functions/yrkesfag/databaseFunctions";
import { redirect, usePathname } from 'next/navigation'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card";
import SubLinjeCards from "@/components/SubLinjeCards";


export default async function Page({
  params,
}: {
  params: Promise<{ linje: string }>
}) {
  const linje = (await params).linje
  const linjeExists = await checkIfLinjeExists(linje);

  if (!linjeExists) { redirect("/"); }

  const linjeData = await getLinjeData(linje);

  const hasSubLinje = linje.length > 1;

  if (!hasSubLinje) {
    return (
      <div className="">
        <h1>{linjeData.name}</h1>

        <div className="grid grid-cols-2 gap-4">
          {Object.values(linjeData.year_data).map((item, key) => (
            <SubLinjeCards key={key} linjeData={item} />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div>
      test
    </div>

  )
}