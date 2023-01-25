import { data, option } from "../data";
import React, { useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import kiva from "../images/kiva.webp";
import twitter from "../images/twitter.webp";
import redfin from "../images/redfin.webp";
import nasa from "../images/nasa.webp";
import audi from "../images/audi.webp";
import castlight from "../images/castlight.webp";
import { TbChevronDown } from "react-icons/tb";
import { BiChevronDown } from "react-icons/bi";
import { MdKeyboardArrowUp } from "react-icons/md";
import Zoom from "react-reveal/Zoom";

import "./Tab.css";
const Tab = () => {
  const [value, setValue] = useState(0);
  const [state, setState] = useState(data);
  const [select, setSelect] = useState("Work Management");
  const [click, setClick] = useState(false);

  const {
    id,
    button,
    heading,
    link,
    confluenceImg,
    ConfluenceHeading,
    ConfluenceSmall,
    trelloImg,
    trelloHeading,
    trelloSmall,
    jiraImg,
    jiraHeading,
    jiraSmall,
    bigImg,
  } = data[value];

  return (
    <>
      <div className="Tab-section">
        <div className="tab-heading">
          <p>Atlassian solutions are designed for all types of work</p>
        </div>

        {/* desktop */}
        <div className="btn-contain">
          {data.map((btn, index) => {
            return (
              <button
                key={btn.id}
                onClick={() => setValue(index)}
                className={`tab-btn ${index == value && "active-btn"}`}
              >
                {btn.button}
              </button>
            );
          })}
        </div>

        {/* mobile */}
        <div className="mobile-container">
          <div className="select-container" onClick={() => setClick(!click)}>
            {select}
            <div>
              {click ? (
                <MdKeyboardArrowUp />
              ) : (
                <BiChevronDown style={{ fontSize: "20px" }} />
              )}
            </div>
          </div>
          {click && (
            <div className="select-drop-container">
              <div className="select-drop">
                {option.map((option, index) => (
                  <div
                    onClick={(e) => {
                      setSelect(
                        option.option1 || option.option2 || option.option3
                      );
                      setClick(false);
                      setValue(index);
                    }}
                  >
                    <p>{option.option1}</p>
                    <p>{option.option2}</p>
                    <p>{option.option3}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Tabs section */}
        <Zoom>
          <div className={`tab-container`}>
            <div className="tab-bigImg">
              <img src={bigImg} alt="" />
            </div>
            <div className="tab-info">
              <p className="heading">{heading}</p>
              <div className="tab-container-link">
                <a href="" className="tab-link">
                  {link}
                </a>
                <span>
                  {" "}
                  <HiArrowNarrowRight />
                </span>
              </div>

              {/* Tab 1 */}
              <div className="small-container">
                <div className="small-img">
                  <img src={confluenceImg} alt="" />
                </div>
                <div className="small-text">
                  <p className="text-heading">{ConfluenceHeading}</p>
                  <p className="text-small">{ConfluenceSmall}</p>
                </div>
              </div>
              {/* tab 2 */}
              <div className="small-container">
                <div className={`small-img  ${!trelloImg && "clear"}  `}>
                  <img src={trelloImg} alt="" className={``} />
                </div>
                <div className="small-text">
                  <p className="text-heading">{trelloHeading}</p>
                  <p className="text-small">{trelloSmall}</p>
                </div>
              </div>
              {/* tab 3 */}
              <div className="small-container">
                <div className={`small-img  ${!jiraImg && "clear"}  `}>
                  <img src={jiraImg} alt="" />
                </div>
                <div className="small-text">
                  <p className="text-heading">{jiraHeading}</p>
                  <p className="text-small">{jiraSmall}</p>
                </div>
              </div>
            </div>
          </div>
        </Zoom>
        {/*  Video section*/}
      </div>
      <div className="vid-section">
        <p className="team">
          Join the teams that achieve the impossible every day{" "}
        </p>
        <p className="customer">Watch a customer story</p>
        <div className="logo-container">
          <img src={kiva} alt="" />
          <img src={twitter} alt="" />
          <img src={redfin} alt="" />
          <img className="nasa" src={nasa} alt="" />
          <img src={audi} alt="" />
          <img src={castlight} alt="" />
        </div>
      </div>
    </>
  );
};

export default Tab;
