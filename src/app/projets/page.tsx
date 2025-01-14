import Link from "next/link";

export default function ProjetsPage() {
  return (
    <div>
      <h1>Liste de mes projets Web:</h1>
      <ul>
        <li>
          <Link href="https://pokedemo.evancharrier.fr" target="_blank">
            Voir Pokedemo
          </Link>
        </li>
        <li>
          <Link href="https://next-level-food.evancharrier.fr" target="_blank">
            Voir NextLevelFood
          </Link>
        </li>
        <li>
          <Link href="https://movie-list.evancharrier.fr" target="_blank">
            Voir MovieList
          </Link>
        </li>
      </ul>
    </div>
  );
}
