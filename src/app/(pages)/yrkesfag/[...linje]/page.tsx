export default async function Page({
    params,
}: {
    params: Promise<{ linje: string }>
}) {
    const linje = (await params).linje
    return <div>Linje: {linje.length}</div>
}