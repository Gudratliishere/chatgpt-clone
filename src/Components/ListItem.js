import './css/listItem.css'

const ListItem = ({ src, text }) => {
    return (
        <div className='listItems'>
            <img className='listItemsImg' src={src} alt={text} />
            {text}
        </div>
    )
}

export default ListItem
