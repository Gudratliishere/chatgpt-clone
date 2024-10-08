import rocket from '../assets/rocket.svg'
import ListItem from './ListItem'
import './css/lowerSide.css'

const LowerSide = () => {
    return (
        <div className='lower-side'>
            <ListItem src={rocket} text={'Upgrade to Pro'} />
        </div>
    )
}

export default LowerSide
