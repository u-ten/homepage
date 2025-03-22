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
    title: "QR Generator",
    description: "シンプルで美しいQRコードを瞬時に生成。\nテキスト、URL、連絡先情報など、あらゆるデータをQRコードに変換できます。",
    imageUrl: "/qr-generator-screenshot.png",
    appUrl: "https://example.com/qr-generator",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "QR Code API"],
    color: "bg-gradient-to-br from-blue-600 to-purple-600",
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
              <span className="block transform translate-y-8 opacity-0 animate-fade-up">シンプルで</span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 transform translate-y-8 opacity-0 animate-fade-up animation-delay-200">
                美しいツール
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mt-8 transform translate-y-8 opacity-0 animate-fade-up animation-delay-400">
              使いやすさと機能性を追求した
              <br />
              アプリケーションを制作しています
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soonセクション */}
      <section className="relative min-h-screen flex items-center justify-center py-32 before:absolute before:inset-0 before:bg-gradient-to-b before:from-black/0 before:to-black/100">
        <div className="w-full max-w-[1200px] mx-auto px-4 relative z-10">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              新しいアプリケーションを開発中
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              より便利で革新的なアプリケーションを
              <br />
              順次公開していく予定です
            </p>
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
