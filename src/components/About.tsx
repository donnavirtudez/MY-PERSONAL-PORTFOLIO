import React, { useState } from "react";
import octet from "../assets/images/octet.png";
import masters from "../assets/images/masters.png";
import bff from "../assets/images/bff.png";
import bff2 from "../assets/images/bff2.png";
import cts from "../assets/images/CTS.png";
import raze from "../assets/images/raze.png";
import Z from "../assets/images/Z.png";
import acadbuddies from "../assets/images/acadbuddies.png";
import nomnom from "../assets/images/nomnom.png";
import ml from "../assets/images/mamalola.jpg";
import sxc from "../assets/images/sxc.png";
import pau from "../assets/images/baby-me.jpg";
import me from "../assets/images/me.png";
import CS23 from "../assets/images/CS23.jpg";
import QUINTECH from "../assets/images/QUINTECH.png";
import RHINES from "../assets/images/RHINES.png";
import "../assets/styles/About.scss";

function About() {
  const galleryImages: string[] = [
    bff,
    cts,
    masters,
    nomnom,
    bff2,
    Z,
    raze,
    acadbuddies,
    octet,
    QUINTECH,
    RHINES,
    CS23,
  ];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="container" id="about">
      <div className="about-container">
        <h1>About Me</h1>
        <p>
          Hi! I am Donna Virtudez, a third-year Computer Science student at
          Cavite State University – Bacoor Campus. I have a strong passion for
          web development and I am excited to continue building my skills in
          this field. Throughout my studies, I have gained hands-on experience
          working with various programming languages and frameworks, and I have
          had the opportunity to collaborate on several group projects with my
          classmates, which has strengthened my teamwork and problem-solving
          abilities. As I continue my journey in Computer Science, I am eager to
          expand my knowledge and gain practical experience through internships
          or personal projects. I am always looking for ways to challenge myself
          and grow as a developer. When I am not coding, I enjoy watching
          movies, playing online games with friends, and occasionally reading
          books. These hobbies help me unwind and stay creative. I am always
          open to connecting with like-minded individuals, whether for
          collaboration, learning, or sharing knowledge.
        </p>
        <h1>Who I really am?</h1>
        <p>
          People who do not really know me or are not close to me often see me
          as a serious and purely academic type of person. But in reality, I am
          not like that. When I have free time, I hang out with my friends just
          like anyone else. I am actually easy to get along with. However, I
          tend to be selective about who I truly let into my life because I
          value quality over quantity. I want the people around me to have a
          positive influence on me, as I believe the people you surround
          yourself with can greatly impact your personal development and growth.
          That is why the people in the photos below are the ones I consider
          truly close to me. Some of them have been my friends since high
          school, and their drive and positivity inspire me every day. They
          motivate me to keep pushing forward and not settle for less, because I
          see them striving for their own goals too. Being around them brings
          out the best in me.
        </p>
        <div className="gallery-grid">
          {galleryImages.map((src, index) => (
            <img
              key={index}
              src={src}
              className="zoom"
              alt={`Gallery ${index + 1}`}
              onClick={() => setSelectedImage(src)}
            />
          ))}
        </div>

        {selectedImage && (
          <div className="image-overlay" onClick={() => setSelectedImage(null)}>
            <img
              src={selectedImage}
              className="centered-image"
              alt="Enlarged"
            />
          </div>
        )}
      </div>

      <div className="family-container">
        <h1>My Family</h1>
        <div className="image-text-group">
          <div className="image-wrapper1">
            <img
              src={pau}
              alt="with Papa"
              className="zoom image1"
              onClick={() => setSelectedImage(pau)}
            />
            <img
              src={me}
              alt="cutiepie"
              className="zoom image2"
              onClick={() => setSelectedImage(me)}
            />
          </div>
          <div className="text-content1">
            <p>
              People usually think I am the youngest in the family, but
              actually, I am the eldest of five siblings. We live a simple life.
              My father is the only one who works, and my mother's side of the
              family is very religious. Because of that, I have developed the
              habit of doing the sign of the cross whenever I pass by a church
              or when I feel really nervous. I am closer to my cousins on my
              mother's side since we all live in the same area and often
              celebrate special occasions together.
            </p>
          </div>
        </div>

        <div className="image-text-group">
          <div className="image-wrapper2">
            <img
              src={sxc}
              alt="Siblings-Cousin"
              className="zoom image3"
              onClick={() => setSelectedImage(sxc)}
            />
            <img
              src={ml}
              alt="Mama-Lola"
              className="zoom image4"
              onClick={() => setSelectedImage(ml)}
            />
          </div>
          <div className="text-content2">
            <p>
              My favorite person in the world is my grandma. I am definitely a
              Lola's girl. Whenever she asks me for something, I give in easily.
              Even though I am not the most openly affectionate person in the
              family, it does not mean I love them any less. They are my biggest
              source of strength. They keep me going, especially when I feel
              drained or worn out. Honestly, they are the reason why I am still
              holding on to things I probably should have let go a long time
              ago.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
