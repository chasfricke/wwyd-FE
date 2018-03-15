import React from 'react';
import Anime from 'react-anime';

class Ross extends React.Component {
    state = {
        animating: true
    }

    toggleAnimation = () => {
        console.log('clicked');

        const animating = this.state.animating
        this.setState({
            animating: !animating
        })
    }

    render() {
        console.log(this.state);

        if (this.state.animating) {
            return (
                <Anime>
                    <div id="ross" className="contact-info" onMouseEnter={this.toggleAnimation}
                        onMouseLeave={this.shrinkCard}
                    >
                        <img className="headshot" src="https://media.licdn.com/dms/image/C4D03AQHDCO3YWK2JAg/profile-displayphoto-shrink_800_800/0?e=1526158800&v=alpha&t=PocEOX63avPI3o9UWU562TeZJaQ1hQ3FSsnQUUMzFTg" alt="logo" />
                        <p className="name">Ross Prehn</p>
                        <p className="title">Full Stack Developer</p>
                        <div className="social">
                            <p className="social-icon"><a className="linked-in" href="https://www.linkedin.com/in/rossprehn/" target="_blank" rel="noopener noreferrer"><img className="social-icon" src="./assets/linkedin.png" alt="icon" /></a></p>
                            <p className="social-icon"><a className="github" href="https://github.com/rossprehn" target="_blank" rel="noopener noreferrer"><img className="social-icon" src="./assets/github.png" alt="icon" /></a></p>
                            <p cl assName="social-icon"><a className="email" href="mailto: johnross.prehn@gmail.com"><img className="social-icon" src="./assets/email.png" alt="icon" /></a></p>
                        </div>
                    </div>
                </Anime>
            )
        } else {
            return (
                <div id="ross" className="contact-info" onMouseEnter={this.growCard}
                    onMouseLeave={this.shrinkCard}
                >
                    <img className="headshot" src="https://media.licdn.com/dms/image/C4D03AQHDCO3YWK2JAg/profile-displayphoto-shrink_800_800/0?e=1526158800&v=alpha&t=PocEOX63avPI3o9UWU562TeZJaQ1hQ3FSsnQUUMzFTg" alt="logo" />
                    <p className="name">Ross Prehn</p>
                    <p className="title">Full Stack Developer</p>
                    <div className="social">
                        <p className="social-icon"><a className="linked-in" href="https://www.linkedin.com/in/rossprehn/" target="_blank" rel="noopener noreferrer"><img className="social-icon" src="./assets/linkedin.png" alt="icon" /></a></p>
                        <p className="social-icon"><a className="github" href="https://github.com/rossprehn" target="_blank" rel="noopener noreferrer"><img className="social-icon" src="./assets/github.png" alt="icon" /></a></p>
                        <p cl assName="social-icon"><a className="email" href="mailto: johnross.prehn@gmail.com"><img className="social-icon" src="./assets/email.png" alt="icon" /></a></p>
                    </div>
                </div>
            )
        }
    }
}

export default Ross