export const checkIfLinjeExists = async (linje: string) => {
  if (linje.length === 0 || linje.length >= 3) {
    return false
  }
  return true
}

interface YearData {
  name: string;
  id: number,
  fag: number,
  year: number,
  [key: number]: { name: string; timer?: number };

}

interface YrkesfagData {
  name: string;
  year_data: {
    [key: number]: YearData;
  };
};

export const getLinjeData = async (linje: string) => {
  const linjeID = parseInt(linje[0]);
  return yrkesfag_data[linjeID];
}




const yrkesfag_data: { [key: number]: YrkesfagData } = {
  0: {
    name: "Bygg- og anleggsteknikk",
    year_data: [
      { 0: { name: 'Engelsk', timer: 140 }, 1: { name: 'Gym', timer: 56 }, 2: { name: 'Matte', timer: 84 }, 3: { name: 'Naturfag', timer: 56 }, 4: { name: 'Arbeidsmiljø og dokumentasjon', timer: 140 }, 5: { name: 'Praktisk yrkesutøvelse', timer: 337 }, 6: { name: 'YFF', timer: 168 }, name: 'Bygg- og anleggsteknikk', fag: 7, year: 1, id: 0 },
      { 0: { name: 'Gym', timer: 56 }, 1: { name: 'Norsk', timer: 112 }, 2: { name: 'Samfunnskunnskap', timer: 84 }, 3: { name: 'Anleggsgartnerarbeid', timer: 337 }, 4: { name: 'Rammebetingelser for anleggsgartnerarbeid', timer: 140 }, 5: { name: 'YFF', timer: 253 }, name: 'Anleggsgartner', fag: 6, year: 2, id: 1 },
      { 0: { name: 'Gym', timer: 56 }, 1: { name: 'Norsk', timer: 112 }, 2: { name: 'Samfunnskunnskap', timer: 84 }, 3: { name: 'Drift og vedlikehold', timer: 140 }, 4: { name: 'Grunnarbeider', timer: 197 }, 5: { name: 'Sikkerhetsopplæring for masseforflytningsmaskiner', timer: 140 }, 6: { name: 'YFF', timer: 253 }, name: 'Anleggsteknikk', fag: 7, year: 2, id: 2 },
      { 0: { name: 'Gym', timer: 56 }, 1: { name: 'Norsk', timer: 112 }, 2: { name: 'Samfunnskunnskap', timer: 84 }, 3: { name: 'Betong og mur', timer: 337 }, 4: { name: 'Dokumentasjon og kommunikasjon', timer: 140 }, 5: { name: 'YFF', timer: 253 }, name: 'Betong og mur', fag: 6, year: 2, id: 3 },
      { 0: { name: 'Gym', timer: 56 }, 1: { name: 'Norsk', timer: 112 }, 2: { name: 'Samfunnskunnskap', timer: 84 }, 3: { name: 'Arbeidsmiljø og dokumentasjon', timer: 140 }, 4: { name: 'Praktisk yrkesutøvelse', timer: 337 }, 5: { name: 'YFF', timer: 253 }, name: 'Klima, energi og miljøteknikk', fag: 6, year: 2, id: 4 },
      { 0: { name: 'Gym', timer: 56 }, 1: { name: 'Norsk', timer: 112 }, 2: { name: 'Samfunnskunnskap', timer: 84 }, 3: { name: 'Forbehandling og påføring', timer: 337 }, 4: { name: 'Helse, miljø og sikkerhet', timer: 140 }, 5: { name: 'YFF', timer: 253 }, name: 'Overflateteknikk', fag: 6, year: 2, id: 5 },
      { 0: { name: 'Gym', timer: 56 }, 1: { name: 'Norsk', timer: 112 }, 2: { name: 'Samfunnskunnskap', timer: 84 }, 3: { name: 'Bransjelære', timer: 140 }, 4: { name: 'Sanitærteknikk', timer: 197 }, 5: { name: 'Varmeteknikk', timer: 140 }, 6: { name: 'YFF', timer: 253 }, name: 'Rørlegger', fag: 7, year: 2, id: 6 },
      { 0: { name: 'Gym', timer: 56 }, 1: { name: 'Norsk', timer: 112 }, 2: { name: 'Samfunnskunnskap', timer: 84 }, 3: { name: 'Arbeidsplanlegging og tegning', timer: 140 }, 4: { name: 'Materialkunnskap', timer: 140 }, 5: { name: 'Produksjon', timer: 197 }, 6: { name: 'YFF', timer: 253 }, name: 'Trearbeid', fag: 7, year: 2, id: 7 },
      { 0: { name: 'Gym', timer: 56 }, 1: { name: 'Norsk', timer: 112 }, 2: { name: 'Samfunnskunnskap', timer: 84 }, 3: { name: 'Produksjon', timer: 337 }, 4: { name: 'Tegning og materialvalg', timer: 140 }, 5: { name: 'YFF', timer: 253 }, name: 'Treteknikk', fag: 6, year: 2, id: 8 },
      { 0: { name: 'Gym', timer: 56 }, 1: { name: 'Norsk', timer: 112 }, 2: { name: 'Samfunnskunnskap', timer: 84 }, 3: { name: 'Konstruksjoner og klimaskall', timer: 197 }, 4: { name: 'Materialegenskaper, varmeisolering og tetting', timer: 140 }, 5: { name: 'Vinduer, dører og innvendig arbeid', timer: 140 }, 6: { name: 'YFF', timer: 253 }, name: 'Tømrer', fag: 7, year: 2, id: 9 },
      { 0: { name: 'Gym', timer: 56 }, 1: { name: 'Norsk', timer: 112 }, 2: { name: 'Samfunnskunnskap', timer: 84 }, 3: { name: 'Konstruksjoner og klimaskall', timer: 197 }, 4: { name: 'Materialegenskaper, varmeisolering og tetting', timer: 140 }, 5: { name: 'Vinduer, dører og innvendig arbeid', timer: 140 }, 6: { name: 'YFF', timer: 253 }, name: 'Tømrer', fag: 7, year: 2, id: 10 },
    ]
  },

  1: {
    name: "Elektro og datateknologi",
    year_data: [
      { 0: { name: 'Engelsk', timer: 140 }, 1: { name: 'Gym', timer: 56 }, 2: { name: 'Matte', timer: 84 }, 3: { name: 'Naturfag', timer: 56 }, 4: { name: 'Elektroniske kretser og nettverk', timer: 197 }, 5: { name: 'Energi- og styresystemer', timer: 280 }, 6: { name: 'YFF', timer: 168 }, name: 'Elektro og datateknologi', fag: 7, year: 1, id: 0 },
      { 0: { name: 'Gym', timer: 56 }, 1: { name: 'Norsk', timer: 112 }, 2: { name: 'Samfunnskunnskap', timer: 84 }, 3: { name: 'Planlegging og kommunikasjon', timer: 140 }, 4: { name: 'Reparasjon og vedlikehold', timer: 337 }, 5: { name: 'YFF', timer: 253 }, name: 'Arbeidsmaskiner', fag: 6, year: 2, id: 1 },
      { 0: { name: 'Gym', timer: 56 }, 1: { name: 'Dokumentasjon og kontroll', timer: 170 }, 2: { name: 'Feilsøking, reparasjon og vedlikehold', timer: 755 }, name: 'Anleggsmaskinmekanikerfaget', fag: 3, year: 3, id: 2 },
      { 0: { name: 'Gym', timer: 56 }, 1: { name: 'Norsk', timer: 112 }, 2: { name: 'Samfunnskunnskap', timer: 84 }, 3: { name: 'Automatiseringssystemer', timer: 337 }, 4: { name: 'Elenergisystemer', timer: 140 }, 5: { name: 'YFF', timer: 253 }, name: 'Automatisering', fag: 6, year: 2, id: 3 },
      { 0: { name: 'Gym', timer: 56 }, 1: { name: 'Automatiseringssystemer', timer: 645 }, 2: { name: 'Elenergisystemer', timer: 140 }, 3: { name: 'Mekanisk arbeid', timer: 140 }, name: 'Automatiseringsfaget', fag: 4, year: 3, id: 4 },
      { 0: { name: 'Gym', timer: 56 }, 1: { name: 'Norsk', timer: 112 }, 2: { name: 'Samfunnskunnskap', timer: 84 }, 3: { name: 'Boring', timer: 197 }, 4: { name: 'Komplettering og brønnservice', timer: 140 }, 5: { name: 'Prosedyrer og praksis', timer: 140 }, 6: { name: 'YFF', timer: 253 }, name: 'Brønnteknikk', fag: 7, year: 2, id: 5 },
      { 0: { name: 'Gym', timer: 56 }, 1: { name: 'Norsk', timer: 112 }, 2: { name: 'Samfunnskunnskap', timer: 84 }, 3: { name: 'Data- og informasjonsteknologi', timer: 197 }, 4: { name: 'Elektroniske kretser og utstyr', timer: 280 }, 5: { name: 'YFF', timer: 253 }, name: 'Datateknologi og elektronikk', fag: 6, year: 2, id: 6 },
      { 0: { name: 'Gym', timer: 56 }, 1: { name: 'Installering og drift', timer: 420 }, 2: { name: 'Reparasjon og vedlikehold', timer: 505 }, name: 'Dataelektronikerfaget', fag: 3, year: 3, id: 7 },
      { 0: { name: 'Gym', timer: 56 }, 1: { name: 'Matte', timer: 140 }, 2: { name: 'Elektronikk og kommunikasjonsteknologi', timer: 140 }, 3: { name: 'Fjernanalyse og geografiske informasjonssystemer', timer: 140 }, 4: { name: 'Romfysikk', timer: 140 }, 5: { name: 'Romteknologi og satelitteknikk', timer: 140 }, 6: { name: 'Telemetri', timer: 140 }, name: 'Romteknologi', fag: 7, year: 3, id: 8 },
      { 0: { name: 'Gym', timer: 56 }, 1: { name: 'Norsk', timer: 112 }, 2: { name: 'Samfunnskunnskap', timer: 84 }, 3: { name: 'Nyttelast, sensorer og bearbeiding av data', timer: 177 }, 4: { name: 'Operasjon og sikkerhet', timer: 300 }, 5: { name: 'YFF', timer: 253 }, name: 'Drone', fag: 6, year: 2, id: 9 },
      { 0: { name: 'Gym', timer: 56 }, 1: { name: 'Norsk', timer: 112 }, 2: { name: 'Samfunnskunnskap', timer: 84 }, 3: { name: 'Elektronisk kommunikasjon', timer: 140 }, 4: { name: 'Elenergi og styresystemer', timer: 337 }, 5: { name: 'YFF', timer: 253 }, name: 'Elenergi og ekom', fag: 6, year: 2, id: 10 },
      { 0: { name: 'Gym', timer: 56 }, 1: { name: 'Automasjon', timer: 250 }, 2: { name: 'Elektronisk kommunikasjon', timer: 185 }, 3: { name: 'Elenergi', timer: 350 }, 4: { name: 'Organisasjon og ledelse', timer: 140 }, name: 'Maritim elektriker', fag: 5, year: 3, id: 11 },
      { 0: { name: 'Gym', timer: 56 }, 1: { name: 'Norsk', timer: 112 }, 2: { name: 'Samfunnskunnskap', timer: 84 }, 3: { name: 'Elektrofag', timer: 197 }, 4: { name: 'Luftfartøylære', timer: 140 }, 5: { name: 'Material- og komponentlære', timer: 140 }, 6: { name: 'YFF', timer: 253 }, name: 'Flyfag', fag: 7, year: 2, id: 12 },
      { 0: { name: 'Gym', timer: 56 }, 1: { name: 'Gym', timer: 56 }, 2: { name: 'Flysikkerhet', timer: 140 }, 3: { name: 'Luftfartøysystemer', timer: 463 }, 4: { name: 'Vedlikeholdsteknikk', timer: 322 }, name: 'Avionikerfag', fag: 5, year: 3, id: 13 },
      { 0: { name: 'Gym', timer: 56 }, 1: { name: 'Flysikkerhet', timer: 140 }, 2: { name: 'Luftfartøysystemer', timer: 478 }, 3: { name: 'Vedlikeholdsteknikk', timer: 307 }, name: 'Flytekniske fag', fag: 4, year: 3, id: 14 },
      { 0: { name: 'Gym', timer: 56 }, 1: { name: 'Flysikkerhet', timer: 140 }, 2: { name: 'Luftfartøysystemer', timer: 478 }, 3: { name: 'Vedlikeholdsteknikk', timer: 307 }, name: 'Flytekniske fag', fag: 4, year: 3, id: 15 },
      { 0: { name: 'Gym', timer: 56 }, 1: { name: 'Norsk', timer: 112 }, 2: { name: 'Samfunnskunnskap', timer: 84 }, 3: { name: 'Teknologi', timer: 337 }, 4: { name: 'Vedlikehold', timer: 140 }, 5: { name: 'YFF', timer: 253 }, name: 'Industriteknologi', fag: 6, year: 2, id: 16 },
      { 0: { name: 'Gym', timer: 56 }, 1: { name: 'Norsk', timer: 112 }, 2: { name: 'Samfunnskunnskap', timer: 84 }, 3: { name: 'Analyse, dokumentasjon og kvalitet', timer: 140 }, 4: { name: 'Kjemisk teknologi', timer: 168 }, 5: { name: 'Produksjon og tjenester', timer: 169 }, 6: { name: 'YFF', timer: 253 }, name: 'Kjemiprosess- og laboratoriefag', fag: 7, year: 2, id: 17 },
      { 0: { name: 'Gym', timer: 56 }, 1: { name: 'Norsk', timer: 112 }, 2: { name: 'Samfunnskunnskap', timer: 84 }, 3: { name: 'Dokumentasjon og kvalitet', timer: 140 }, 4: { name: 'Verkstedarbeid', timer: 337 }, 5: { name: 'YFF', timer: 253 }, name: 'Kjøretøy', fag: 6, year: 2, id: 18 },
      { 0: { name: 'Gym', timer: 56 }, 1: { name: 'Norsk', timer: 112 }, 2: { name: 'Samfunnskunnskap', timer: 84 }, 3: { name: 'Elenergi og automatisering', timer: 140 }, 4: { name: 'Kulde- og varmepumpeteknikk', timer: 169 }, 5: { name: 'Ventilasjonsteknikk', timer: 168 }, 6: { name: 'YFF', timer: 253 }, name: 'Kulde-, varmepumpe- og ventilasjonsteknikk', fag: 7, year: 2, id: 19 },
      { 0: { name: 'Gym', timer: 56 }, 1: { name: 'Norsk', timer: 112 }, 2: { name: 'Samfunnskunnskap', timer: 84 }, 3: { name: 'Dokumentasjon og kvalitet', timer: 140 }, 4: { name: 'Skipstekniske tjenester', timer: 197 }, 5: { name: 'Dekk', timer: 140 }, 6: { name: 'Maskin', timer: 140 }, 7: { name: 'YFF', timer: 253 }, name: 'Maritime fag', fag: 8, year: 2, id: 20 },
      { 0: { name: 'Gym', timer: 56 }, 1: { name: 'Norsk', timer: 112 }, 2: { name: 'Samfunnskunnskap', timer: 84 }, 3: { name: 'Produksjon og vedlikehold', timer: 337 }, 4: { name: 'Produktutvikling', timer: 140 }, 5: { name: 'YFF', timer: 253 }, name: 'Urmaker', fag: 6, year: 2, id: 21 },
    ]
  },

  2: {
    name: "Frisør, blomster, interiør og eksponeringsdesign",
    year_data: [
      { 0: { name: 'Engelsk', timer: 140 }, 1: { name: 'Gym', timer: 56 }, 2: { name: 'Matte', timer: 84 }, 3: { name: 'Naturfag', timer: 56 }, 4: { name: 'Kommunikasjon, kunde og arbeidsliv', timer: 197 }, 5: { name: 'Produktutvikling og produksjon', timer: 280 }, 6: { name: 'YFF', timer: 168 }, name: 'Frisør, blomster, interiør og eksponeringsdesign', fag: 7, year: 1, id: 0 },
      { 0: { name: 'Gym', timer: 56 }, 1: { name: 'Norsk', timer: 112 }, 2: { name: 'Samfunnskunnskap', timer: 84 }, 3: { name: 'Produksjon og arbeidsliv', timer: 290 }, 4: { name: 'Produktutvikling, bransjelære og kommunikasjon', timer: 187 }, 5: { name: 'YFF', timer: 253 }, name: 'Blomsterdekoratør', fag: 6, year: 2, id: 1 },
      { 0: { name: 'Gym', timer: 56 }, 1: { name: 'Norsk', timer: 112 }, 2: { name: 'Samfunnskunnskap', timer: 84 }, 3: { name: 'Hår, farge og strukturendring', timer: 220 }, 4: { name: 'Kommunikasjon, klipp og frisyreforming', timer: 257 }, 5: { name: 'YFF', timer: 253 }, name: 'Frisør', fag: 6, year: 2, id: 2 },
      { 0: { name: 'Gym', timer: 56 }, 1: { name: 'Norsk', timer: 112 }, 2: { name: 'Samfunnskunnskap', timer: 84 }, 3: { name: 'Design, teknologi og produksjon', timer: 337 }, 4: { name: 'Kunde og kommunikasjon', timer: 140 }, 5: { name: 'YFF', timer: 253 }, name: 'Interiør og eksponeringsdesign', fag: 6, year: 2, id: 3 },
      { 0: { name: 'Gym', timer: 56 }, 1: { name: 'Bedriftskultur og markedsføring', timer: 265 }, 2: { name: 'Produksjon og konseptutvikling', timer: 660 }, name: 'Eksponeringsdesign', fag: 3, year: 3, id: 4 },
      { 0: { name: 'Gym', timer: 56 }, 1: { name: 'Kunde og kommunikasjon', timer: 265 }, 2: { name: 'Prosess og prosjektering', timer: 660 }, name: 'Interiør', fag: 3, year: 3, id: 5 },
    ]
  },

  3: {
    name: "Helse- og oppvekstfag",
    year_data: [
      { 0: { name: 'Engelsk', timer: 140 }, 1: { name: 'Gym', timer: 56 }, 2: { name: 'Matte', timer: 84 }, 3: { name: 'Naturfag', timer: 56 }, 4: { name: 'Helsefremmende arbeid', timer: 197 }, 5: { name: 'Kommunikasjon og samhandling', timer: 140 }, 6: { name: 'Yrkesliv i helse- og oppvekstfag', timer: 140 }, 7: { name: 'YFF', timer: 168 }, name: 'Helse- og oppvekstfag', fag: 8, year: 1, id: 0 },
      { 0: { name: 'Gym', timer: 56 }, 1: { name: 'Norsk', timer: 112 }, 2: { name: 'Samfunnskunnskap', timer: 84 }, 3: { name: 'Administrasjon', timer: 140 }, 4: { name: 'Kommunikasjon og samhandling', timer: 140 }, 5: { name: 'Yrkesliv i aktivitørfag', timer: 197 }, 6: { name: 'YFF', timer: 253 }, name: 'Aktivitør', fag: 7, year: 2, id: 1 },
      { 0: { name: 'Gym', timer: 56 }, 1: { name: 'Norsk', timer: 112 }, 2: { name: 'Samfunnskunnskap', timer: 84 }, 3: { name: 'Ambulansemedisin', timer: 197 }, 4: { name: 'Kommunikasjon og samhandling', timer: 140 }, 5: { name: 'Yrkesliv i ambulansefag', timer: 140 }, 6: { name: 'YFF', timer: 253 }, name: 'Ambulansefag', fag: 7, year: 2, id: 2 },
      { 0: { name: 'Gym', timer: 56 }, 1: { name: 'Norsk', timer: 112 }, 2: { name: 'Samfunnskunnskap', timer: 84 }, 3: { name: 'Kommunikasjon og samhandling', timer: 140 }, 4: { name: 'Pedagogisk arbeid', timer: 197 }, 5: { name: 'Yrkesliv i barne- og ungdomsarbeiderfag', timer: 140 }, 6: { name: 'YFF', timer: 253 }, name: 'Barne- og ungdomsarbeiderfag', fag: 7, year: 2, id: 3 },
      { 0: { name: 'Gym', timer: 56 }, 1: { name: 'Norsk', timer: 112 }, 2: { name: 'Samfunnskunnskap', timer: 84 }, 3: { name: 'Helse, funksjon og bevegelse', timer: 197 }, 4: { name: 'Kommunikasjon og samhandling', timer: 140 }, 5: { name: 'Yrkesliv i fotterapi og ortopediteknikk', timer: 140 }, 6: { name: 'YFF', timer: 253 }, name: 'Fotterapi og ortopediteknikk', fag: 7, year: 2, id: 4 },
      { 0: { name: 'Gym', timer: 56 }, 1: { name: 'Helse, funksjon og bevegelse', timer: 250 }, 2: { name: 'Kommunikasjon og samhandling', timer: 250 }, 3: { name: 'Yrkesliv i fotterapifaget', timer: 425 }, name: 'Fotterapi', fag: 4, year: 3, id: 5 },
      { 0: { name: 'Gym', timer: 56 }, 1: { name: 'Norsk', timer: 112 }, 2: { name: 'Samfunnskunnskap', timer: 84 }, 3: { name: 'Helsefremmende arbeid', timer: 197 }, 4: { name: 'Kommunikasjon og samhandling', timer: 140 }, 5: { name: 'Yrkesliv i helsearbeiderfag', timer: 140 }, 6: { name: 'YFF', timer: 253 }, name: 'Helsearbeiderfag', fag: 7, year: 2, id: 6 },
      { 0: { name: 'Gym', timer: 56 }, 1: { name: 'Norsk', timer: 112 }, 2: { name: 'Samfunnskunnskap', timer: 84 }, 3: { name: 'Helse og sykdom', timer: 197 }, 4: { name: 'Kommunikasjon og samhandling', timer: 140 }, 5: { name: 'Yrkesliv i helseservicefag', timer: 140 }, 6: { name: 'YFF', timer: 253 }, name: 'Helseservicefag', fag: 7, year: 2, id: 7 },
      { 0: { name: 'Gym', timer: 56 }, 1: { name: 'Helseveiledning i apotek', timer: 371 }, 2: { name: 'Kommunikasjon og samhandling', timer: 139 }, 3: { name: 'Yrkesliv i apotek', timer: 415 }, name: 'Apotekteknikk', fag: 4, year: 3, id: 8 },
      { 0: { name: 'Gym', timer: 56 }, 1: { name: 'Helse og sykdom', timer: 371 }, 2: { name: 'Kommunikasjon og samhandling', timer: 184 }, 3: { name: 'Yrkesliv i helsesekretærfaget', timer: 370 }, name: 'Helsesekretær', fag: 4, year: 3, id: 9 },
      { 0: { name: 'Gym', timer: 56 }, 1: { name: 'Kommunikasjon og samhandling', timer: 250 }, 2: { name: 'Smittevern, tannanatomi og fysiologi', timer: 250 }, 3: { name: 'Yrkesliv i tannhelsesekretærfaget', timer: 425 }, name: 'Tannhelsesekretær', fag: 4, year: 3, id: 10 },
      { 0: { name: 'Gym', timer: 56 }, 1: { name: 'Norsk', timer: 112 }, 2: { name: 'Samfunnskunnskap', timer: 84 }, 3: { name: 'Helsefremmende arbeid', timer: 140 }, 4: { name: 'Kommunikasjon og samhandling', timer: 140 }, 5: { name: 'Yrkesliv i hudpleiefag', timer: 197 }, 6: { name: 'YFF', timer: 253 }, name: 'Hudpleie', fag: 7, year: 2, id: 11 },
      { 0: { name: 'Gym', timer: 56 }, 1: { name: 'Helsefremmende arbeid', timer: 250 }, 2: { name: 'Kommunikasjon og samhandling', timer: 250 }, 3: { name: 'Yrkesliv i hudpleiefaget', timer: 425 }, name: 'Hudterapi', fag: 4, year: 3, id: 12 },
    ]
  },

  4: {
    name: "Håndverk, design og produktutvikling",
    year_data: [
      { 0: { name: 'Engelsk', timer: 140 }, 1: { name: 'Gym', timer: 56 }, 2: { name: 'Matte', timer: 84 }, 3: { name: 'Naturfag', timer: 56 }, 4: { name: 'Materialer og teknikker', timer: 337 }, 5: { name: 'Produktutvikling og skapende prosesser', timer: 140 }, 6: { name: 'YFF', timer: 168 }, name: 'Håndverk, design og produktutvikling', fag: 7, year: 1, id: 0 },
      { 0: { name: 'Gym', timer: 56 }, 1: { name: 'Norsk', timer: 112 }, 2: { name: 'Samfunnskunnskap', timer: 84 }, 3: { name: 'Materialer og konstruksjon', timer: 140 }, 4: { name: 'Produksjon', timer: 337 }, 5: { name: 'YFF', timer: 253 }, name: 'Båtbygger', fag: 6, year: 2, id: 1 },
      { 0: { name: 'Gym', timer: 56 }, 1: { name: 'Norsk', timer: 112 }, 2: { name: 'Samfunnskunnskap', timer: 84 }, 3: { name: 'Duodji og designprosesser', timer: 140 }, 4: { name: 'Materialkunnskap, duodjiutøvelse og kulturarv', timer: 337 }, 5: { name: 'YFF', timer: 253 }, name: 'Duodji', fag: 6, year: 2, id: 2 },
      { 0: { name: 'Gym', timer: 56 }, 1: { name: 'Norsk', timer: 112 }, 2: { name: 'Samfunnskunnskap', timer: 84 }, 3: { name: 'Design og produktutvikling', timer: 140 }, 4: { name: 'Gull- og sølvsmedhåndverk', timer: 337 }, 5: { name: 'YFF', timer: 253 }, name: 'Gull- og sølvsmedhåndverk', fag: 6, year: 2, id: 3 },
      { 0: { name: 'Gym', timer: 56 }, 1: { name: 'Norsk', timer: 112 }, 2: { name: 'Samfunnskunnskap', timer: 84 }, 3: { name: 'Design og produktutvikling', timer: 140 }, 4: { name: 'Smedhåndverk', timer: 337 }, 5: { name: 'YFF', timer: 253 }, name: 'Smed', fag: 6, year: 2, id: 4 },
      { 0: { name: 'Gym', timer: 56 }, 1: { name: 'Norsk', timer: 112 }, 2: { name: 'Samfunnskunnskap', timer: 84 }, 3: { name: 'Design og produktutvikling', timer: 140 }, 4: { name: 'Produksjon og materialer', timer: 337 }, 5: { name: 'YFF', timer: 253 }, name: 'Søm og tekstilhåndverk', fag: 6, year: 2, id: 5 },
      { 0: { name: 'Gym', timer: 56 }, 1: { name: 'Norsk', timer: 112 }, 2: { name: 'Samfunnskunnskap', timer: 84 }, 3: { name: 'Arbeidsplanlegging og tegning', timer: 140 }, 4: { name: 'Materialkunnskap', timer: 140 }, 5: { name: 'Produksjon', timer: 197 }, 6: { name: 'YFF', timer: 253 }, name: 'Trearbeid', fag: 7, year: 2, id: 6 },
      { 0: { name: 'Gym', timer: 56 }, 1: { name: 'Norsk', timer: 112 }, 2: { name: 'Samfunnskunnskap', timer: 84 }, 3: { name: 'Produksjon og vedlikehold', timer: 337 }, 4: { name: 'Produktutvikling', timer: 140 }, 5: { name: 'YFF', timer: 253 }, name: 'Urmaker', fag: 6, year: 2, id: 7 },
    ]
  },

  5: {
    name: "Informasjonsteknologi og medieproduksjon",
    year_data: [
      { 0: { name: 'Engelsk', timer: 140 }, 1: { name: 'Gym', timer: 56 }, 2: { name: 'Matte', timer: 84 }, 3: { name: 'Naturfag', timer: 56 }, 4: { name: 'Konseptutvikling og programmering', timer: 159 }, 5: { name: 'Produksjon og historiefortelling', timer: 159 }, 6: { name: 'Teknologiforståelse', timer: 159 }, 7: { name: 'YFF', timer: 168 }, name: 'Informasjonsteknologi og medieproduksjon', fag: 8, year: 1, id: 0 },
      { 0: { name: 'Gym', timer: 56 }, 1: { name: 'Norsk', timer: 112 }, 2: { name: 'Samfunnskunnskap', timer: 84 }, 3: { name: 'Brukerstøtte', timer: 140 }, 4: { name: 'Driftsstøtte', timer: 169 }, 5: { name: 'Utvikling', timer: 168 }, 6: { name: 'YFF', timer: 253 }, name: 'Informasjonsteknologi', fag: 7, year: 2, id: 1 },
      { 0: { name: 'Gym', timer: 56 }, 1: { name: 'Norsk', timer: 112 }, 2: { name: 'Samfunnskunnskap', timer: 84 }, 3: { name: 'Design og visualisering', timer: 159 }, 4: { name: 'Konseptutvikling og kommunikasjon', timer: 159 }, 5: { name: 'Teknologi og produksjon', timer: 159 }, 6: { name: 'YFF', timer: 253 }, name: 'Medieproduksjon', fag: 7, year: 2, id: 2 },
    ]
  },

  6: {
    name: "Naturbruk",
    year_data: [
      { 0: { name: 'Engelsk', timer: 140 }, 1: { name: 'Gym', timer: 56 }, 2: { name: 'Matte', timer: 84 }, 3: { name: 'Naturfag', timer: 56 }, 4: { name: 'Naturbasert næringsaktivitet', timer: 140 }, 5: { name: 'Naturbasert produksjon og tjenesteyting', timer: 337 }, 6: { name: 'YFF', timer: 168 }, name: 'Naturbruk', fag: 7, year: 1, id: 0 },
      { 0: { name: 'Gym', timer: 56 }, 1: { name: 'Norsk', timer: 112 }, 2: { name: 'Samfunnskunnskap', timer: 84 }, 3: { name: 'Anlegg og teknikk', timer: 140 }, 4: { name: 'Biologi og miljø', timer: 140 }, 5: { name: 'Drift og produksjon', timer: 197 }, 6: { name: 'YFF', timer: 253 }, name: 'Akvakultur', fag: 7, year: 2, id: 1 },
      { 0: { name: 'Gym', timer: 56 }, 1: { name: 'Norsk', timer: 112 }, 2: { name: 'Samfunnskunnskap', timer: 84 }, 3: { name: 'Anlegg og teknikk', timer: 140 }, 4: { name: 'Biologi og miljø', timer: 140 }, 5: { name: 'Drift og produksjon', timer: 197 }, 6: { name: 'YFF', timer: 253 }, name: 'Akvakultur', fag: 7, year: 2, id: 2 },
      { 0: { name: 'Gym', timer: 56 }, 1: { name: 'Norsk', timer: 112 }, 2: { name: 'Samfunnskunnskap', timer: 84 }, 3: { name: 'Anleggsgartnerarbeid', timer: 337 }, 4: { name: 'Rammebetingelser for anleggsgartnerarbeid', timer: 140 }, 5: { name: 'YFF', timer: 253 }, name: 'Anleggsgartner', fag: 6, year: 2, id: 3 },
      { 0: { name: 'Gym', timer: 56 }, 1: { name: 'Norsk', timer: 112 }, 2: { name: 'Samfunnskunnskap', timer: 84 }, 3: { name: 'Fangst og kvalitet', timer: 140 }, 4: { name: 'Fartøy og redskaper', timer: 337 }, 5: { name: 'YFF', timer: 253 }, name: 'Fiske og fangst', fag: 6, year: 2, id: 4 },
      { 0: { name: 'Gym', timer: 56 }, 1: { name: 'Norsk', timer: 112 }, 2: { name: 'Samfunnskunnskap', timer: 84 }, 3: { name: 'Drift og entreprenørskap', timer: 197 }, 4: { name: 'Dyrelære og aktivitet', timer: 280 }, 5: { name: 'YFF', timer: 253 }, name: 'Heste- og dyrefag', fag: 6, year: 2, id: 5 },
      { 0: { name: 'Gym', timer: 56 }, 1: { name: 'Norsk', timer: 112 }, 2: { name: 'Samfunnskunnskap', timer: 84 }, 3: { name: 'Forvaltning og drift', timer: 180 }, 4: { name: 'Produksjon og tjenesteyting', timer: 297 }, 5: { name: 'YFF', timer: 253 }, name: 'Landbruk og gartnernæring', fag: 6, year: 2, id: 6 },
      { 0: { name: 'Gym', timer: 56 }, 1: { name: 'Gym', timer: 56 }, 2: { name: 'Gårdsdrift', timer: 168 }, 3: { name: 'Plante- og husdyrproduksjon', timer: 337 }, 4: { name: 'Utmark og kulturlandskap', timer: 140 }, 5: { name: 'Maskiner og teknologi i landbruk', timer: 140 }, 6: { name: 'Økologisk landbruk', timer: 140 }, 7: { name: 'Økonomi og driftsledelse', timer: 140 }, name: 'Landbruk', fag: 8, year: 3, id: 7 },
      { 0: { name: 'Gym', timer: 56 }, 1: { name: 'Norsk', timer: 112 }, 2: { name: 'Samfunnskunnskap', timer: 84 }, 3: { name: 'Reindriftsbasert aktivitet og produksjon', timer: 190 }, 4: { name: 'Reinen og dens naturmiljø', timer: 135 }, 5: { name: 'Økonomi og ressursforvaltning', timer: 152 }, 6: { name: 'YFF', timer: 253 }, name: 'Reindrift', fag: 7, year: 2, id: 8 },
      { 0: { name: 'Gym', timer: 56 }, 1: { name: 'Norsk', timer: 112 }, 2: { name: 'Samfunnskunnskap', timer: 84 }, 3: { name: 'Skogsdrift og maskinlære', timer: 279 }, 4: { name: 'Skogskjøtsel, klima og næring', timer: 198 }, 5: { name: 'YFF', timer: 253 }, name: 'Skogbruk', fag: 6, year: 2, id: 9 },
    ]
  },

  7: {
    name: "Restaurant- og matfag",
    year_data: [
      { 0: { name: 'Engelsk', timer: 140 }, 1: { name: 'Gym', timer: 56 }, 2: { name: 'Matte', timer: 84 }, 3: { name: 'Naturfag', timer: 56 }, 4: { name: 'Bransje og arbeidsliv', timer: 140 }, 5: { name: 'Råvare, produksjon og kvalitet', timer: 337 }, 6: { name: 'YFF', timer: 168 }, name: 'Restaurant- og matfag', fag: 7, year: 1, id: 0 },
      { 0: { name: 'Gym', timer: 56 }, 1: { name: 'Norsk', timer: 112 }, 2: { name: 'Samfunnskunnskap', timer: 84 }, 3: { name: 'Bransje og arbeidsliv', timer: 140 }, 4: { name: 'Råvare, produksjon og kvalitet', timer: 337 }, 5: { name: 'YFF', timer: 253 }, name: 'Baker og konditor', fag: 6, year: 2, id: 1 },
      { 0: { name: 'Gym', timer: 56 }, 1: { name: 'Norsk', timer: 112 }, 2: { name: 'Samfunnskunnskap', timer: 84 }, 3: { name: 'Bransje og arbeidsliv', timer: 140 }, 4: { name: 'Råvare, produksjon, salg og service', timer: 337 }, 5: { name: 'YFF', timer: 253 }, name: 'Kokk- og servitørfag', fag: 6, year: 2, id: 2 },
      { 0: { name: 'Gym', timer: 56 }, 1: { name: 'Norsk', timer: 112 }, 2: { name: 'Samfunnskunnskap', timer: 84 }, 3: { name: 'Bransje og arbeidsliv', timer: 140 }, 4: { name: 'Råvare, produksjon og kvalitet', timer: 337 }, 5: { name: 'YFF', timer: 253 }, name: 'Matproduksjon', fag: 6, year: 2, id: 3 },
    ]
  },

  8: {
    name: "Salg, service og reiseliv",
    year_data: [
      { 0: { name: 'Engelsk', timer: 140 }, 1: { name: 'Gym', timer: 56 }, 2: { name: 'Matte', timer: 84 }, 3: { name: 'Naturfag', timer: 56 }, 4: { name: 'Forretningsdrift', timer: 169 }, 5: { name: 'Kultur og samhandling', timer: 140 }, 6: { name: 'Markedsføring og innovasjon', timer: 168 }, 7: { name: 'YFF', timer: 168 }, name: 'Salg, service og reiseliv', fag: 8, year: 1, id: 0 },
      { 0: { name: 'Gym', timer: 56 }, 1: { name: 'Norsk', timer: 112 }, 2: { name: 'Samfunnskunnskap', timer: 84 }, 3: { name: 'Forretningsdrift', timer: 159 }, 4: { name: 'Innovasjon og markedsføring', timer: 159 }, 5: { name: 'Kultur og kommunikasjon', timer: 159 }, 6: { name: 'YFF', timer: 253 }, name: 'Salg og reiseliv', fag: 7, year: 2, id: 1 },
      { 0: { name: 'Gym', timer: 56 }, 1: { name: 'Norsk', timer: 112 }, 2: { name: 'Samfunnskunnskap', timer: 84 }, 3: { name: 'Administrasjon og bærekraftig drift', timer: 168 }, 4: { name: 'Kommunikasjon og yrkesutøvelse', timer: 140 }, 5: { name: 'Sikkerhet', timer: 169 }, 6: { name: 'YFF', timer: 253 }, name: 'Service, sikkerhet og administrasjon', fag: 7, year: 2, id: 2 },
    ]
  },

  9: {
    name: "Teknologi- og industrifag",
    year_data: [
      { 0: { name: 'Engelsk', timer: 140 }, 1: { name: 'Gym', timer: 56 }, 2: { name: 'Matte', timer: 84 }, 3: { name: 'Naturfag', timer: 56 }, 4: { name: 'Konstruksjons- og styringsteknikk', timer: 140 }, 5: { name: 'Produksjon og tjenester', timer: 197 }, 6: { name: 'Produktivitet og kvalitetsstyring', timer: 140 }, 7: { name: 'YFF', timer: 168 }, name: 'Teknologi- og industrifag', fag: 8, year: 1, id: 0 },
      { 0: { name: 'Gym', timer: 56 }, 1: { name: 'Norsk', timer: 112 }, 2: { name: 'Samfunnskunnskap', timer: 84 }, 3: { name: 'Drift og vedlikehold', timer: 140 }, 4: { name: 'Grunnarbeider', timer: 197 }, 5: { name: 'Sikkerhetsopplæring for masseforflytningsmaskiner', timer: 140 }, 6: { name: 'YFF', timer: 253 }, name: 'Anleggsteknikk', fag: 7, year: 2, id: 1 },
      { 0: { name: 'Gym', timer: 56 }, 1: { name: 'Norsk', timer: 112 }, 2: { name: 'Samfunnskunnskap', timer: 84 }, 3: { name: 'Planlegging og kommunikasjon', timer: 140 }, 4: { name: 'Reparasjon og vedlikehold', timer: 337 }, 5: { name: 'YFF', timer: 253 }, name: 'Arbeidsmaskiner', fag: 6, year: 2, id: 2 },
      { 0: { name: 'Gym', timer: 56 }, 1: { name: 'Dokumentasjon og kontroll', timer: 170 }, 2: { name: 'Feilsøking, reparasjon og vedlikehold', timer: 755 }, name: 'Anleggsmaskinmekanikerfaget', fag: 3, year: 3, id: 3 },
      { 0: { name: 'Gym', timer: 56 }, 1: { name: 'Norsk', timer: 112 }, 2: { name: 'Samfunnskunnskap', timer: 84 }, 3: { name: 'Automatiseringssystemer', timer: 337 }, 4: { name: 'Elenergisystemer', timer: 140 }, 5: { name: 'YFF', timer: 253 }, name: 'Automatisering', fag: 6, year: 2, id: 4 },
      { 0: { name: 'Gym', timer: 56 }, 1: { name: 'Automatiseringssystemer', timer: 645 }, 2: { name: 'Elenergisystemer', timer: 140 }, 3: { name: 'Mekanisk arbeid', timer: 140 }, name: 'Automatiseringsfaget', fag: 4, year: 3, id: 5 },
      { 0: { name: 'Gym', timer: 56 }, 1: { name: 'Norsk', timer: 112 }, 2: { name: 'Samfunnskunnskap', timer: 84 }, 3: { name: 'Dokumentasjon og kvalitet', timer: 140 }, 4: { name: 'Karosseri- og lakkteknikk', timer: 337 }, 5: { name: 'YFF', timer: 253 }, name: 'Bilskade, lakk og karosseri', fag: 6, year: 2, id: 6 },
      { 0: { name: 'Gym', timer: 56 }, 1: { name: 'Norsk', timer: 112 }, 2: { name: 'Samfunnskunnskap', timer: 84 }, 3: { name: 'Boring', timer: 197 }, 4: { name: 'Komplettering og brønnservice', timer: 140 }, 5: { name: 'Prosedyrer og praksis', timer: 140 }, 6: { name: 'YFF', timer: 253 }, name: 'Brønnteknikk', fag: 7, year: 2, id: 7 },
      { 0: { name: 'Gym', timer: 56 }, 1: { name: 'Norsk', timer: 112 }, 2: { name: 'Samfunnskunnskap', timer: 84 }, 3: { name: 'Produksjon', timer: 277 }, 4: { name: 'Produktutvikling og kvalitetssikring', timer: 200 }, 5: { name: 'YFF', timer: 253 }, name: 'Børsemaker', fag: 6, year: 2, id: 8 },
      { 0: { name: 'Gym', timer: 56 }, 1: { name: 'Norsk', timer: 112 }, 2: { name: 'Samfunnskunnskap', timer: 84 }, 3: { name: 'Materialer og konstruksjon', timer: 140 }, 4: { name: 'Produksjon', timer: 337 }, 5: { name: 'YFF', timer: 253 }, name: 'Båtbygger', fag: 6, year: 2, id: 9 },
      { 0: { name: 'Gym', timer: 56 }, 1: { name: 'Norsk', timer: 112 }, 2: { name: 'Samfunnskunnskap', timer: 84 }, 3: { name: 'Elektrofag', timer: 197 }, 4: { name: 'Luftfartøylære', timer: 140 }, 5: { name: 'Material- og komponentlære', timer: 140 }, 6: { name: 'YFF', timer: 253 }, name: 'Flyfag', fag: 7, year: 2, id: 10 },
      { 0: { name: 'Gym', timer: 56 }, 1: { name: 'Gym', timer: 56 }, 2: { name: 'Flysikkerhet', timer: 140 }, 3: { name: 'Luftfartøysystemer', timer: 463 }, 4: { name: 'Vedlikeholdsteknikk', timer: 322 }, name: 'Avionikerfag', fag: 5, year: 3, id: 11 },
      { 0: { name: 'Gym', timer: 56 }, 1: { name: 'Flysikkerhet', timer: 140 }, 2: { name: 'Luftfartøysystemer', timer: 478 }, 3: { name: 'Vedlikeholdsteknikk', timer: 307 }, name: 'Flytekniske fag', fag: 4, year: 3, id: 12 },
      { 0: { name: 'Gym', timer: 56 }, 1: { name: 'Norsk', timer: 112 }, 2: { name: 'Samfunnskunnskap', timer: 84 }, 3: { name: 'Design og produktutvikling', timer: 140 }, 4: { name: 'Gull- og sølvsmedhåndverk', timer: 337 }, 5: { name: 'YFF', timer: 253 }, name: 'Gull- og sølvsmedhåndverk', fag: 6, year: 2, id: 13 },
      { 0: { name: 'Gym', timer: 56 }, 1: { name: 'Norsk', timer: 112 }, 2: { name: 'Samfunnskunnskap', timer: 84 }, 3: { name: 'Teknologi', timer: 337 }, 4: { name: 'Vedlikehold', timer: 140 }, 5: { name: 'YFF', timer: 253 }, name: 'Industriteknologi', fag: 6, year: 2, id: 14 },
      { 0: { name: 'Gym', timer: 56 }, 1: { name: 'Norsk', timer: 112 }, 2: { name: 'Samfunnskunnskap', timer: 84 }, 3: { name: 'Analyse, dokumentasjon og kvalitet', timer: 140 }, 4: { name: 'Kjemisk teknologi', timer: 168 }, 5: { name: 'Produksjon og tjenester', timer: 169 }, 6: { name: 'YFF', timer: 253 }, name: 'Kjemiprosess- og laboratoriefag', fag: 7, year: 2, id: 15 },
      { 0: { name: 'Gym', timer: 56 }, 1: { name: 'Norsk', timer: 112 }, 2: { name: 'Samfunnskunnskap', timer: 84 }, 3: { name: 'Dokumentasjon og kvalitet', timer: 140 }, 4: { name: 'Verkstedarbeid', timer: 337 }, 5: { name: 'YFF', timer: 253 }, name: 'Kjøretøy', fag: 6, year: 2, id: 16 },
      { 0: { name: 'Gym', timer: 56 }, 1: { name: 'Norsk', timer: 112 }, 2: { name: 'Samfunnskunnskap', timer: 84 }, 3: { name: 'Elenergi og automatisering', timer: 140 }, 4: { name: 'Kulde- og varmepumpeteknikk', timer: 169 }, 5: { name: 'Ventilasjonsteknikk', timer: 168 }, 6: { name: 'YFF', timer: 253 }, name: 'Kulde-, varmepumpe- og ventilasjonsteknikk', fag: 7, year: 2, id: 17 },
      { 0: { name: 'Gym', timer: 56 }, 1: { name: 'Norsk', timer: 112 }, 2: { name: 'Samfunnskunnskap', timer: 84 }, 3: { name: 'Dokumentasjon og kvalitet', timer: 140 }, 4: { name: 'Skipstekniske tjenester', timer: 197 }, 5: { name: 'Dekk', timer: 140 }, 6: { name: 'Maskin', timer: 140 }, 7: { name: 'YFF', timer: 253 }, name: 'Maritime fag', fag: 8, year: 2, id: 18 },
      { 0: { name: 'Gym', timer: 56 }, 1: { name: 'Norsk', timer: 112 }, 2: { name: 'Samfunnskunnskap', timer: 84 }, 3: { name: 'Design og produktutvikling', timer: 140 }, 4: { name: 'Smedhåndverk', timer: 337 }, 5: { name: 'YFF', timer: 253 }, name: 'Smed', fag: 6, year: 2, id: 19 },
      { 0: { name: 'Gym', timer: 56 }, 1: { name: 'Norsk', timer: 112 }, 2: { name: 'Samfunnskunnskap', timer: 84 }, 3: { name: 'Bransjelære', timer: 140 }, 4: { name: 'Bransjeteknikk', timer: 140 }, 5: { name: 'Transport, logistikk og løfteoperasjoner', timer: 197 }, 6: { name: 'YFF', timer: 253 }, name: 'Transport og logistikk', fag: 7, year: 2, id: 20 },
      { 0: { name: 'Gym', timer: 56 }, 1: { name: 'Norsk', timer: 112 }, 2: { name: 'Samfunnskunnskap', timer: 84 }, 3: { name: 'Produksjon og vedlikehold', timer: 337 }, 4: { name: 'Produktutvikling', timer: 140 }, 5: { name: 'YFF', timer: 253 }, name: 'Urmaker', fag: 6, year: 2, id: 21 },
    ]
  }
}