import './Image.css'

const Image = () => {
    return(
        <div className="image">
            <div className="overlay">
                <p id='overlay1'>Computer Engineering</p>
                <p id='overlay2'>142,765 Computer Engineers follow this</p>
            </div>
            <img 
            width='100%' 
            height='440px' 
            src="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?cs=srgb&dl=pexels-bri-schneiter-346529.jpg&fm=jpg" alt="coverImage" 
            />
        </div>
    )
}

export default Image;