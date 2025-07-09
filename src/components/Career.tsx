import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          {/* <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Position In Company</h4>
                <h5>IOS Developer Intern</h5>
              </div>
              <h3>20XX</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              labore sit non ipsum temporibus quidem, deserunt eaque officiis
              mollitia ratione suscipit repellat.
            </p>
          </div> */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Infyle</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
            Worked as a developer at Infyle, where I built and deployed feature-rich projects such as OTT platforms. I was responsible for designing scalable architectures, integrating APIs, and optimizing performance to ensure seamless user experiences. Successfully delivered these projects ahead of deadlines while maintaining high code quality and client satisfaction.            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>IOS Developer Intern</h4>
                <h5>Infosys</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
            Worked as an iOS Developer Intern at Infosys, where I built and optimized iOS applications using Swift and SwiftUI. Delivered high-quality features, integrated APIs seamlessly, and enhanced user experience through clean architecture and efficient design patterns. Successfully contributed to projects under tight deadlines while collaborating with cross-functional teams.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
