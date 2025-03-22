import Image from "next/image";

interface AppCard {
  title: string;
  description: string;
  imageUrl: string;
  appUrl: string;
  technologies: string[];
}

const apps: AppCard[] = [
  {
    title: "アプリ1",
    description: "アプリ1の説明文をここに記載します。",
    imageUrl: "/app1-screenshot.png",
    appUrl: "https://example.com/app1",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
  },
  // 他のアプリを追加
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            私のアプリケーション
          </h1>
          <p className="text-xl text-gray-300">
            開発したアプリケーションの紹介ページです
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apps.map((app, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={app.imageUrl}
                  alt={app.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{app.title}</h2>
                <p className="text-gray-300 mb-4">{app.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {app.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={app.appUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300"
                >
                  アプリを見る
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
