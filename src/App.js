import "./styles/App.css";
import Champions from "./components/Champions";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <table>
        <Champions />
      </table>
    </div>
  );
}

export default App;
