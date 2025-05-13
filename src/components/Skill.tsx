import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptopCode,
  faServer,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons";
import Chip from "@mui/material/Chip";
import quizbee from "../assets/images/quizbee.jpg";
import award from "../assets/images/award.jpg";
import "../assets/styles/Skill.scss";

const labelsFirst = [
  "React",
  "TypeScript",
  "JavaScript",
  "HTML5",
  "CSS3",
  "SCSS",
  "Bootstrap",
  "Git",
  "GitHub",
  "Flet",
  "Canva",
  "Inkscape",
];

const labelsSecond = ["Java", "PHP", "Node", "Express", "Python", "VB.NET"];
const labelsThird = ["MySQL", "MSSQL", "MongoDB", "PostgreSQL"];

function Skill() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const closeModal = () => setSelectedImage(null);

  return (
    <div className="container" id="skills">
      <div className="skills-container">
        <h1>Skills</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faLaptopCode} size="3x" />
            <h3>Frontend Development</h3>
            <p>
              Contributed to building web applications from the ground up,
              covering all Software Development Life Cycle phases. Proficient in
              frontend development, creating responsive, high-performance
              interfaces focused on usability.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faServer} size="3x" />
            <h3>Backend Development</h3>
            <p>
              Proficient in developing scalable backend systems, specializing in
              API and database management. Focused on performance optimization,
              secure authentication, and integrating third-party services to
              build efficient, high-performance applications.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faDatabase} size="3x" />
            <h3>Database</h3>
            <p>
              I have extensive experience in database design and management,
              with a focus on creating optimized schemas, enhancing query
              performance, and maintaining data integrity. Proficient in SQL and
              NoSQL systems to ensure robust and reliable database solutions.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsThird.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="certs-container">
        <h1>Certificates</h1>
        <p>
          So far, these are some of the certificates I have earned. They mainly
          consist of academic awards and recognitions, which were given to me
          during the Alliance of Computer Scientist (ACS) and Department of
          Computer Studies (DCS) Day events. These certificates serve as a
          reflection of my dedication and effort in the field of computer
          science. The recognition I have received through these awards has been
          both a source of pride and an ongoing motivation. Each award
          represents not just a personal achievement, but also a reminder to
          keep pushing forward and striving for excellence in my academic
          journey and future career ambitions.
        </p>
        <div className="certificates-grid">
          <div className="certificate-image">
            <img
              src={quizbee}
              alt="Quiz Bee Certificate"
              className="certificate-img"
              onClick={() => setSelectedImage(quizbee)}
            />
          </div>
          <div className="certificate-image">
            <img
              src={award}
              alt="Award Certificate"
              className="certificate-img"
              onClick={() => setSelectedImage(award)}
            />
          </div>
          <div className="centered-container">
            <p className="shimmer-text">
              Trainings that are related to my course are ongoing...
            </p>
          </div>
        </div>
      </div>

      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <img src={selectedImage} alt="Certificate" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Skill;
