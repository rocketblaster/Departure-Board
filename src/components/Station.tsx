import { createMemo, createSignal } from 'solid-js';
import { For } from 'solid-js';
import { Clock } from './Clock';

export default function stationSelect() {
  const [route, setRoute] = createSignal("");
  const [direction, setDirection] = createSignal<"Northbound" | "Southbound">("Northbound");
  const [station, setStation] = createSignal("Select Station");
  const oneLineStations = [
    'Lynnwood City Center', 'Mountlake Terrace', 'Shoreline North/185th', 'Shoreline North/148th', 'Northgate', 'Roosevelt', 'U District',
    'Univ of Washington', 'Capitol Hill', 'Westlake', 'Symphony', 'Pioneer Square', 'International Dist/Chinatown',
    'Stadium', 'SODO', 'Beacon Hill', 'Mount Baker', 'Columbia City',
    'Othello', 'Rainier Beach', 'Tukwila International Blvd', 'SeaTac/Airport',
    'Angle Lake', 'Kent Des Moines', 'Star Lake', 'Federal Way Downtown',
  ];
  const twoLineStations = ['Lynnwood City Center', 'Mountlake Terrace', 'Shoreline North/185th', 'Shoreline North/148th', 'Northgate', 'Roosevelt', 'U District',
    'Univ of Washington', 'Capitol Hill', 'Westlake', 'Symphony', 'Pioneer Square', 'International Dist/Chinatown',
    'Judkins Park', 'Mercer Island', 'South Bellevue', 'East Main', 'Bellevue Downtown',
    'Wilburton', 'Spring District', 'BelRed', 'Overlake Village', 'Redmond Technology',
    'Marymoor Village', 'Downtown Redmond',
  ];
  const stationsByRoute: Record<string, string[]> = {
  "1": oneLineStations,
  "2": twoLineStations,
}

  const orderedStops = createMemo(() => {
      const stations = createMemo(() => stationsByRoute[route()] ?? []);
      
    return direction() === "Southbound" ? [...stations()].reverse(): stations();
  });

  return (
    <>
    <select
    value={route()}
    onChange={e => { setRoute(e.target.value); setStation("Select Station"); }}>
        <option value="">--Select route--</option>
        <option value="1">1 Line</option>
        <option value="2">2 Line</option>
      </select>
    <select value={direction()}
    onChange={(e) => setDirection(e.target.value as "Northbound" | "Southbound")}
    >
      <option value="">--Select direction--</option>
      <option value="Northbound">To Lynnwood</option>
      <option value="Southbound">To Federal Way</option>
    </select>
   <select
        disabled={!route()}
        onChange={(e) => setStation(e.target.value)}
        >
        <option value="" selected={station() === ""}>--Select station--</option>
        <For each={orderedStops()}>
          {(name) => (
            <option value={name} selected={name === station()}>
              {name}
            </option>
          )}
        </For>
  </select>

  <div class="card">
    <div class="screen">
      <div class="nav-container">
        <h2 class="title">{station() || "Select Station"}</h2>
        <Clock />
      </div>
    <p>Coming to {station()} soon</p>
    </div>
    </div>
   </>
  );
}
