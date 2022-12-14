import React, { Component, useState } from "react";
import "./Skills.css";
import SoftwareSkill from "../../../../components/softwareSkills/SoftwareSkill";
import { skills } from "../skills/Skills";
import { Fade } from "react-reveal";
import DataScienceImg from "./DataScienceImg";
import FullStackImg from "./FullStackImg";
import CloudInfraImg from "./CloudInfraImg";
import DesignImg from "./DesignImg";
import { textAlign } from "@mui/system";

function GetSkillSvg(props) {
  if (props.fileName === "DataScienceImg")
    return <DataScienceImg theme={props.theme} />;
  else if (props.fileName === "FullStackImg")
    return <FullStackImg theme={props.theme} />;
  else if (props.fileName === "CloudInfraImg")
    return <CloudInfraImg theme={props.theme} />;
  return <DesignImg theme={props.theme} />;
}

class SkillSection extends Component {
  render() {
    const theme = this.props.theme;
    const skills = this.props.skills;

    return (
      <div>
        {skills.data.map((skill) => {
          return (
            <div className="skills-main-div">
              {/* <Fade left duration={2000}> */}
                <div className="skills-image-div">
                  {/* <img
                    alt="Ashutosh is Analysing Data"
                    src={require(`../../assests/images/${skill.imagePath}`)}
                  ></img> */}
                  <GetSkillSvg fileName={skill.fileName} theme={theme} />
                </div>
              {/* </Fade> */}

              <div className="skills-text-div">
                {/* <Fade right duration={1000}> */}
                  <h1 className="skills-heading" style={{ color: theme.text, textAlign: 'left', fontSize: '45px' }}>
                    {skill.title}
                  </h1>
                {/* </Fade> */}
                {/* <Fade right duration={1500}> */}
                  {/*<SoftwareSkill logos={skill.softwareSkills} />*/}
                {/* </Fade> */}
                {/* <Fade rigth duration={2000}> */}
                  <div>
                    {skill.skills.map((skillSentence) => {
                      return (
                        <p
                          className="subTitle skills-text"
                          style={{ color: theme.secondaryText, textAlign: 'left', fontSize: '25px', lineHeight: '40px', marginTop: '50px', marginLeft: '20px' }}
                        >
                          {skillSentence}
                        </p>
                      );
                    })}
                  </div>
                {/* </Fade> */}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}



export default SkillSection;
