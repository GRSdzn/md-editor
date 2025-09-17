import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col transition-colors duration-300 bg-background text-foreground">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col justify-center items-center text-center px-6 py-32">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
          Генератор README для твоих проектов
        </h1>
        <p className="text-lg md:text-xl mb-10 max-w-3xl text-gray-700 dark:text-gray-300">
          Бесплатный генератор README с открытым исходным кодом. Начни
          редактирование прямо сейчас, добавляй секции и скачивай готовый
          результат.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/editor"
            className="bg-primary text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-primary-dark transition"
          >
            Приступить к работе
          </Link>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-20 transition-colors duration-300 bg-background">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12 text-foreground">
            Почему выбирают наш генератор
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Простой интерфейс",
                desc: "Редактируй и добавляй секции без лишних настроек.",
              },
              {
                title: "Быстрый результат",
                desc: "Сразу скачивай готовый README в один клик.",
              },
              {
                title: "Открытый исходный код",
                desc: "Вноси свои улучшения или используй бесплатно.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="card hover:scale-105 transform transition-transform duration-300"
              >
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-foreground-muted">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Example Section */}
      <section className="py-20 transition-colors duration-300 bg-section-light dark:bg-section-dark rounded-t-3xl shadow-inner">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6 text-center text-foreground">
            Пример README
          </h2>
          <pre className="p-6 rounded-xl bg-code-bg text-code-text font-mono overflow-x-auto">
            {`# Мой Проект
Описание проекта здесь.

## Установка
\`\`\`bash
npm install
\`\`\`

## Использование
\`\`\`bash
npm start
\`\`\`

## Лицензия
MIT`}
          </pre>
        </div>
      </section>
    </main>
  );
}
