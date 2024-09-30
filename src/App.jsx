import Footer from "./components/footer.components";
import HeroSection from "./components/hero.component";
import Navbar from "./components/navbar.component";
import ProductDisplay from "./components/product-display.component";
import TrendingProduct from "./components/trending-product.component";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ProductDisplay />
      <TrendingProduct />
      <Footer />
    </div>
  );
}

export default App;
