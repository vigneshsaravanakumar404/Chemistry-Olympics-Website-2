import { ReactTyped } from 'react-typed';
import './../styles/Home.css';

function Home() {

    return(
        <div>
            <h1 id='home-title'>
                <ReactTyped
                    strings={['Alternate\nEnergy']}
                    typeSpeed={50}
                    loop={false}
                    showCursor={true}
                />
            </h1>
        </div>
    );
}

export default Home;