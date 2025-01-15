import Link from "next/link";

interface ProjetCardProps {
  name: string;
  image: string;
  description: string;
  link: string;
}

export default function ProjetCard ({ name, image, description, link }: ProjetCardProps) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-blue-400">
      <img className="w-full h-48 object-cover" src={image} alt={name} />
      <div className="px-6 py-4">
        <h2 className="font-semibold text-xl text-center mb-2">{name}</h2>
        <p className="text-gray-900 text-base mb-4">{description}</p>
        <div className="flex justify-center">
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-950 text-white rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Visiter {name}
          </Link>
        </div>
      </div>
    </div>
  );
};


