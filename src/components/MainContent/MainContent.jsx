import "./styles.css";

function MainContent() {
  return (
    <main className="main-content">
      <div className="main-content__bg-top"></div>
      <div className="main-content__bg-bottom"></div>
      <div className="main-content__bg-purple-ball"></div>
      <div className="main-content__bg-red-ball"></div>
      <div className="main-content__glass">
        <div className="main-content__wrapper">
          <h1 className="main-content__heading">Зарабатывайте больше<br /> 
            <span className="main-content__brandname">c WELBEX</span>
          </h1>
          <p className="main-content__title">Развиваем и контролируем продажи за вас</p>
          <p className="main-content__text">Вместе с <span className="main-content__notion">бесплатной </span>
            <span className="main-content__notion">консультацией</span> мы дарим:
          </p>
        </div>
        <ul className="main-content__list">
          <li className="main-content__item">Skype аудит</li>
          <li className="main-content__item">30 виджетов</li>
          <li className="main-content__item">Dashboard</li>
          <li className="main-content__item">Месяц аmoCRM</li>
        </ul>
      </div>
    </main>
  );
}

export default MainContent;