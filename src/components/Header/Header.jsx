import "./styles.css";

function Header() {
  return (
    <header className="header">
      <nav className="header-nav">
        <ul className="header-nav__list">
          <li className="header-nav__item"><a href='/#'>Услуги</a></li>
          <li className="header-nav__item"><a href='/#'>Виджеты</a></li>
          <li className="header-nav__item"><a href='/#'>Интеграции</a></li>
          <li className="header-nav__item"><a href='/#'>Кейсы</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;