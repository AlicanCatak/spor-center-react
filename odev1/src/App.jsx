import BmiCalculator from "./assets/components/bmi-calculator/Bmi-calculator";
import Contact from "./assets/components/contact";
import Footer from "./assets/components/footer/Footer";
import Header from "./assets/components/Header";
import Our from "./assets/components/ourclass";
import Review from "./assets/components/review/Review";
import Trainers from "./assets/components/trainers/Trainers";

function App() {
  return (
    <>
      <Header />
      <Our />
      <BmiCalculator />
      <Trainers />
      <Review />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
