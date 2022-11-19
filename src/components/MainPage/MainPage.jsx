import "./styles.css";
import Header from "../Header/Header";
import MainContent from "../MainContent/MainContent";
import Footer from "../Footer/Footer";

function MainPage() {
  return (
    <div className="main-page">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default MainPage;