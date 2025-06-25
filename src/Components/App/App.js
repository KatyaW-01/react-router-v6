import './App.css';
import { NavLink,Routes,Route } from "react-router-dom"
import Creatures from "../Creatures/Creatures"
import Home from "../Home/Home"
import CreatureDetails from '../CreatureDetails/CreatureDetails'

function App() {
  return (
    <main className="App">
      <nav>
        <NavLink to="/puppies" className="nav">Puppies</NavLink>
        <NavLink to="/sharks" className="nav">Sharks</NavLink>
      </nav>
      <h1>Puppies or Sharks?</h1>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/:creatureType" element={ <Creatures /> }/>
        <Route path="/:creatureType/:id" element = { <CreatureDetails />} />
      </Routes>
    </main>
  );
}

export default App;
