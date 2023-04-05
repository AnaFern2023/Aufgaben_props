
import './App.css';
import Header from './components/Header';
import Section from './components/Section';

const probArray = [
  {
    img: "https://cdn2.photostockeditor.com/c/0601/bottle-cocooil-baby-oil-on-desk-lotion-lotion-image.jpg",
    product: "cocooil",
    price: "30$",
    description: "BUY NOW"
  },
  {
    img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    product: "Polaroid",
    price: "60$",
    description: "BUY NOW"
  },
  {
    img: "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    product: "Repair Products",
    price: "20$",
    description: "BUY NOW"
  },
]

function App() {
  return (
    <div className="App">
      <Header />
      <section className='products_grid'>
        {probArray.map((element) =>
          <Section
            img={element.img}
            product={element.product}
            price={element.price}
            description={element.description}
          />
        )}
      </section>
    </div>
  );
}

export default App;
