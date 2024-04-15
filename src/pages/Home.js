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
            <div id='home-hero-background'/>
            <div id='home-content'>
                <h1 class='home-header'>Some Statistics</h1>
                <p class='home-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus erat diam, condimentum eget magna nec, lobortis vulputate felis. Maecenas quis urna vel erat dictum imperdiet. Cras luctus vitae arcu pellentesque efficitur. Cras urna tellus, blandit ut ornare id, venenatis non sem. Phasellus nec eros imperdiet odio suscipit scelerisque ac ac mi. Sed hendrerit neque et elit tincidunt condimentum. Sed ac elit leo. Proin eu sodales tellus. Nunc lacinia neque turpis, luctus laoreet nibh interdum ac.</p>
                <h2 class='home-subheader'>Lorem Ipsum</h2>
                <p class='home-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus erat diam, condimentum eget magna nec, lobortis vulputate felis. Maecenas quis urna vel erat dictum imperdiet. Cras luctus vitae arcu pellentesque efficitur. Cras urna tellus, blandit ut ornare id, venenatis non sem. Phasellus nec eros imperdiet odio suscipit scelerisque ac ac mi. Sed hendrerit neque et elit tincidunt condimentum. Sed ac elit leo. Proin eu sodales tellus. Nunc lacinia neque turpis, luctus laoreet nibh interdum ac.</p>
                <h2 class='home-subheader'>Lorem Ipsum</h2>
                <p class='home-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus erat diam, condimentum eget magna nec, lobortis vulputate felis. Maecenas quis urna vel erat dictum imperdiet. Cras luctus vitae arcu pellentesque efficitur. Cras urna tellus, blandit ut ornare id, venenatis non sem. Phasellus nec eros imperdiet odio suscipit scelerisque ac ac mi. Sed hendrerit neque et elit tincidunt condimentum. Sed ac elit leo. Proin eu sodales tellus. Nunc lacinia neque turpis, luctus laoreet nibh interdum ac.</p>
                <div id='home-graph'/>
                <h1 class='home-header'>Energy Comes in Many Forms</h1>
                <h2 class='home-subheader'>Solar Energy</h2>
                <h2 class='home-subheader'>Bio Energy</h2>
                <h2 class='home-subheader'>Geothermal Energy</h2>
                <h1 class='home-header'>Interactive Map</h1>
            </div>
        </div>
    );
}

export default Home;