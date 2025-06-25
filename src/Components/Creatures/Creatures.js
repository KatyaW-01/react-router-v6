import './Creatures.css';
import {useParams} from "react-router-dom"

const Creatures = ({  }) => {
  const creatureType = useParams().creatureType
  console.log("creature type:",creatureType)
  console.log("use Params:",useParams())

  return (
    <div>
      <h1>{`${creatureType.toUpperCase()}!`}</h1>
    </div>
  )
}

export default Creatures;
