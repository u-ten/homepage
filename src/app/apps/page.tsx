'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface AppCard {
  title: string;
  description: string;
  images: {
    url: string;
    alt: string;
  }[];
  appUrl: string;
  technologies: string[];
  color: string;
  privacyUrl: string;
}

const apps: AppCard[] = [
  {
    title: "ランダムQRコード生成",
    description: "ランダムなQRコードを生成するアプリケーションです。",
    images: [
      {
        url: "/homepage/qr-generator-screenshot1.PNG",
        alt: "QRジェネレーターのメイン画面"
      },
      {
        url: "/homepage/qr-generator-screenshot2.PNG",
        alt: "QRコード生成画面"
      },
    ],
    appUrl: "https://example.com/qr-generator",
    technologies: ["QRコード生成", "ランダムQRコード"],
    color: "bg-gradient-to-br from-indigo-600 to-purple-600",
    privacyUrl: "/privacy-random-qr-gen",
  },
];

export default function Apps() {
  return (
    <main className="min-h-screen pt-32 pb-16">
      {/* ヘッダー */}
      <section className="container mx-auto px-6 mb-16">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">アプリケーション一覧</h1>
        </div>
      </section>

      {/* アプリ一覧 */}
      <section className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {apps.map((app, index) => (
            <div key={index} className="card mb-16">
              <div className="flex flex-col gap-8">
                <div className="w-full">
                  <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden">
                    <Swiper
                      modules={[Navigation, Pagination]}
                      navigation
                      pagination={{ clickable: true }}
                      loop={true}
                      className="h-full w-full"
                    >
                      {app.images.map((image, i) => (
                        <SwiperSlide key={i}>
                          <div className="relative w-full h-full">
                            <Image
                              src={image.url}
                              alt={image.alt}
                              fill
                              className="object-contain bg-gray-900"
                            />
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
                <div className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-bold gradient-text">
                    {app.title}
                  </h2>
                  <p className="text-gray-400">
                    {app.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {app.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-white/5 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 items-center">
                    <a
                      href={app.appUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary inline-flex"
                    >
                      使ってみる
                    </a>
                    <Link
                      href={app.privacyUrl}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      プライバシーポリシー
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Coming Soon */}
      <section className="container mx-auto px-6 pt-32">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 gradient-text">
            アプリケーションを開発中
          </h2>
          <p className="text-gray-400">
            順次公開していく予定です
          </p>
        </div>
      </section>
    </main>
  );
} 