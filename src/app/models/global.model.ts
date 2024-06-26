export interface ReceivedGlobal {
    "updated": number;
    "cases": number;
    "todayCases": number;
    "deaths": number;
    "recovered": number;
    "todayRecovered": number;
    "active": number;
    "critical": number;
    "casesPerOneMillion": number;
    "deathsPerOneMillion": number;
    "tests": number;
    "testsPerOneMillion": number;
    "population": number;
    "oneCasePerPeople": number;
    "oneDeathPerPeople": number;
    "oneTestPerPeople": number;
    "activePerOneMillion": number;
    "recoveredPerOneMillion": number;
    "criticalPerOneMillion": number;
    "affectedCountries": number;
}

export interface Global {
  "cases": number;
  "deaths": number;
  "recovered": number;
  "active": number;
}
