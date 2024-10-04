import saved from '../assets/bookmark.svg'
import home from '../assets/home.svg'
import rocket from '../assets/rocket.svg'
import ListItem from './ListItem'
import './css/lowerSide.css'

const LowerSide = () => {
    return (
        <div className='lower-side'>
            <ListItem src={home} text={'Home'} />
            <ListItem src={saved} text={'Saved'} />
            <ListItem src={rocket} text={'Upgrade to Pro'} />
        </div>
    )
}

export default LowerSide
