import "./styles.css";

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img className="header__img" src="./img/desktop/logo.svg" alt="Логотип Welbex" />
        <img className="header__brand" src="./img/desktop/logo-text.svg" alt="Welbex" />
        <p className="header__text">крупный интегратор CRM в Росcии и ещё 8 странах</p>
      </div>
      <nav className="header-nav">
        <ul className="header-nav__list">
          <li className="header-nav__item"><a href='/#'>Услуги</a></li>
          <li className="header-nav__item"><a href='/#'>Виджеты</a></li>
          <li className="header-nav__item"><a href='/#'>Интеграции</a></li>
          <li className="header-nav__item"><a href='/#'>Кейсы</a></li>
          <li className="header-nav__item"><a href='/#'>Сертификаты</a></li>
        </ul>
      </nav>
      <div className="header__contacts">
        <a className="header__phone" href="tel:+75555555555">+7 555 555-55-55</a>
        <ul className="heder__socials-list">
          <li className="header__socials-item">
            <a className="header__socials-link header__socials-link--telegram" href="/#">
              <span className="visually-hidden">Telegram</span>
            </a>
          </li>
          <li className="header__socials-item">
            <a className="header__socials-link header__socials-link--viber" href="/#">
              <span className="visually-hidden">Viber</span>
            </a>
          </li>
          <li className="header__socials-item">
            <a className="header__socials-link header__socials-link--whatsapp" href="/#">
              <span className="visually-hidden">Whatsapp</span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;