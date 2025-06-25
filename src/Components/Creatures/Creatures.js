import './Creatures.css';
import {useParams,Link} from "react-router-dom"
import { getCreaturesData } from "../../data/animalData"

const Creatures = ({  }) => {
  const creatureType = useParams().creatureType
  console.log("creature type:",creatureType)
  console.log("use Params:",useParams())

  const creatureImages = getCreaturesData(creatureType).map(creature => {
    const { id, image } = creature;
    return (
      <Link to={`/${creatureType}/${id}`} >
        <img src={image} key={id} id={id} className="app-img"/>
      </Link>
    )
  });

  return (
    <>
      <h1>{creatureType.toUpperCase()}!</h1>
      {creatureImages}
    </>
  )
}

export default Creatures;
