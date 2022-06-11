import React, { useState } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

export default function Resume(props){
    const[selectedBulletIndex, setSelectedBulletIndex]=useState(0);
    const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

    let fadeInScreenHandler = (screen) =>{
        if(screen.fadeInScreen !== props.id)
        return
        Animations.animations.fadeInScreen(props.id)
    };
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);


    const ResumeHeading = (props) => {
        return (
          <div className="resume-heading">
            <div className="resume-main-heading">
              <div className="heading-bullet"></div>
              <span>{props.heading ? props.heading : ""}</span>
              {props.fromDate && props.toDate ? (
                <div className="heading-date">
                  {props.fromDate + "-" + props.toDate}
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <div className="resume-sub-heading">
              <span>{props.subHeading ? props.subHeading : ""}</span>
            </div>
            <div className="resume-heading-description">
              <span>{props.description ? props.description : ""}</span>
            </div>
          </div>
        );
      };

    const resumeBullets = [
        { label: "Education", logoSrc: "education.svg" },
        { label: "Programming Skills", logoSrc: "programming-skills.svg" },
        { label: "Projects", logoSrc: "projects.svg" },
        { label: "Interests", logoSrc: "interests.svg" },
      ];
      const programmingSkillsDetails = [
        { skill: "JavaScript", ratingPercentage: 85 },
        { skill: "React JS", ratingPercentage: 85 },
        { skill: "React Native", ratingPercentage: 85 },
        { skill: "Express JS", ratingPercentage: 89 },
        { skill: "Node JS", ratingPercentage: 89 },
        { skill: "Mongo Db", ratingPercentage: 70 },
        { skill: "Core Java", ratingPercentage: 80 },
        { skill: "HTML", ratingPercentage: 80 },
        { skill: "CSS", ratingPercentage: 80 },
      ];
      const projectsDetails = [
        {
          title: "Personal Portfolio Website",
          duration: { fromDate: "2022", toDate: "2022" },
          description:
            "A Personal Portfolio website to showcase all my details and projects at one place.",
          subHeading: "Technologies Used: React JS, Bootsrap",
        },
        {
          title: "Content Management System (CMS) ",
          duration: { fromDate: "2021", toDate: "2022" },
          description:
            "A blog management wesite where people can post blogs & comments, which can be then managed by admins",
          subHeading:
            "Technologies Used:  PHP, MySQL, Bootstrap 5",
        },
        {
          title: "COVID Assistance ",
          duration: { fromDate: "2020", toDate: "2021" },
          description:
            "Webiste to help people during the COVID-19 pandemic",
          subHeading:
            "Technologies Used: Bootstrap, JQuery, AngularJS, NodeJS, ExpressJS, MongoDB",
        },
      ];
      const resumeDetails = [
        <div className="resume-screen-container" key="education">
          <ResumeHeading
            heading={"Vellore Institute of Technology, vellore"}
            subHeading={"B.Tech in INFORMATION TECHNOLOGY"}
            fromDate={"2019"}
            toDate={"2023"}
          />
    
          <ResumeHeading
            heading={"Kendriya Vidyalaya, Command Hospital"}
            subHeading={"CBSE 12th"}
            fromDate={"2018"}
            toDate={"2017"}
          />
          <ResumeHeading
            heading={"Kendriya vidyalaya, Itarsi"}
            subHeading={"CBSE 10th"}
            fromDate={"2016"}
            toDate={"2015"}
          />
        </div>,
    
    
        /* PROGRAMMING SKILLS */
        <div
          className="resume-screen-container programming-skills-container"
          key="programming-skills"
        >
          {programmingSkillsDetails.map((skill, index) => (
            <div className="skill-parent" key={index}>
              <div className="heading-bullet"></div>
              <span>{skill.skill}</span>
              <div className="skill-percentage">
                <div
                  style={{ width: skill.ratingPercentage + "%" }}
                  className="active-percentage-bar"
                ></div>
              </div>
            </div>
          ))}
        </div>,
    
        /* PROJECTS */
        <div className="resume-screen-container" key="projects">
          {projectsDetails.map((projectsDetails, index) => (
            <ResumeHeading
              key={index}
              heading={projectsDetails.title}
              subHeading={projectsDetails.subHeading}
              description={projectsDetails.description}
              fromDate={projectsDetails.duration.fromDate}
              toDate={projectsDetails.duration.toDate}
            />
          ))}
        </div>,
    
        /* Interests */
        <div className="resume-screen-container" key="interests">
          <ResumeHeading
            heading="Tinkering"
            description="Since my early chilhood I have constant been doing thinkering in my free time, from trying to fix broken
            gadgets to trying to make some interesting project, in my 11th class I won 3rd postion for district sceince exhibition"
          />
          <ResumeHeading
            heading="Photogrphy"
            description="Photogrphy is something which I find to be very therapeutic, I feel it allows me to appreciate every single thing "
          />
          <ResumeHeading
            heading="Horology"
            description="Since my young ages whates have facinated me, as I grew up I realised whates don't only represent innovatives tecgnologies but it also have cultural influence"
          />
        </div>,
      ];

      const handleCarousal = (index) => {
        let offsetHeight = 360;
    
        let newCarousalOffset = {
          style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
        };
    
        setCarousalOffsetStyle(newCarousalOffset);
        setSelectedBulletIndex(index);
      };
      const getBullets = () => {
        return resumeBullets.map((bullet, index) => (
          <div
            onClick={() => handleCarousal(index)}
            className={
              index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
            }
            key={index}
          >
            <img
              className="bullet-logo"
              src={require(`../../assets/Resume/${bullet.logoSrc}`)}
              alt="alt"
            />
            <span className="bullet-label">{bullet.label}</span>
          </div>
        ));
      };
      const getResumeScreens = () => {
        return (
          <div
            style={carousalOffsetStyle.style}
            className="resume-details-carousal"
          >
            {resumeDetails.map((ResumeDetail) => ResumeDetail)}
          </div>
        );
      };

    
    return(
        <div className="resume-container screen-container" id={props.id || ""}>
        <div className="resume-content">
        <ScreenHeading
            title={'Resume'}
            subHeading={'My Formal Bio Details'}
        />
        <div className="resume-card">
            <div className="resume-bullets">
                <div className="bullet-container">
                    <div className="bullet-icons"></div>
                    <div className="bullets">{getBullets()}</div>
                </div>
            </div>
            <div className="resume-bullet-details">
                {getResumeScreens()}
            </div>
        </div>
        </div>

        </div>
    )
}