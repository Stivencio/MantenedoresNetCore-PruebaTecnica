import "./App.css";
import { Footer } from "./components/common/Footer";
import { FormUsuario } from "./components/FormUsuario.jsx";
import { Navbar } from "./components/common/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <br />
        <br />
        <main>
          <FormUsuario />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default App;
