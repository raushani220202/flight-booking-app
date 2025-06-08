
import Hotels from './Hotels'
import { hotels } from '../../data'
import "./Hotels.css"

function BestHotels() {
  return<Hotels hotels={hotels} heading ="Best Hotels"/>
}

export default BestHotels
