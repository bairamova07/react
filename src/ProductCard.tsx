function Productcard(props) {
  return (
    <div className="product-card">
      <img src={props.image} alt="product" width="200" />
      <h2>{props.name}</h2>
      <p>Бағасы:{props.price}</p>
    </div>
  );
}

export default Productcard;
