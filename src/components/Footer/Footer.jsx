import "./styles.css";

function Footer() {
  return (
    <footer className="footer">
      <nav className="footer-nav">
        <div className="footer-nav__about">
          <h2 className="footer-nav__title">О компании</h2>
          <ul className="footer-nav__list">
            <li className="footer-nav__item"><a href="/#">Партнёрская программа</a></li>
            <li className="footer-nav__item"><a href="/#">Вакансии</a></li>
          </ul>
        </div>
        <div className="footer-nav__wrapper">
        <h2 className="footer-nav__title">Меню</h2>
          <div className="footer-nav__menu">
            <ul className="footer-nav__list">
              <li className="footer-nav__item"><a href="/#">Расчёт стоимости</a></li>
              <li className="footer-nav__item"><a href="/#">Услуги</a></li>
              <li className="footer-nav__item"><a href="/#">Виджеты</a></li>
              <li className="footer-nav__item"><a href="/#">Интеграции</a></li>
              <li className="footer-nav__item"><a href="/#">Наши клиенты</a></li>
            </ul>
            <ul className="footer-nav__list">
              <li className="footer-nav__item"><a href="/#">Благодарность клиентов</a></li>
              <li className="footer-nav__item"><a href="/#">Кейсы</a></li>
              <li className="footer-nav__item"><a href="/#">Сертификаты</a></li>
              <li className="footer-nav__item"><a href="/#">Блог на Youtube</a></li>
              <li className="footer-nav__item"><a href="/#">Вопрос / Ответ</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-nav__contacts">
        <h2 className="footer-nav__title">Контакты</h2>
          <ul className="footer-nav__list">
            <li className="footer-nav__item footer-nav__item--phone"><a href="tel:+75555555555">+7 555 555-55-55</a></li>
            <li className="footer-nav__item footer-nav__item--socials">
              <ul className="footer-nav__socials-list">
                <li className="footer-nav__socials-item">
                  <a className="footer-nav__socials-link footer-nav__socials-link--telegram" href="/#">
                    <span className="visually-hidden">Telegram</span>
                  </a>
                </li>
                <li className="footer-nav__socials-item">
                  <a className="footer-nav__socials-link footer-nav__socials-link--viber" href="/#">
                    <span className="visually-hidden">Viber</span>
                  </a>
                </li>
                <li className="footer-nav__socials-item">
                  <a className="footer-nav__socials-link footer-nav__socials-link--whatsapp" href="/#">
                    <span className="visually-hidden">Whatsapp</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="footer-nav__item footer-nav__item--address">Москва, Путевой проезд 3с1, к 902</li>
          </ul>
        </div>
      </nav>
      <p className="footer__copyright">©WELBEX 2022. Все права защищены.</p>
      <p className="footer__policy"><a href="/#">Политика конфиденциальности</a></p>
    </footer>
  );
}

export default Footer;