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
  [key: number]: { name: string; ukeTimer?: number };

}

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
      { 0: { name: "Norsk", ukeTimer: 4 }, 1: { name: "Naturfag", ukeTimer: 3 }, 2: { name: "Matte", ukeTimer: 5 }, 3: { name: "Fremmedspråk", ukeTimer: 4 }, 4: { name: "Engelsk", ukeTimer: 5 }, 5: { name: "Aktivitetslære 1", ukeTimer: 5 }, 6: { name: "Treningslære 1", ukeTimer: 2 }, 7: { name: "Valgfritt programfag", ukeTimer: 5 }, name: "VG1", fag: 8, id:0 },
      { 0: { name: "Norsk", ukeTimer: 4 }, 1: { name: "Samfunnskunnskap", ukeTimer: 3 }, 2: { name: "Matte", ukeTimer: 3 }, 3: { name: "Fremmedspråk", ukeTimer: 4 }, 4: { name: "Geografi", ukeTimer: 2 }, 5: { name: "Historie", ukeTimer: 2 }, 6: { name: "Aktivitetslære 2", ukeTimer: 5 }, 7: { name: "Idrett og samfunn", ukeTimer: 2 }, 8: { name: "Treningsledelse 1", ukeTimer: 2 }, 9: { name: "Treningslære 1", ukeTimer: 3 }, 10: { name: "Valgfritt programfag", ukeTimer: 5 }, name: "VG2", fag: 11, id:1 },
      { 0: { name: "Norsk", ukeTimer: 6 }, 1: { name: "Religion og etikk", ukeTimer: 3 }, 2: { name: "Historie", ukeTimer: 4 }, 3: { name: "Aktivitetslære 3", ukeTimer: 5 }, 4: { name: "Idrett og samfunn", ukeTimer: 3 }, 5: { name: "Treningsledelse 2", ukeTimer: 4 }, 6: { name: "Treningslære 2", ukeTimer: 5 }, 7: { name: "Valgfritt programfag", ukeTimer: 5 }, name: "VG3", fag: 8, id:2 },
    ]
  },
  1: {
    name: "Kunst, design og arkitektur",
    year_data: [
      { 0: { name: "Norsk", ukeTimer: 4 }, 1: { name: "Naturfag", ukeTimer: 5 }, 2: { name: "Matte", ukeTimer: 5 }, 3: { name: "Fremmedspråk", ukeTimer: 4 }, 4: { name: "Engelsk", ukeTimer: 5 }, 5: { name: "Gym", ukeTimer: 2 }, 6: { name: "Design og arkitektur 1", ukeTimer: 5 }, 7: { name: "Kunst og visuelle virkemidler 1", ukeTimer: 5 }, name: "VG1", fag: 8, id:0 },
      { 0: { name: "Norsk", ukeTimer: 4 }, 1: { name: "Samfunnskunnskap", ukeTimer: 3 }, 2: { name: "Matte", ukeTimer: 3 }, 3: { name: "Fremmedspråk", ukeTimer: 4 }, 4: { name: "Geografi", ukeTimer: 2 }, 5: { name: "Historie", ukeTimer: 2 }, 6: { name: "Gym", ukeTimer: 2 }, 7: { name: "Design og arkitektur 2", ukeTimer: 5 }, 8: { name: "Kunst og visuelle virkemidler 2", ukeTimer: 5 }, 9: { name: "Valgfritt programfag", ukeTimer: 5 }, name: "VG2", fag: 10, id:1 },
      { 0: { name: "Norsk", ukeTimer: 6 }, 1: { name: "Religion og etikk", ukeTimer: 3 }, 2: { name: "Historie", ukeTimer: 4 }, 3: { name: "Gym", ukeTimer: 2 }, 4: { name: "Design og arkitektur 3", ukeTimer: 5 }, 5: { name: "Kunst og visuelle virkemidler 3", ukeTimer: 5 }, 6: { name: "Valgfritt programfag", ukeTimer: 10 }, name: "VG3", fag: 7, id:2 },
    ]
  },
  2: {
    name: "Medier og kommunikasjon",
    year_data: [
      { 0: { 'name': 'Engelsk', 'ukeTimer': 5 }, 1: { 'name': 'Fremmedspråk', 'ukeTimer': 4 }, 2: { 'name': 'Gym', 'ukeTimer': 2 }, 3: { 'name': 'Matte', 'ukeTimer': 5 }, 4: { 'name': 'Naturfag', 'ukeTimer': 5 }, 5: { 'name': 'Norsk', 'ukeTimer': 4 }, 6: { 'name': 'Mediesamfunnet 1', 'ukeTimer': 5 }, 7: { 'name': 'Medieuttrykk 1', 'ukeTimer': 5 }, 'name': 'VG1', 'fag': 8, id:0 },
      { 0: { 'name': 'Fremmedspråk', 'ukeTimer': 4 }, 1: { 'name': 'Geografi', 'ukeTimer': 2 }, 2: { 'name': 'Historie', 'ukeTimer': 2 }, 3: { 'name': 'Gym', 'ukeTimer': 2 }, 4: { 'name': 'Matte', 'ukeTimer': 3 }, 5: { 'name': 'Norsk', 'ukeTimer': 4 }, 6: { 'name': 'Samfunnskunnskap', 'ukeTimer': 3 }, 7: { 'name': 'Mediesamfunnet 2', 'ukeTimer': 5 }, 8: { 'name': 'Medieuttrykk 2', 'ukeTimer': 5 }, 9: { 'name': 'Valgfritt programfag', 'ukeTimer': 5 }, 'name': 'VG2', 'fag': 10, id:1 },
      { 0: { 'name': 'Historie', 'ukeTimer': 4 }, 1: { 'name': 'Gym', 'ukeTimer': 2 }, 2: { 'name': 'Norsk', 'ukeTimer': 6 }, 3: { 'name': 'Religion og etikk', 'ukeTimer': 3 }, 4: { 'name': 'Mediesamfunnet 3', 'ukeTimer': 5 }, 5: { 'name': 'Medieuttrykk 3', 'ukeTimer': 5 }, 6: { 'name': 'Valgfritt programfag', 'ukeTimer': 9 }, 'name': 'VG3', 'fag': 7, id:2 },
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
      { 0: { name: "Norsk", ukeTimer: 4 }, 1: { name: "Naturfag", ukeTimer: 5 }, 2: { name: "Matte", ukeTimer: 5 }, 3: { name: "Fremmedspråk", ukeTimer: 4 }, 4: { name: "Geografi", ukeTimer: 2 }, 5: { name: "Engelsk", ukeTimer: 5 }, 6: { name: "Samfunnskunnskap", ukeTimer: 3 }, 7: { name: "Gym", ukeTimer: 2 }, name: "VG1", fag: 8, id:0 },
      { 0: { name: "Norsk", ukeTimer: 4 }, 1: { name: "Historie", ukeTimer: 2 }, 2: { name: "Matte", ukeTimer: 3 }, 3: { name: "Fremmedspråk", ukeTimer: 4 }, 4: { name: "Gym", ukeTimer: 2 }, 5: { name: "Programfag fra eget programområde", ukeTimer: 15 }, name: "VG2", fag: 6, id:1 },
      { 0: { name: "Norsk", ukeTimer: 6 }, 1: { name: "Historie", ukeTimer: 4 }, 2: { name: "Religion og etikk", ukeTimer: 3 }, 3: { name: "Gym", ukeTimer: 2 }, 4: { name: "Programfag fra eget programområde", ukeTimer: 10 }, 5: { name: "Valgfritt programfag", ukeTimer: 5 }, name: "VG3", fag: 6, id:2 },

      { 0: { name: "Norsk", ukeTimer: 10 }, 1: { name: "Historie", ukeTimer: 5 }, 2: { name: "Matte", ukeTimer: 5 }, 3: { name: "Naturfag", ukeTimer: 3 }, 4: { name: "Gym", ukeTimer: 2 }, 5: { name: "Valgfritt programfag", ukeTimer: 5 }, name: "Påbygg (VG3)", fag: 6, id:3 },
    ]
  },
}