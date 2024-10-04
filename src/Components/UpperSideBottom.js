import QueryButton from './QueryButton'

const UpperSideBottom = ({ handleSend }) => {

    return (
        <div>
            <QueryButton text={'What is the programming?'} handleSend={handleSend} />
            <QueryButton text={'How to use an API?'} handleSend={handleSend} />
        </div>
    )
}

export default UpperSideBottom
