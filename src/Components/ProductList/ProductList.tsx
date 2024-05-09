import './ProductList.scss'
const ProductList = () => {
  return (
    <>
      <h1>Product List</h1>
      <ul className='product-list-container'>
        <li className='product-list-item'>
          <div className="card">
            <img className="card-img-top" src="https://cdn.dummyjson.com/product-images/12/1.jpg" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <button className="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        </li>
        <li className='product-list-item'>
          <div className="card">
            <img className="card-img-top" src="https://cdn.dummyjson.com/product-images/12/1.jpg" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <button className="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        </li>
        <li className='product-list-item'>
          <div className="card">
            <img className="card-img-top" src="https://cdn.dummyjson.com/product-images/12/1.jpg" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <button className="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        </li>
      </ul>
    </>
  )
}
export default ProductList
