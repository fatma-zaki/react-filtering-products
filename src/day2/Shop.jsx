import {useState} from 'react';
import './ShopPage.css';
import ProductCard from './Card.jsx';
import getData from './products.js';


export default function ShopPage() {
  const [data, setdata] = useState(getData())
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOrder, setSortOrder] = useState('Best Match');

  const handleSearch = (e) => setSearchTerm(e.target.value);
  const handleCategoryChange = (e) => setSelectedCategory(e.target.value);
  const handleSortChange = (e) => setSortOrder(e.target.value);
console.log(data)
  const filteredProducts = data
    .filter((product) => product.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter((product) => selectedCategory === 'All' ? true : product.category === selectedCategory)
    .sort((a, b) => sortOrder === 'Low to High' ? a.price - b.price : sortOrder === 'High to Low' ? b.price - a.price : 0);

  return (
    <div className="shop-container">
      <div className="shop-filters">
        <input type="text" placeholder="Search products..." value={searchTerm} onChange={handleSearch} />
        <select onChange={handleCategoryChange} defaultValue="All">
          <option value="All">All</option>
          <option value="electronics">electronics</option>
          <option value="jewelery">jewelery</option>
          <option value="men's clothing">men's clothing</option>
          <option value="women's clothing">women's clothing</option>
        
        </select>
        <select onChange={handleSortChange} defaultValue="Best Match">
          <option value="Best Match">Best Match</option>
          <option value="Low to High">Low to High</option>
          <option value="High to Low">High to Low</option>
        </select>
      </div>

      <div className="shop-flex">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
