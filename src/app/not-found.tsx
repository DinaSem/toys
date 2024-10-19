import Link from 'next/link';

export default function NotFound() {
  return (
    <main>
      <section>
        <h1>Ошибка 404</h1>
        <p>Упс! Кажется, вы потерялись</p>
        <p>
          К&nbsp;сожалению, запрашиваемая страница не&nbsp;найдена. Возможно, вы&nbsp;перешли по&nbsp;ссылке,
          в&nbsp;которой была допущена ошибка, или ресурс был удален. Попробуйте вернуться назад или перейдите
          на&nbsp;главную.
        </p>
        <Link href='/'>На главную</Link>
      </section>
    </main>
  );
}
