function Usercard(props) {
  return (
    <div>
      <h2>Аты:{props.name}</h2>
      <h2>Жасы:{props.age}</h2>
      <h2>Қаласы:{props.city}</h2>
    </div>
  );
}
export default Usercard;
