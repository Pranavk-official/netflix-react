import "./Home.css";
import { Footer, Navbar, TitleCards } from "../../components";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={hero_banner} className="banner-img" alt="" />
        <div className="hero-caption">
          <img src={hero_title} alt="" className="caption-img" />
          <p className="caption-text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Perferendis blanditiis, quibusdam ratione natus nisi earum dolor.
            Atque temporibus qui laboriosam beatae quaerat doloribus esse illum
            impedit. Dignissimos pariatur possimus officia.
          </p>
          <div className="hero-btns">
            <button className="btn">
              <img src={play_icon} alt="" />
              Play
            </button>
            <button className="btn dark-btn">
              <img src={info_icon} alt="" />
              More Info
            </button>
          </div>
          <TitleCards />
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"Blockbuster Movies"} />
        <TitleCards title={"Only on Netflix"} />
        <TitleCards title={"Upcoming"} />
        <TitleCards title={"Top Pics For You"} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
