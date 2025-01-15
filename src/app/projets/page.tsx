import ProjetCard from "@/components/projets/projet-card";

export default function ProjetsPage() {
  const projets = [
    {
      name: "Pokedemo",
      image: "/projets-covers/pokedemo-preview.png",
      description: "Une application pour afficher des informations sur les Pokémon.",
      link: "https://pokedemo.evancharrier.fr",
    },
    {
      name: "NextLevelFood",
      image: "/projets-covers/nextlevelfood-preview.png",
      description: "Un projet de gestion de recettes et de planification de repas.",
      link: "https://next-level-food.evancharrier.fr",
    },
    {
      name: "MovieList",
      image: "/projets-covers/movielist-preview.png",
      description: "Application permettant de créer et gérer une liste de films.",
      link: "https://movie-list.evancharrier.fr",
    },
    {
      name: "Tasks",
      image: "/projets-covers/tasks-preview.png",
      description: "Une application pour gérer des tâches et des projets.",
      link: "https://tasks.evancharrier.fr",
    },
    {
      name: "NextNews",
      image: "/projets-covers/pokedemo-preview.png",
      description: "Un site de news construit avec Next.js.",
      link: "https://next-news.evancharrier.fr",
    },
    {
      name: "ReacTweet",
      image: "/projets-covers/pokedemo-preview.png",
      description: "Une application de microblogging inspirée de Twitter.",
      link: "https://reactweet.evancharrier.fr",
    },
  ];

  return (
    <div>
      <h1>Liste de mes projets : </h1>
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projets.map((projet, index) => (
          <ProjetCard
            key={index}
            name={projet.name}
            image={projet.image}
            description={projet.description}
            link={projet.link}
          />
        ))}
      </div>
    </div>
  );
}
