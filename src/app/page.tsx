import Image from "next/image";

interface AppCard {
  title: string;
  description: string;
  imageUrl: string;
  appUrl: string;
  technologies: string[];
  color: string;
}

const apps: AppCard[] = [
  {
    title: "アプリ1",
    description: "革新的なデザインと直感的な操作性を追求したアプリケーション。",
    imageUrl: "/app1-screenshot.png",
    appUrl: "https://example.com/app1",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    color: "bg-gradient-to-br from-purple-600 to-blue-500",
  },
  // 他のアプリを追加
];

export default function Home() {
  return (
    <main className="bg-black text-white">
      {/* ヒーローセクション */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black z-10" />
        <div className="relative z-20 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            革新的な
            <br />
            アプリケーション
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            美しいデザインと優れた機能性を追求した
            <br />
            アプリケーションの数々をご紹介します
          </p>
          <a
            href="#apps"
            className="inline-block bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-200 transition-colors duration-300"
          >
            詳しく見る
          </a>
        </div>
      </section>

      {/* アプリ紹介セクション */}
      <section id="apps" className="py-20">
        {apps.map((app, index) => (
          <div
            key={index}
            className={`min-h-screen flex items-center ${
              index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
            }`}
          >
            <div className="w-1/2 p-20">
              <h2 className="text-5xl font-bold mb-6">{app.title}</h2>
              <p className="text-xl text-gray-300 mb-8">{app.description}</p>
              <div className="flex flex-wrap gap-3 mb-8">
                {app.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-white/10 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={app.appUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-200 transition-colors duration-300"
              >
                今すぐ試す
              </a>
            </div>
            <div className="w-1/2 relative h-screen">
              <div className={`absolute inset-0 ${app.color} opacity-20`} />
              <div className="relative h-full flex items-center justify-center p-20">
                <div className="relative w-full h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={app.imageUrl}
                    alt={app.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* フッター */}
      <footer className="border-t border-white/10 py-12">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2024 My Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
