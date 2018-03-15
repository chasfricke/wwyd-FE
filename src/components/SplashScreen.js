import React from "react";
import "../css/SplashScreen.css";

export class SplashScreen extends React.Component {
  render () {
    return (
      <div >

        <div>
          <h3>OVERVIEW</h3>
          <p><i>ROOMINATE</i> is a collaborative group game designed to initiate meaningful conversation amongst adults.  Watch as even the most shy of the bunch can't help but weigh in on these wacky hypotheticals. The only question left to answer is... what would you do?</p>
          <h3>REQUIREMENTS</h3>
          <ul className="splash-list">
            <li>Players:  2 - 1,000,000</li>
            <li>Suggested Ages:  16+</li>
          </ul>
          <h3>GAMEPLAY</h3>
          <ul className="splash-list">
            <li>Choose a Narrator to read the first hypothetical question. Each player takes turns being Narrator.</li>
            <li>Group has a few minutes to discuss the topic and persuade others to join their side.</li>
            <li>At the end of 2 min, Narrator counts votes for each option.</li>
            <li>If total number of players (including Narrator) is even, Narrator doesn't vote, otherwise the Narrator votes.</li>
            <li>Click the option button below the question to record the group's majority opinion.</li>
            <li>The game ends when the cops show up for the inevitable noise complaint.  Enjoy!</li>
          </ul>
          <h3>ADDITIONAL FEATURES</h3>
          <ul className="splash-list">
            <li>Have a great question of your own?  Add it! Just click on the plus sign below!</li>
            <li>Want to delete a user submitted question?  Just click the delete button when the question displays.</li>
          </ul>
        </div>
      </div>
    );
  }
}
