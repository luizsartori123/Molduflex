import "@/App.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Diferenciais } from "./components/Diferenciais";
import { Produtos } from "./components/Produtos";
import { Galeria } from "./components/Galeria";
import { OndeEncontrar } from "./components/OndeEncontrar";
import { Sobre } from "./components/Sobre";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <OndeEncontrar />
        <Diferenciais />
        <Produtos />
        <Galeria />
        <Sobre />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
