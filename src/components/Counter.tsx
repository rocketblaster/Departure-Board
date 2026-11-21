import { createMemo, createSignal, Show } from 'solid-js';

export default function stationSelect() {
  const [route, setRoute] = createSignal("");
  const [station, setStation] = createSignal("");
 
  return (
    <>
    <select
    value={route()}
    onChange={e => { setRoute(e.target.value); setStation(""); }}>
        <option value="">--Select route--</option>
        <option value="1">1 Line</option>
        <option value="2">2 Line</option>
      </select>
   <select
        value={station()}
        disabled={!route()}
        onChange={(e) => setStation(e.target.value)}>
    <option value="">--Select station--</option>
    <Show when={route() === "1"}>
        <option value="">Lynnwood City Center</option>
        <option value="">Mountlake Terrace</option>
        <option value="">Shoreline North/185th</option>
        <option value="">Shoreline North/148th</option>
        <option value="">Northgate</option>
        <option value="">Roosevelt</option>
        <option value="">U District</option>
        <option value="">Univ of Washington</option>
        <option value="">Capitol Hill</option>
        <option value="">Westlake</option>
        <option value="">Pioneer Square</option>
        <option value="">Int'l Dist/Chinatown</option>
        <option value="">Stadium</option>
        <option value="">SODO</option>
        <option value="">Beacon Hill</option>
        <option value="">Mount Baker</option>
        <option value="">Columbia City</option>
        <option value="">Othello</option>
        <option value="">Tukwila Int'l Blvd</option>
        <option value="">SeaTac/Airport</option>
        <option value="">Angle Lake</option>
        <option value="">Kent Des Moines</option>
        <option value="">Star Lake</option>
        <option value="">Federal Way Downtown</option>
  </Show>
  <Show when={route() === "2"}>
        <option value="">Lynnwood City Center</option>
        <option value="">Mountlake Terrace</option>
        <option value="">Shoreline North/185th</option>
        <option value="">Shoreline North/148th</option>
        <option value="">Northgate</option>
        <option value="">Roosevelt</option>
        <option value="">U District</option>
        <option value="">Univ of Washington</option>
        <option value="">Capitol Hill</option>
        <option value="">Westlake</option>
        <option value="">Pioneer Square</option>
        <option value="">Int'l Dist/Chinatown</option>
        <option value="">Judkins Park</option>
        <option value="">Mercer Island</option>
        <option value="">South Bellevue</option>
        <option value="">East Main</option>
        <option value="">Bellevue Downtown</option>
        <option value="">Wilburton</option>
        <option value="">Spring District</option>
        <option value="">BelRed</option>
        <option value="">Overlake Village</option>
        <option value="">Redmond Technology</option>
        <option value="">Marymoor Village</option>
        <option value="">Downtown Redmond</option>
  </Show>
  </select>

  <div class="card">
    <div class="screen">
    <h2 id="stationName">Westlake</h2>
    </div>
    </div>
   </>
  );
}
