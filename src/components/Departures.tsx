import { createMemo, createSignal, onCleanup, Loading, For } from "solid-js";

interface Arrival {
  routeShortName: string;
  tripHeadsign: string;
  predictedArrivalTime: number;
  scheduledArrivalTime: number;
}

async function fetchArrivals(stopId: string) {
    const res = await fetch(`https://api.pugetsound.onebusaway.org/api/where/arrivals-and-departures-for-stop/${stopId}.json?key=${import.meta.env.OBA_API_KEY}`)
    if (!res.ok) throw new Error(`Error! ${res.status}`)

    const json = await res.json();
    return json.data.entry.arrivalsAndDepartures;
}

export function StopArrivals() {
    const [stopId, setStopId] = createSignal("40_100479")
    const arrivals = createMemo(() => fetchArrivals(stopId()));

    return (
        <Loading fallback={<p>Fetching data...</p>}>
        <p>Test Route Name in mins</p>
        </Loading>
    )
}