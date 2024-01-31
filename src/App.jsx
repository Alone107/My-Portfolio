import "./reset.css";
import "./App.css";
import Main from "./components/Main";
import Experince from "./components/Experince";
import Portfolio from "./components/Portfolio";
import SocialLink  from "./components/SocialLink";
import Navigation from "./components/Navigation";
import ContactTwo from "./components/ContactTwo";

function App() {
  return (
    <div className="bg-gradient-to-b from-gray-800 to-black  ">
      <SocialLink />
      <Navigation />
      <Main />
      <Portfolio />
      <Experince />
      <ContactTwo />
    </div>
  );
}

export default App;
