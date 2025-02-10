import React from 'react';
import './About.css';

const About = () => {
  return (
    <>
        <div className="about" id='about'>
            <div className="row">
                <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRvQMZxJH8AaKnsT3QDEwrVJZwpTq8myTfLA&s" alt="profile_pic" />
                </div>
                <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
                    <h1>About me</h1>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti dolores sint consequuntur, possimus velit neque aut, facere mollitia reprehenderit architecto error qui eaque illum. Eveniet labore voluptatem quia dolorum accusamus.
                        Accusantium aliquam id, temporibus corporis blanditiis velit provident similique exercitationem itaque repudiandae facere impedit maiores animi suscipit sapiente praesentium nobis reiciendis aperiam amet. Velit, numquam eligendi earum deserunt illo esse.
                    </p>
                </div>
            </div>
        </div>
    </>
  )
}

export default About
