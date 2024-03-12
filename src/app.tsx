import { signal, computed } from "@preact/signals";
import { Card } from "./card";
import "./app.css";


export function App() {
  const card = signal(
      "# Hello, world!\n\nThis is a markdown viewer built with **Preact**."
  );
  return <Card markdown={card} />;
}
