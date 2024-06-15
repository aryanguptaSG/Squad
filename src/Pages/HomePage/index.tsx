import LandingPage from "./LandingPage";
import MainPage from "./MainPage";

function HomePage() {
  return (
    <div className=" bg-Gray-bgLight text-black dark:bg-black dark:text-white">
      {true ? <MainPage /> : <LandingPage />}
    </div>
  );
}

export default HomePage;
