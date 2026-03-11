import Banner from "../../components/Banner";
import Newsletter from "../../Components/NewsLetter";
import PopularGames from "./PopularGames";



const Home = () => {

  return (
    <div className="w-11/12 mx-auto">

      <Banner />

      <PopularGames />

      <Newsletter />

    </div>
  );
};

export default Home;