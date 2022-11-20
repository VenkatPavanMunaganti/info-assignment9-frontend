import './Card.css'

const Card = (props) =>{    
    return (
        <div className="card">
            <div className='title'><h2>{props.title}</h2></div>
            <div className='content'>
                {props.children}
                {props.image && <img src={props.image} alt="Placeholder"/>}
            </div>
        </div>
    )
}

export default Card;
