import './App.css';
import NavigationMenu from "./components/Navigation/NavigationMenu/NavigationMenu";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import AboutMe from "./components/AboutMe/AboutMe";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div className="App">
      <NavigationMenu />
      <Jumbotron />
      <AboutMe />
      <Projects />

    </div>
  );
}

export default App;
