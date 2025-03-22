import Image from "next/image";
import { technologies } from "@/data/technologies";

export default function Technologies() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Technologies Used</h2>
      <div className="grid grid-cols-4 gap-4">
        {technologies.map((tech, index) => (
          <div key={index} className="flex flex-col items-center">
            <Image
              src={tech.image}
              alt={tech.name}
              width={64}
              height={64}
              className="rounded-lg"
            />
            <p className="text-sm mt-2">{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
