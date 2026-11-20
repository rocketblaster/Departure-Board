import { Title } from '@solidjs/meta';
import Counter from '../components/Counter';
import logo from '../logo.svg';

export default function Home() {
  return (
    <main>
      <Title>Departure Board</Title>
      <h1>Seattle Link Light Rail Departures</h1>
      <p>
        Welcome! Click on a station below.
      </p>
      <Counter />
    </main>
  );
}
