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
    <main className="bg-black text-white overflow-hidden">
      {/* ヒーローセクション */}
      <section className="relative min-h-[140vh] flex items-start justify-center">
        <div className="sticky top-0 h-screen w-full flex items-center justify-center">
          <div className="text-center max-w-[800px] mx-auto px-4 pt-32">
            <h1 className="text-7xl md:text-[130px] font-bold leading-tight tracking-tight">
              <span className="block transform translate-y-8 opacity-0 animate-fade-up">革新的な</span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 transform translate-y-8 opacity-0 animate-fade-up animation-delay-200">
                アプリケーション
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* アプリ紹介セクション */}
      {apps.map((app, index) => (
        <section
          key={index}
          className="relative min-h-screen flex items-center justify-center py-32"
        >
          <div className="w-full max-w-[1200px] mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="w-full md:w-1/2 space-y-8">
                <h2 className="text-5xl md:text-7xl font-bold leading-tight">
                  {app.title}
                </h2>
                <p className="text-xl md:text-2xl text-gray-300">
                  {app.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {app.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-6 py-3 bg-white/10 rounded-full text-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={app.appUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-black px-12 py-5 rounded-full text-xl font-semibold hover:bg-gray-200 transition-colors duration-300"
                >
                  詳しく見る
                </a>
              </div>
              <div className="w-full md:w-1/2">
                <div className="relative aspect-square rounded-3xl overflow-hidden transform hover:scale-105 transition-transform duration-500">
                  <div className={`absolute inset-0 ${app.color} opacity-20`} />
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
        </section>
      ))}

      {/* フッター */}
      <footer className="border-t border-white/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400 text-lg">© 2024 My Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
