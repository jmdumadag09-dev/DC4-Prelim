function Product(props) {
  return (
    <div>
      <h2>{props.productName}</h2>
      <p>Price: {props.price}</p>
      <p>Category: {props.category}</p>
      <p>In Stock: {props.inStock.toString()}</p>
    </div>
  );
}

export default Product;
