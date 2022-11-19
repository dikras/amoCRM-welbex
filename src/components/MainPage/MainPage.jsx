import "./styles.css";
import Header from "../Header/Header";
import MainContent from "../MainContent/MainContent";
import Footer from "../Footer/Footer";

function MainPage() {
  return (
    <div className="main-page">
      <div className="main-page__bg">
        <div className="main-page__bg-top"></div>
        <div className="main-page__bg-bottom"></div>
        <div className="main-page__bg-purple-ball"></div>
        <div className="main-page__bg-red-ball"></div>
      </div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default MainPage;