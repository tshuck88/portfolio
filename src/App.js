import './App.css';
import NavigationMenu from "./components/Navigation/NavigationMenu/NavigationMenu";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import AboutMe from "./components/AboutMe/AboutMe"

function App() {
  return (
    <div className="App">
      <NavigationMenu />
      <Jumbotron />
      <AboutMe />

    </div>
  );
}

export default App;
