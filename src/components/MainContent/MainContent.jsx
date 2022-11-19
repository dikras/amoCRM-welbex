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
        </div>
        <div className="main-content__wrapper">
          <p className="main-content__text">Вместе с <span className="main-content__notion">бесплатной </span>
            <span className="main-content__notion">консультацией</span> мы дарим:
          </p>
          <ul className="main-content__list">
            <li className="main-content__item main-content__item--audit">Skype аудит
              <span className="main-content__span">отдела продаж и <span className="main-content__span-crm">CRM</span> системы</span>
            </li>
            <li className="main-content__item">30 виджетов</li>
            <li className="main-content__item main-content__item--widget">Виджеты
              <span className="main-content__span">30 готовых решений</span>
            </li>
            <li className="main-content__item main-content__item--dashboard">Dashboard
              <span className="main-content__span">с показателями вашего бизнеса</span>
            </li>
            <li className="main-content__item">Месяц аmoCRM</li>
            <li className="main-content__item main-content__item--crm">35 дней
              <span className="main-content__span">использования <span className="main-content__span-crm">CRM</span></span>
            </li>
          </ul>
          <button className="main-content__button">Получить консультацию</button>
          <div className="main-content__bg-small-ball"></div>
        </div>
      </div>
    </main>
  );
}

export default MainContent;