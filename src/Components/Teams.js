import React from 'react'
import img1 from '../images/teams/team-1.jpg';
import img2 from '../images/teams/team-2.jpg';
import img3 from '../images/teams/team-3.jpg';
import img4 from '../images/teams/team-4.jpg';
import '../Styles/Teams.css';

const Teams = () => {
  return (
    <div className="container-fluid teams">
        <h5 className="teams-head">Our Teams</h5>
        <h1 className="teams-head1">
        Our Expert People<br/>
        Ready to Help You</h1>
        <div className="row teams-row">
            <div className="col-4-lg teams-col ">
                <img src={img1} alt="" srcset="" />
                <h3>Alex Robin</h3>
                <p>Founder & CEO</p>
            </div>
            <div className="col-4-lg teams-col ">
                <img src={img2} alt="" srcset="" />
                <h3>Adam Crew</h3>
                <p>Co Founder</p>
            </div>
            <div className="col-4-lg teams-col ">
                <img src={img3} alt="" srcset="" />
                <h3>Boris Johnson</h3>
                <p>Executive Manager</p>
            </div>
            <div className="col-4-lg teams-col ">
                <img src={img4} alt="" srcset="" />
                <h3>Robert Jordan</h3>
                <p>Digital Marketer</p>
            </div>
        </div>
    </div>
  )
}

export default Teams