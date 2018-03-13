import React from "react";
import '../css/Contact.css';

export class Contact extends React.Component {
  render() {
    return (
      <div className="contact-parent">
        <div className="contact-info">
          <p className="name">Ross Prehn</p>
          <p className="title">Full Stack Developer</p>
          <p><a className="linked-in" href="https://www.linkedin.com/in/rossprehn/">LinkedIn</a></p>
        <p><a className="github" href="https://github.com/rossprehn">GitHub</a></p>
      <p><a className="email" href="mailto: johnross.prehn@gmail.com">Email Ross</a></p>
        </div>
        <div className="contact-info">
          <p className="name">Nicholas Solimene</p>
          <p className="title">Full Stack Developer</p>
          <p><a className="linked-in" href="https://www.linkedin.com/in/nsolimine/">LinkedIn</a></p>
          <p><a className="github" href="https://github.com/nsolimine">GitHub</a></p>
          <p><a className="email" href="mailto: nick.solimine1@gmail.com">Email Nicholas</a></p>
        </div>
        <div className="contact-info">
          <p className="name">Chas Fricke</p>
          <p className="title">Full Stack Developer</p>
          <p><a className="linked-in" href="https://www.linkedin.com/in/chas-fricke/">LinkedIn</a></p>
        <p><a className="github" href="https://github.com/chasfricke">GitHub</a></p>
          <p><a className="email" href="mailto: frickec@gmail.com">Email Chas</a></p>
        </div>
        <div className="contact-info">
          <p className="name">Malcolm Foster</p>
          <p className="title">Full Stack Developer</p>
          <p><a className="linked-in" href="https://github.com/mfoster1989">LinkedIn</a></p>
        <p><a className="github" href="https://www.linkedin.com/in/mfoster1989">GitHub</a></p>
          <p><a className="email" href="mailto: abc@example.com">Email name</a></p>
        </div>
      </div>
    );
  }
}