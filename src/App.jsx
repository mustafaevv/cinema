import Banner from "./components/Banner";
import FilsCarousel from "./components/FilmsCarousel";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <FilsCarousel/>
    </div>
  );
};

export default App;
