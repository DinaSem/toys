'use client';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Error({ error }: { error?: Error & { digest?: string } }) {
  useEffect(() => {
    console.error('error', error);
  }, [error]);

  return (
    <div>
      <h2>{'Возникла ошибка в загрузке данных'}</h2>
      <Link href='/'>На главную</Link>
    </div>
  );
}
