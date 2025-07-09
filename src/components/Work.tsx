
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import WorkImage from "./WorkImage";
import "./styles/Work.css";

const Work = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX =
        rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`,
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    // Clean up
    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: "Voting Management System",
      category: "Government & Civic Tech",
      tools: "JavaScript, React.js, PostGree SQL",
      image: "/images/votingm.png",
      link: "https://frontendvs21.onrender.com",
    },
    {
      id: 2,
      title: "OTT Streaming Platform",
      category: "Entertainment & Media",
      tools: "Next.js, Node.js, MongoDB",
      image: "/images/gutargoo.png",
      link: "https://gutargoof.onrender.com",
    },
    {
      id: 3,
      title: "Napix",
      category: "Driving Drowsiness",
      tools: "Node js, Mongodb, Swift UI",
      image: "/images/napix.png",
      link: "https://apps.apple.com/in/app/napix/id6738643825",
    },
  ];

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={project.id}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{index + 1 < 10 ? `0${index + 1}` : index + 1}</h3>
                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.title} />
              {/* Visit Link */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="visit-link"
              >
                Visit Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
