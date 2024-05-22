function Product({price, productName, productImg, special}) {
  return (
    <article>
      <span>{special}</span>
      <img src={productImg} alt={productName} />
      <p>{productName}</p>
      <h4>{price}</h4>
    </article>
  );
}

export default Product;