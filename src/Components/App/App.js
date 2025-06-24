import './App.css';
import { NavLink,Routes,Route } from "react-router-dom"

function App() {
  return (
    <main className="App">
      <nav>
        <NavLink to="/puppies" className="nav">Puppies</NavLink>
        <NavLink href="/sharks" className="nav">Sharks</NavLink>
      </nav>
      <h1>Puppies or Sharks?</h1>
      <Routes>
        <Route path=":/creatureType" element={ <Creatures /> }/>
      </Routes>
    </main>
  );
}

export default App;
