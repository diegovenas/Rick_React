import "./style.css";

const Card = (props) => {
  return (
    <div className="card-container">
      <img src={props.image} alt={`Foto de ${props.name}`} />
      <h3>{props.name}</h3>
    </div>
  
  );
};

export default Card;


// {
//   "link": "https://naruto.fandom.com/pt-br/wiki/Cl%C3%A3_Aburame",
//   "icon": "http://pm1.narvii.com/6401/9166125f4fa0ba70244cadbfba51ace7ecba57d3_00.jpg",
//   "name": "Cla Aburame",
//   "id": 1
// },