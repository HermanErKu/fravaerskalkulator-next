import { checkIfLinjeExists, getLinjeData } from "@/functions/studieforberedende/databaseFunctions";
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
  const sortedLinjeData = Object.values(linjeData.year_data).sort((a, b) => a.year - b.year);

  const hasSubLinje = linje.length > 1;

  if (!hasSubLinje) {
    return (
      <div className="">
        <h1>{linjeData.name}</h1>
  
        {Object.values(sortedLinjeData).map((item, key) => (
          <SubLinjeCards key={key} linjeData={item} />
        ))}
      </div>
    )
  }

  return (
    <div>
      test
    </div>

  )
}