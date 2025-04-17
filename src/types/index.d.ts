type LineCode = "SV" | "GR" | "RD" | "OR" | "BL";

interface StationSchedule {
  day: string;
  openingTime: string;
  lastTrain: string;
}

interface Station {
  code: string;
  city: string;
  state: string;
  street: string;
  zip: string;
  latitude: number;
  longitude: number;
  name: string;
  lineCodes: LineCode[];
  stationSchedule: StationSchedule[];
}

