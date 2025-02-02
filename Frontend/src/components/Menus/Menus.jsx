import React from 'react'
import './Menus.css';

import { FcAbout, FcBiotech, FcBusinessContact, FcConferenceCall, FcContacts, FcHome, FcPortraitMode, FcReadingEbook, FcVideoProjector, FcVoicePresentation } from "react-icons/fc";

//{toggle} => destructure kiya haiii to access the toggle properties
const Menus = ({toggle}) => {
  return (
   <>
      {
        toggle ? (
          <>
          <div className="nav-profile-pic">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRvQMZxJH8AaKnsT3QDEwrVJZwpTq8myTfLA&s" alt="Profile Pic" />
          </div>

          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
              <FcHome/>
              Home 
              </div>
              <div className="nav-link">
              <FcAbout/>
              About 
              </div>
              <div className="nav-link">
              <FcPortraitMode/>
              Internships 
              </div>
              <div className="nav-link">
              <FcVideoProjector/>
              Projects 
              </div>
              <div className="nav-link">
              <FcBiotech/>
              Tech Stack 
              </div>
              <div className="nav-link">
              <FcReadingEbook/>
              Education  
              </div>
             
              <div className="nav-link">
              <FcVoicePresentation/>
              Teastimonial 
              </div>
              <div className="nav-link">
              <FcBusinessContact/>
              Contact 
              </div>
            </div>
          </div>
      </>
        ) : (
          <>
          <div className="nav-items">
          <div className="nav-item">
            <div className="nav-link">
            <FcHome title='Home'/>
             
            </div>
            <div className="nav-link">
            <FcAbout title='About'/>
             
            </div>
            <div className="nav-link">
            <FcPortraitMode title='Internships'/>
             
            </div>
            <div className="nav-link">
            <FcVideoProjector title='Projects'/>
             
            </div>
            <div className="nav-link">
            <FcBiotech title='Tech Stack '/>
             
            </div>
            <div className="nav-link">
            <FcReadingEbook title='Education'/>
              
            </div>
           
            <div className="nav-link">
            <FcVoicePresentation title='Teastimonial'/>
             
            </div>
            <div className="nav-link">
            <FcBusinessContact title='Contact'/>
             
            </div>
          </div>
        </div>
        </>
        )
      }
        
   </>
  )
}

export default Menus
