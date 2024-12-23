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

interface StudiefagData {
  name: string;
  year_data: {
    [key: number]: YearData;
  };
};

export const getLinjeData = async (linje: string) => {
  const linjeID = parseInt(linje[0]);
  return studiefag_data[linjeID];
}




const studiefag_data: { [key: number]: StudiefagData } = {
  0: {
    name: "Idrettsfag",
    year_data: [
      { 0: { name: "Norsk", timer: 4 }, 1: { name: "Naturfag", timer: 3 }, 2: { name: "Matte", timer: 5 }, 3: { name: "Fremmedspråk", timer: 4 }, 4: { name: "Engelsk", timer: 5 }, 5: { name: "Aktivitetslære 1", timer: 5 }, 6: { name: "Treningslære 1", timer: 2 }, 7: { name: "Valgfritt programfag", timer: 5 }, name: "VG1", fag: 8, id:0, year:0 },
      { 0: { name: "Norsk", timer: 4 }, 1: { name: "Samfunnskunnskap", timer: 3 }, 2: { name: "Matte", timer: 3 }, 3: { name: "Fremmedspråk", timer: 4 }, 4: { name: "Geografi", timer: 2 }, 5: { name: "Historie", timer: 2 }, 6: { name: "Aktivitetslære 2", timer: 5 }, 7: { name: "Idrett og samfunn", timer: 2 }, 8: { name: "Treningsledelse 1", timer: 2 }, 9: { name: "Treningslære 1", timer: 3 }, 10: { name: "Valgfritt programfag", timer: 5 }, name: "VG2", fag: 11, id:1, year:1 },
      { 0: { name: "Norsk", timer: 6 }, 1: { name: "Religion og etikk", timer: 3 }, 2: { name: "Historie", timer: 4 }, 3: { name: "Aktivitetslære 3", timer: 5 }, 4: { name: "Idrett og samfunn", timer: 3 }, 5: { name: "Treningsledelse 2", timer: 4 }, 6: { name: "Treningslære 2", timer: 5 }, 7: { name: "Valgfritt programfag", timer: 5 }, name: "VG3", fag: 8, id:2, year:2 },
    ]
  },
  1: {
    name: "Kunst, design og arkitektur",
    year_data: [
      { 0: { name: "Norsk", timer: 4 }, 1: { name: "Naturfag", timer: 5 }, 2: { name: "Matte", timer: 5 }, 3: { name: "Fremmedspråk", timer: 4 }, 4: { name: "Engelsk", timer: 5 }, 5: { name: "Gym", timer: 2 }, 6: { name: "Design og arkitektur 1", timer: 5 }, 7: { name: "Kunst og visuelle virkemidler 1", timer: 5 }, name: "VG1", fag: 8, id:0, year:0 },
      { 0: { name: "Norsk", timer: 4 }, 1: { name: "Samfunnskunnskap", timer: 3 }, 2: { name: "Matte", timer: 3 }, 3: { name: "Fremmedspråk", timer: 4 }, 4: { name: "Geografi", timer: 2 }, 5: { name: "Historie", timer: 2 }, 6: { name: "Gym", timer: 2 }, 7: { name: "Design og arkitektur 2", timer: 5 }, 8: { name: "Kunst og visuelle virkemidler 2", timer: 5 }, 9: { name: "Valgfritt programfag", timer: 5 }, name: "VG2", fag: 10, id:1, year:1 },
      { 0: { name: "Norsk", timer: 6 }, 1: { name: "Religion og etikk", timer: 3 }, 2: { name: "Historie", timer: 4 }, 3: { name: "Gym", timer: 2 }, 4: { name: "Design og arkitektur 3", timer: 5 }, 5: { name: "Kunst og visuelle virkemidler 3", timer: 5 }, 6: { name: "Valgfritt programfag", timer: 10 }, name: "VG3", fag: 7, id:2, year:2 },
    ]
  },
  2: {
    name: "Medier og kommunikasjon",
    year_data: [
      { 0: { 'name': 'Engelsk', 'timer': 5 }, 1: { 'name': 'Fremmedspråk', 'timer': 4 }, 2: { 'name': 'Gym', 'timer': 2 }, 3: { 'name': 'Matte', 'timer': 5 }, 4: { 'name': 'Naturfag', 'timer': 5 }, 5: { 'name': 'Norsk', 'timer': 4 }, 6: { 'name': 'Mediesamfunnet 1', 'timer': 5 }, 7: { 'name': 'Medieuttrykk 1', 'timer': 5 }, 'name': 'VG1', 'fag': 8, id:0, year:0 },
      { 0: { 'name': 'Fremmedspråk', 'timer': 4 }, 1: { 'name': 'Geografi', 'timer': 2 }, 2: { 'name': 'Historie', 'timer': 2 }, 3: { 'name': 'Gym', 'timer': 2 }, 4: { 'name': 'Matte', 'timer': 3 }, 5: { 'name': 'Norsk', 'timer': 4 }, 6: { 'name': 'Samfunnskunnskap', 'timer': 3 }, 7: { 'name': 'Mediesamfunnet 2', 'timer': 5 }, 8: { 'name': 'Medieuttrykk 2', 'timer': 5 }, 9: { 'name': 'Valgfritt programfag', 'timer': 5 }, 'name': 'VG2', 'fag': 10, id:1, year:1 },
      { 0: { 'name': 'Historie', 'timer': 4 }, 1: { 'name': 'Gym', 'timer': 2 }, 2: { 'name': 'Norsk', 'timer': 6 }, 3: { 'name': 'Religion og etikk', 'timer': 3 }, 4: { 'name': 'Mediesamfunnet 3', 'timer': 5 }, 5: { 'name': 'Medieuttrykk 3', 'timer': 5 }, 6: { 'name': 'Valgfritt programfag', 'timer': 9 }, 'name': 'VG3', 'fag': 7, id:2, year:2 },
    ]
  },
  3: {
    name: "Musikk, dans og drama",
    year_data: [
    ]
  },
  4: {
    name: "Studiespesialisering",
    year_data: [
      { 0: { name: "Norsk", timer: 4 }, 1: { name: "Naturfag", timer: 5 }, 2: { name: "Matte", timer: 5 }, 3: { name: "Fremmedspråk", timer: 4 }, 4: { name: "Geografi", timer: 2 }, 5: { name: "Engelsk", timer: 5 }, 6: { name: "Samfunnskunnskap", timer: 3 }, 7: { name: "Gym", timer: 2 }, name: "VG1", fag: 8, id:0, year:0 },
      { 0: { name: "Norsk", timer: 4 }, 1: { name: "Historie", timer: 2 }, 2: { name: "Matte", timer: 3 }, 3: { name: "Fremmedspråk", timer: 4 }, 4: { name: "Gym", timer: 2 }, 5: { name: "Programfag fra eget programområde", timer: 15 }, name: "VG2", fag: 6, id:1, year:1 },
      { 0: { name: "Norsk", timer: 6 }, 1: { name: "Historie", timer: 4 }, 2: { name: "Religion og etikk", timer: 3 }, 3: { name: "Gym", timer: 2 }, 4: { name: "Programfag fra eget programområde", timer: 10 }, 5: { name: "Valgfritt programfag", timer: 5 }, name: "VG3", fag: 6, id:2, year:2 },

      { 0: { name: "Norsk", timer: 10 }, 1: { name: "Historie", timer: 5 }, 2: { name: "Matte", timer: 5 }, 3: { name: "Naturfag", timer: 3 }, 4: { name: "Gym", timer: 2 }, 5: { name: "Valgfritt programfag", timer: 5 }, name: "Påbygg (VG3)", fag: 6, id:0, year:4 },
    ]
  },
}