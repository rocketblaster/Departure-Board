import { createSignal, onCleanup } from 'solid-js';

export function Clock() {
    const [time, setTime] = createSignal(new Date());

    const timer = setInterval(() => {
        
    setTime(new Date())}, 1000);

    onCleanup(() => clearInterval(timer));

    return (
        <time datetime={time().toISOString()}>
            {time().toDateString()} {time().toLocaleTimeString()}
        </time>
    )
}