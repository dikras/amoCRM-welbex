import "./styles.css";

function MainScreen() {
  return (
    <main className="main-page">
      <h1 className="main-page__heading">Зарабатывайте больше<br /> 
        <span className="main-page__brandname">c WELBEX</span>
      </h1>
      <p className="main-page__title">Развиваем и контролируем продажи за вас</p>
      <p className="main-page__text">Вместе с <span className="main-page__notion">бесплатной </span>
        <span className="main-page__notion">консультацией</span> мы дарим:
      </p>
      <ul className="main-page__list">
        <li className="main-page__item">Skype аудит</li>
        <li className="main-page__item">30 виджетов</li>
        <li className="main-page__item">Dashboard</li>
        <li className="main-page__item">Месяц аmoCRM</li>
      </ul>
    </main>
  );
}

export default MainScreen;