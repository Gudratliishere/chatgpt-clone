import gptLogo from '../assets/chatgpt.svg'
import './css/brand.css'

const Brand = () => {
    return (
        <div className='upper-side-top'>
            <img className='logo' src={gptLogo} alt='Logo' />
            <span className='brand'>Chat GPT</span>
        </div>
    )
}

export default Brand
