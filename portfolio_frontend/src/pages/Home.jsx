import "../css/Home.css"
import MissionPic from '../assets/Mission_picture.jpg'
function Home(){
    return(
        <div className="introduction">
            <span class="dot">
                <img src={MissionPic} alt="Image of me" />
                <p className="dot-text">My name is Spencer Gamero. I'm a junior at Brigham Young University Idaho pursuing a degree in Computer Science.</p>
            </span>
        </div>
    );
}

export default Home