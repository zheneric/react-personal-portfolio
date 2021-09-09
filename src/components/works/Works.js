import { useState } from "react";
import "./works.scss";
import GitHubIcon from "@material-ui/icons/GitHub";
import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser";

export default function Works() {
  const [currSlide, setCurrSlide] = useState(0);

  const data = [
    {
      id: "1",
      title: "Yodal",
      desc: "Audio-based community mental healthcare platform built during a weekend hackathon.",
      caption: "Prototype demo built using React.",
      img: "./assets/yodal-thumbnail.png",
      live: "https://yodal.netlify.app",
      code: "https://github.com/jpur3846/yodal",
    },
    {
      id: "2",
      title: "CliniCall",
      desc: "Digital healthcare platform that simplifies the patient journey of collecting prescription medication.",
      caption: "Hi-fidelity prototype designed with Figma.",
      img: "./assets/clinicall-thumbnail.png",
      live: "https://www.figma.com/proto/dxF7nQ20bIvXdN0opZyeGu/PDP-Lo-FI-Prototyping?node-id=116%3A5752&starting-point-node-id=116%3A5752",
      code: "https://www.figma.com/file/dxF7nQ20bIvXdN0opZyeGu/PDP-Lo-FI-Prototyping?node-id=92%3A5630",
    },
  ];

  const handleClick = (direction) => {
    direction === "left"
      ? setCurrSlide(currSlide > 0 ? currSlide - 1 : 2)
      : setCurrSlide(currSlide < data.length - 1 ? currSlide + 1 : 0);
  };

  return (
    <div className="works" id="works">
      <h1>Featured</h1>
      <div
        className="slider"
        style={{ transform: `translateX(-${currSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <p className="caption">{d.caption}</p>
                  <span>
                    <a href={d.live}>
                      <OpenInBrowserIcon />
                    </a>
                    <a href={d.code}>
                      <GitHubIcon />
                    </a>
                  </span>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick("right")}
      />
    </div>
  );
}
