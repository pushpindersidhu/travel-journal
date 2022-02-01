import "./App.css";
import Navbar from "./components/Navbar";
import Location from "./components/Location";
import data from "./components/data";

function App() {
  const locations = data.map((item) => <Location key={item.id} item={item} />);
  return (
    <div>
      <Navbar />
      <div className="locations">{locations}</div>
    </div>
  );
}

export default App;
