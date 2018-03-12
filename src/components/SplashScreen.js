import React from "react";
import "../css/SplashScreen.css";

export class SplashScreen extends React.Component {
  render () {
    return (
      <div className="instructions-container">
          <h2>How To Play</h2>
          <h3>Overview</h3>
          <p><i>What Would You Do?</i> is collaborative group game designed to initiate meaningful conversation amongst adult groups.  You'll love how even the most shy individuals can't help but weigh in on these wacky hypotheticals. The only question left to answer now is, What would you do?</p>
          <h3>Requirements</h3>
          <ul>
            <li>Players:  2 - 1,000,000</li>
            <li>Suggested Ages:  16+</li>
          </ul>
          <h3>Gameplay</h3>
          <ul>
            <li>Choose a Narrator to read the first hypothetical question.</li>
            <li>Group has 2 minutes to discuss the topic and persuade others to join their side.</li>
            <li>At the end of 2 min, Narrator counts votes for each option</li>
            <li>If total number of players (including Narrator) is odd, Narrator also votes.  If total is even, Narrator doesn't vote.</li>
            <li>Click the corresponding option button below the question to record the group's majority opinion.</li>
            <li>Oncesubmitted, see how your group's vote compared to the rest of WWYD's users.</li>
            <li>The game ends when the cops show up for the inevitable noise complaint, or when the first player dies from laughter.</li>
          </ul>
          <h3>Additional Features</h3>
          <ul>
            <li>Have a great question of your own?  Add it! Just click on the [describe process here]</li>
            <li>Want to improve a question?  Just click on the [add process here].</li>
            <li>Found an inappropriate question?  Delete it by [add process here].</li>
          </ul>
          <button>Get Started</button>
      </div>
    );
  }
}