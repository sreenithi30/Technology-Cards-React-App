// Write your code here.
import './index.css'

function CardItem(props) {
  const {cards} = props
  const {id, title, description, imgUrl, className} = cards
  return (
    <li className={`${className}`}>
      <h1>{title}</h1>
      <p>{description}</p>
      <div>
        <img src={imgUrl} alt={title} />
      </div>
    </li>
  )
}
export default CardItem
