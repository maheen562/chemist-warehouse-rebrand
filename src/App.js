import './App.css';
import Header from './components/Header';
import AddBanner from './components/AddBanner';
import Products from './components/Products';
import Subscribe from './components/Subscribe';

function App() {
  return (
    <div className="App">
      <Header />
      <AddBanner />
      <Products />
      <Subscribe />
    </div>
  );
}

export default App;
