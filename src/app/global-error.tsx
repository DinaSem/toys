'use client';

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html>
      <body>
        <h2>Возникла ошибка приложения</h2>
        <a href='/'>На главную</a>
      </body>
    </html>
  );
}
