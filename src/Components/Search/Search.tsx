import './Search.scss'
import { useState, useEffect } from 'react';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("https://shop-react-c0b01-default-rtdb.firebaseio.com/products/-NxNDxEEA4HYwG6BEhG0/products.json");
        if (!response.ok) throw new Error("Something went wrong!");

        const products = await response.json();
        setProducts(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (searchTerm) {
      setIsLoading(true);
    const filteredResults = products.filter(product => 
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setResults(filteredResults);
    setIsLoading(false);
  } else {
    setResults([]);
  } }, [searchTerm, products]);

  return (
  
    <div className="search-container">
      
        <input
          type="text"
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search..."
          required
        />
        <button type="submit" className="search-button">
          Search
        </button>
   
      <div className="search-results">
        {isLoading && <p>Loading...</p>}
        {results.length > 0 && (
          <ul>
            {results.map((result, index) => (
              <li key={index}>
                <img src={result.thumbnail} alt={result.title} />
                <p>{result.title}</p>
                <p>{result.description}</p>
              </li>
            ))}
          </ul>
        )}
       
      </div>
    </div>
  );
}

export default SearchBar;