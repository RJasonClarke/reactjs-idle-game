import Counter from "./components/Counter";
import Resources from "./components/Resources";
import Upgrades from "./components/Upgrades";
import "./styles/App.css"

function App() {
  
  return (
    <div className="App">
      <Resources></Resources>
      <Counter></Counter>
      <Upgrades></Upgrades>
    </div>
  );
}

export default App;
