import Image from 'next/image';
import React from 'react';

export default function Home() {
  return (
    <main className="container mx-auto px-4">
      {/* ヘッダーナビゲーション */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">Your Name</h1>
            <ul className="flex space-x-6">
              <li><a href="#about" className="hover:text-blue-500 transition-colors">About</a></li>
              <li><a href="#projects" className="hover:text-blue-500 transition-colors">Projects</a></li>
              <li><a href="#skills" className="hover:text-blue-500 transition-colors">Skills</a></li>
              <li><a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a></li>
            </ul>
          </div>
        </nav>
      </header>

      {/* ヒーローセクション */}
      <section id="about" className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Welcome to My Portfolio</h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            クリエイティブなソリューションを提供するWeb開発者です。
          </p>
        </div>
      </section>

      {/* プロジェクトセクション */}
      <section id="projects" className="py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* プロジェクトカード */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-video relative">
              <div className="w-full h-full bg-gray-200 dark:bg-gray-700" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Project Title</h3>
              <p className="text-gray-600 dark:text-gray-300">プロジェクトの説明文がここに入ります。</p>
            </div>
          </div>
        </div>
      </section>

      {/* スキルセクション */}
      <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {/* スキルアイテム */}
          <div className="text-center">
            <div className="w-20 h-20 mx-auto bg-white dark:bg-gray-700 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-2xl">💻</span>
            </div>
            <h3 className="mt-4 font-semibold">Frontend</h3>
          </div>
        </div>
      </section>

      {/* コンタクトセクション */}
      <section id="contact" className="py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Contact</h2>
        <div className="max-w-xl mx-auto">
          <p className="text-center mb-8">
            お問い合わせはこちらからお願いします。
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-blue-500 hover:text-blue-600 transition-colors">
              <span className="text-2xl">📧</span>
            </a>
            <a href="#" className="text-blue-500 hover:text-blue-600 transition-colors">
              <span className="text-2xl">🐦</span>
            </a>
            <a href="#" className="text-blue-500 hover:text-blue-600 transition-colors">
              <span className="text-2xl">💼</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
} 