import React from "react";
import '../css/Contact.css';

export class Contact extends React.Component {
  render() {
    return (
      <div className="contact-parent">
        <div className="contact-info">
          <p className="name">Ross Prehn</p>
          <p className="title">Full Stack Developer</p>
          <div className="social">
            <p><a className="linked-in" href="https://www.linkedin.com/in/rossprehn/"><img src="./assets/linkedin.png" alt="stuff"/></a></p>
            <p><a className="github" href="https://github.com/rossprehn"><img src="./assets/github.png" alt="stuff" /></a></p>
            <p><a className="email" href="mailto: johnross.prehn@gmail.com"><img src="./assets/email.png" alt="stuff" /></a></p>
          </div>
        </div>
        <div className="contact-info">
          <p className="name">Nicholas Solimene</p>
          <p className="title">Full Stack Developer</p>
          <div className="social">
            <p><a className="linked-in" href="https://www.linkedin.com/in/nsolimine/"><img src="./assets/linkedin.png" alt="stuff" /></a></p>
            <p><a className="github" href="https://github.com/nsolimine"><img src="./assets/github.png" alt="stuff" /></a></p>
            <p><a className="email" href="mailto: nick.solimine1@gmail.com"><img src="./assets/email.png" alt="stuff" /></a></p>
          </div>
        </div>
        <div className="contact-info">
          <p className="name">Chas Fricke</p>
          <p className="title">Full Stack Developer</p>
          <div className="social">
            <p><a className="linked-in" href="https://www.linkedin.com/in/chas-fricke/"><img src="./assets/linkedin.png" alt="stuff" /></a></p>
            <p><a className="github" href="https://github.com/chasfricke"><img src="./assets/github.png" alt="stuff" /></a></p>
            <p><a className="email" href="mailto: frickec@gmail.com"><img src="./assets/email.png" alt="stuff" /></a></p>
          </div>
        </div>
        <div className="contact-info">
          <p className="name">Malcolm Foster</p>
          <p className="title">Full Stack Developer</p>
          <div className="social">
            <p><a className="linked-in" href="https://github.com/mfoster1989"><img src="./assets/linkedin.png" alt="stuff" /></a></p>
            <p><a className="github" href="https://www.linkedin.com/in/mfoster1989"><img src="./assets/github.png" alt="stuff" /></a></p>
            <p><a className="email" href="mailto: abc@example.com"><img src="./assets/email.png" alt="stuff" /></a></p>
          </div>
        </div>
      </div>
    );
  }
}