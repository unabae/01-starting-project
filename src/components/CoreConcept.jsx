

// ANOTHER WAY TO MAKE A FUNCTION
// function CoreConcept(props) {
//   return (
//     <li>
//       <img src={props.image} alt = {props.title} />
//       <h3>{props.title}</h3>
//       <p>{props.description}</p>
//     </li>
//   );
// }

// ANOTHER WAY TO MAKE A FUNCTION USING DESTRUCTURING
export default function CoreConcept({image, title, description}) {
    return (
      <li>
        <img src={image} alt = {title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    );
  }