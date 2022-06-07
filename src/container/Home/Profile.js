import React from 'react';
import Typical from 'react-typical';
import './Profile.css';

export default function Profile(){
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                    <div className='profile-details'>
                    <div className='colz'>
                    <div className='colz-icon'>

                    <a href='https://www.linkedin.com/in/pratyay-mallik-0a866a192/'>
                        <i class="fa fa-linkedin-square"></i>
                    </a>
                    <a href='https://github.com/PratyayMallik1006/'>
                        <i class="fa fa-github-square"></i>
                    </a>
                    <a href='#'>
                        <i className='fa fa-facebook-square'></i>
                    </a>
                    
                    <a href='https://drive.google.com/file/d/1BpRaRMJ7Fg4Tzh2xB90YHhyKihXE1ir3/view?usp=sharing'>
                        <i className="fa fa-solid fa-file"></i>
                    </a>
                    </div>
                    </div>

                    <div className='profile-details-name'>
                    <span className='primary-text'>
                        {" "}
                        Hello i'm <span className='highlighted-text'>Pratyay</span>
                    </span>
                    </div>
                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            {""}
                            <h1>
                                <Typical 
                                    loop={Infinity}
                                    wrapper='h1'
                                    steps={[
                                        "Full stack Developer",
                                        2500,
                                        "Blockchain Developer",
                                        2500,
                                        "App Developer",
                                        2500,
                                        "Data Science enthusiast",
                                        2500
                                    ]}
                                />
                            </h1>
                            <span className='profile-role-tagline'>
                            I am a final year B.Tech Student from VIT, Vellore. Welcome to my portfolio
                            </span>
                        </span>
                    </div>
                    <div className='profile-options'>
                        <button className='btn primary-btn'>
                            {""}
                            Hire Me{""}
                        </button>
                        <a href="Pratyay_Resume_2022_june.pdf" download="Pratyay_Resume">
                        <button className='btn highlighted-btn'>Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'>

                    </div>
                </div>
            </div>

        </div>
    );
}