import { Title } from '@solidjs/meta';
import Counter from '../components/Station'
import logo from '../logo.svg';

export default function Home() {
  return (
    <main>
      <Title>Departure Board</Title>
      <h1>Link Light Rail Departures</h1>
      <p>
        Welcome! Click on a station below.
      </p>
      <Counter />
      <a href="https://github.com/rocketblaster/Departure-Board" target="_blank">Repository</a>
    </main>
  );
}
