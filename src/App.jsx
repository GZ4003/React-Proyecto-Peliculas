import { MoviesGrid } from "./MoviesGrid";
import styles from "./App.module.css";

export default function App() {
  return (
    <div>
      <header>
        <h1 className={styles.title}>Peliculas-Alexis</h1>
      </header>
      <main>
        <MoviesGrid />
      </main>
    </div>
  );
}