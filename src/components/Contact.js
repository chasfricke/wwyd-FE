import React from 'react'
import '../css/Contact.css'
import anime from 'animejs'

export class Contact extends React.Component {
  constructor(props) {
<<<<<<< HEAD
    super(props);
    this.state = {
      id: ""
    }
  }



  growCard = (event) => {
=======
    super(props)
    this.state = {
      id: ''
    }
  }

  growCard = event => {
>>>>>>> master
    var target = event.currentTarget.id
    console.log(target)

    anime({
      targets: '#' + target,
      scale: 1.1
    })
  }

<<<<<<< HEAD
  shrinkCard = (event) => {
=======
  shrinkCard = event => {
>>>>>>> master
    var target = event.currentTarget.id
    console.log(target)

    anime({
      targets: '#' + target,
      scale: 1.0
    })
  }

  render() {
    return (
      <div>
        <div className="contact-parent">
<<<<<<< HEAD
          <div id="ross" className="contact-info" onMouseEnter={this.growCard} onMouseLeave={this.shrinkCard>
            <img id="NOPE" className="headshot" src="https://media.licdn.com/dms/image/C4D03AQHDCO3YWK2JAg/profile-displayphoto-shrink_800_800/0?e=1526158800&v=alpha&t=PocEOX63avPI3o9UWU562TeZJaQ1hQ3FSsnQUUMzFTg" alt="logo" />
            <p className="name">Ross Prehn</p>
            <p className="title">Full Stack Developer</p>
            <div className="social">
              <p className="social-icon"><a className="linked-in" href="https://www.linkedin.com/in/rossprehn/" target="_blank" rel="noopener noreferrer"><img className="social-icon" src="./assets/linkedin.png" alt="icon" /></a></p>
              <p className="social-icon"><a className="github" href="https://github.com/rossprehn" target="_blank" rel="noopener noreferrer"><img className="social-icon" src="./assets/github.png" alt="icon" /></a></p>
              <p className="social-icon"><a className="email" href="mailto: johnross.prehn@gmail.com"><img className="social-icon" src="./assets/email.png" alt="icon" /></a></p>
            </div>
          </div>
          </div>
          </div>
          <div id="nick" className="contact-info" onMouseOver={this.growCard} onMouseLeave={this.shrinkCard}>
            <img className="headshot" src="https://media.licdn.com/dms/image/C5103AQF3_YNT5v1ZCA/profile-displayphoto-shrink_800_800/0?e=1526155200&v=alpha&t=3UoNYZrwHQPOtI8_nfuKKphq1QT_-JkKnIx1X5W5OZo" alt="logo" />
            <p className="name">Nicholas Solimine</p>
            <p className="title">Full Stack Developer</p>
            <div className="social">
              <p className="social-icon"><a className="linked-in" href="https://www.linkedin.com/in/nsolimine/" target="_blank" rel="noopener noreferrer"><img className="social-icon" src="./assets/linkedin.png" alt="icon" /></a></p>
              <p className="social-icon"><a className="github" href="https://github.com/nsolimine" target="_blank" rel="noopener noreferrer"><img className="social-icon" src="./assets/github.png" alt="icon" /></a></p>
              <p className="social-icon"><a className="email" href="mailto: nick.solimine1@gmail.com"><img className="social-icon" src="./assets/email.png" alt="icon" /></a></p>
            </div>
          </div>
          <div id="chas" className="contact-info" onMouseOver={this.growCard} onMouseLeave={this.shrinkCard}>
            <img className="headshot" src="https://media.licdn.com/dms/image/C4E03AQGrtF_lUOnueA/profile-displayphoto-shrink_800_800/0?e=1526158800&v=alpha&t=uoxMVmUqxdOErZZwNnLAh6fKtmA7VgVjk94o3Nbl1Ng" alt="logo" />
            <p className="name">Chas Fricke</p>
            <p className="title">Full Stack Developer</p>
            <div className="social">
              <p className="social-icon"><a className="linked-in" href="https://www.linkedin.com/in/chas-fricke/" target="_blank" rel="noopener noreferrer"><img className="social-icon" src="./assets/linkedin.png" alt="icon" /></a></p>
              <p className="social-icon"><a className="github" href="https://github.com/chasfricke" target="_blank" rel="noopener noreferrer"><img className="social-icon" src="./assets/github.png" alt="icon" /></a></p>
              <p className="social-icon"><a className="email" href="mailto: frickec@gmail.com"><img className="social-icon" src="./assets/email.png" alt="icon" /></a></p>
            </div>
          </div>
          <div id="malcolm" className="contact-info" onMouseOver={this.growCard} onMouseLeave={this.shrinkCard}>
            <img className="headshot" src="https://media.licdn.com/media/AAEAAQAAAAAAAArNAAAAJGI1M2FiNDg3LWY5NWEtNGZkNC05MTkxLWUzZjBjYjgyZDQ4Mw.jpg" alt="logo" />
            <p className="name">Malcolm Foster</p>
            <p className="title">Full Stack Developer</p>
            <div className="social">
              <p className="social-icon"><a className="linked-in" href="https://github.com/mfoster1989" target="_blank" rel="noopener noreferrer"><img className="social-icon" src="./assets/linkedin.png" alt="icon" /></a></p>
              <p className="social-icon"><a className="github" href="https://www.linkedin.com/in/mfoster1989" target="_blank" rel="noopener noreferrer"><img className="social-icon" src="./assets/github.png" alt="icon" /></a></p>
              <p className="social-icon"><a className="email" href="mailto: abc@example.com"><img className="social-icon" src="./assets/email.png" alt="icon" /></a></p>
            </div>
          </div>
        </div>

      </div>
    );
=======
          <div
            id="ross"
            className="contact-info"
            onMouseEnter={this.growCard}
            onMouseLeave={this.shrinkCard}
          >
            <img
              id="NOPE"
              className="headshot"
              src="https://media.licdn.com/dms/image/C4D03AQHDCO3YWK2JAg/profile-displayphoto-shrink_800_800/0?e=1526158800&v=alpha&t=PocEOX63avPI3o9UWU562TeZJaQ1hQ3FSsnQUUMzFTg"
              alt="logo"
            />
            <p className="name">Ross Prehn</p>
            <p className="title">Full Stack Developer</p>
            <break />
            <div className="social">
              <p className="social-icon">
                <a
                  className="linked-in"
                  href="https://www.linkedin.com/in/rossprehn/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="social-icon" src="./assets/linkedin.png" alt="icon" />
                </a>
              </p>
              <p className="social-icon">
                <a
                  className="github"
                  href="https://github.com/rossprehn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="social-icon" src="./assets/github.png" alt="icon" />
                </a>
              </p>
              <p className="social-icon">
                <a className="email" href="mailto: johnross.prehn@gmail.com">
                  <img className="social-icon" src="./assets/email.png" alt="icon" />
                </a>
              </p>
            </div>
          </div>
          <div
            id="nick"
            className="contact-info"
            onMouseOver={this.growCard}
            onMouseLeave={this.shrinkCard}
          >
            <img
              className="headshot"
              src="https://media.licdn.com/dms/image/C5103AQF3_YNT5v1ZCA/profile-displayphoto-shrink_800_800/0?e=1526155200&v=alpha&t=3UoNYZrwHQPOtI8_nfuKKphq1QT_-JkKnIx1X5W5OZo"
              alt="logo"
            />
            <p className="name">Nicholas Solimine</p>
            <p className="title">Full Stack Developer</p>
            <div className="social">
              <p className="social-icon">
                <a
                  className="linked-in"
                  href="https://www.linkedin.com/in/nsolimine/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="social-icon" src="./assets/linkedin.png" alt="icon" />
                </a>
              </p>
              <p className="social-icon">
                <a
                  className="github"
                  href="https://github.com/nsolimine"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="social-icon" src="./assets/github.png" alt="icon" />
                </a>
              </p>
              <p className="social-icon">
                <a className="email" href="mailto: nick.solimine1@gmail.com">
                  <img className="social-icon" src="./assets/email.png" alt="icon" />
                </a>
              </p>
            </div>
          </div>
          <div id="chas" className="contact-info" onMouseOver={this.animateChas}>
            <img
              className="headshot"
              src="https://media.licdn.com/dms/image/C4E03AQGrtF_lUOnueA/profile-displayphoto-shrink_800_800/0?e=1526158800&v=alpha&t=uoxMVmUqxdOErZZwNnLAh6fKtmA7VgVjk94o3Nbl1Ng"
              alt="logo"
            />
            <p className="name">Chas Fricke</p>
            <p className="title">Full Stack Developer</p>
            <div className="social">
              <p className="social-icon">
                <a
                  className="linked-in"
                  href="https://www.linkedin.com/in/chas-fricke/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="social-icon" src="./assets/linkedin.png" alt="icon" />
                </a>
              </p>
              <p className="social-icon">
                <a
                  className="github"
                  href="https://github.com/chasfricke"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="social-icon" src="./assets/github.png" alt="icon" />
                </a>
              </p>
              <p className="social-icon">
                <a className="email" href="mailto: frickec@gmail.com">
                  <img className="social-icon" src="./assets/email.png" alt="icon" />
                </a>
              </p>
            </div>
          </div>
          <div id="malcolm" className="contact-info" onMouseOver={this.animateMalcolm}>
            <img
              className="headshot"
              src="https://media.licdn.com/media/AAEAAQAAAAAAAArNAAAAJGI1M2FiNDg3LWY5NWEtNGZkNC05MTkxLWUzZjBjYjgyZDQ4Mw.jpg"
              alt="logo"
            />
            <p className="name">Malcolm Foster</p>
            <p className="title">Full Stack Developer</p>
            <div className="social">
              <p className="social-icon">
                <a
                  className="linked-in"
                  href="https://github.com/mfoster1989"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="social-icon" src="./assets/linkedin.png" alt="icon" />
                </a>
              </p>
              <p className="social-icon">
                <a
                  className="github"
                  href="https://www.linkedin.com/in/mfoster1989"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="social-icon" src="./assets/github.png" alt="icon" />
                </a>
              </p>
              <p className="social-icon">
                <a className="email" href="mailto: abc@example.com">
                  <img className="social-icon" src="./assets/email.png" alt="icon" />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
>>>>>>> master
  }
}
