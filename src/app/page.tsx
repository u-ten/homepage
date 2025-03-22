import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen pt-32 pb-16">
      {/* ヒーローセクション */}
      <section className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            <span className="block opacity-0 animate-fade-up">
              シンプルで使いやすい
            </span>
            <span className="block gradient-text opacity-0 animate-fade-up animation-delay-200">
              デジタルツール
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-12 opacity-0 animate-fade-up animation-delay-300">
            日常をより便利に、より効率的に。そして楽しく。
          </p>
          <div className="flex gap-4 justify-center opacity-0 animate-fade-up animation-delay-400">
            <Link href="/apps" className="btn-primary">
              アプリを見る
            </Link>
          </div>
        </div>
      </section>    

      {/* フッター */}
      <footer className="container mx-auto px-6 pt-32">
        <div className="text-center text-gray-400">
          <p>© 2025 Uten.</p>
        </div>
      </footer>
    </main>
  );
}
