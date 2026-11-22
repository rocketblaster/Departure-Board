import { createMemo, createSignal, Show } from 'solid-js';
import { For } from 'solid-js';

export default function stationSelect() {
  const [route, setRoute] = createSignal("");
  const [station, setStation] = createSignal("Select Station");
  const oneLineStations = [
    'Lynnwood City Center', 'Mountlake Terrace', 'Shoreline North/185th', 'Shoreline North/148th',
    , 'Northgate', 'Roosevelt', 'U District',
    'Univ of Washington', 'Capitol Hill', 'Westlake', 'Symphony', 'Pioneer Square', 'International Dist/Chinatown',
    'Stadium', 'SODO', 'Beacon Hill', 'Mount Baker', 'Columbia City',
    'Othello', 'Rainier Beach', 'Tukwila International Blvd', 'SeaTac/Airport',
    'Angle Lake', 'Kent Des Moines', 'Star Lake', 'Federal Way Downtown',
  ];
  const twoLineStations = ['Lynnwood City Center', 'Mountlake Terrace', 'Shoreline North/185th', 'Shoreline North/148th',
    'Shoreline North/148th', 'Northgate', 'Roosevelt', 'U District',
    'Univ of Washington', 'Capitol Hill', 'Symphony', 'Pioneer Square', 'International Dist/Chinatown',
    'Judkins Park', 'Mercer Island', 'South Bellevue', 'East Main', 'Bellevue Downtown',
    'Wilburton', 'Spring District', 'BelRed', 'Overlake Village', 'Redmond Technology',
    'Marymoor Village', 'Downtown Redmond',
  ];
 
 
  return (
    <>
    <select
    value={route()}
    onChange={e => { setRoute(e.target.value); setStation("Select Station"); }}>
        <option value="">--Select route--</option>
        <option value="1">1 Line</option>
        <option value="2">2 Line</option>
      </select>
   <select
        disabled={!route()}
        onChange={(e) => setStation(e.target.value)}
        >
        <option value="" selected={station() === ""}>--Select station--</option>
  </select>

  <div class="card">
    <div class="screen">
    <h2 class="title">{station() || "Select Station"} </h2>
    <p>Federal Way Downtown</p>
    </div>
    </div>
   </>
  );
}
