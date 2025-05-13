import React from "react";
import "../assets/styles/Challenge.scss";

const challenges = [
  {
    frontEmoji:
      "https://em-content.zobj.net/source/apple/419/woman-facepalming_1f926-200d-2640-fe0f.png",
    backEmoji:
      "https://em-content.zobj.net/source/apple/419/woman-tipping-hand_1f481-200d-2640-fe0f.png",
    front:
      "There was a time when I found myself overwhelmed by trying to balance personal responsibilities and social commitments. I thought I could manage everything, but the constant pressure gradually took a toll on my mental well-being. I felt emotionally exhausted and detached from myself, unsure of how to cope with it all. The more I tried to push through, the more I found myself struggling. I began to feel that I was losing grip on everything, and each day felt like a never-ending struggle.",
    back: "I have come to realize that recognizing my limits and giving myself permission to rest and recharge is essential. Prioritizing mental health and self-care is not selfish, it is necessary for personal growth and overall well-being. Reaching out for support, such as by talking to a trusted friend, became crucial for maintaining balance in my life. This experience taught me that mental health is just as important as physical health, and setting boundaries is necessary for lasting happiness.",
  },
  {
    frontEmoji: "https://em-content.zobj.net/source/apple/354/books_1f4da.png",
    backEmoji: "https://em-content.zobj.net/source/apple/419/ok-hand_1f44c.png",
    front:
      "I encountered a particularly tough subject which is Linear Algebra. No matter how much I studied or how many different methods I tried, I just could not grasp the concepts as easily as my peers. It left me feeling frustrated and discouraged, especially during exams when the material seemed too complex to understand, leaving me unsure of how to approach problems. My lack of progress made me doubt my ability to succeed in the course, creating a constant sense of pressure.",
    back: "I realized that struggling with a subject does not mean I am incapable, and that asking for help is perfectly okay. I reached out to friends and joined study groups, which gave me the chance to see the material from different perspectives. This experience taught me the importance of perseverance and staying determined, even when things feel tough. I learned that sometimes the key to overcome academic challenges is finding new ways to learn and accepting that mastery takes time and consistent effort.",
  },
  {
    frontEmoji:
      "https://em-content.zobj.net/source/apple/354/thought-balloon_1f4ad.png",
    backEmoji:
      "https://em-content.zobj.net/source/apple/419/heart-on-fire_2764-fe0f-200d-1f525.png",
    front:
      "Growing up in a family with high expectations for academic and professional success, I often felt the pressure to live up to standards that were set for me. While I wanted to make my family proud, I also longed to find my own path and identity. The constant tension between meeting their expectations and pursuing my own desires created a deep internal conflict that was hard to resolve. At times, I wondered if I could ever break free from their expectations and discover my true self.",
    back: "I came to realize that while respecting my family's values is important, I also needed to pursue my own dreams and desires. I learned that it is possible to maintain strong relationships with loved ones while still setting boundaries to protect my own path. This experience taught me the value of self-advocacy and the importance of being true to myself, even if it meant letting others down. I realized that living authentically is the most fulfilling path, and I am the one who must live with my choices.",
  },
  {
    frontEmoji:
      "https://em-content.zobj.net/source/apple/354/flexed-biceps_1f4aa.png",
    backEmoji:
      "https://em-content.zobj.net/source/apple/419/heart-hands_1faf6.png",
    front:
      "For years, I struggled with body image issues, constantly comparing myself to the unrealistic standards of beauty set by society. No matter how much I ate, I still looked thin. I constantly sought validation from others, hoping to feel accepted, but it only deepened my insecurity. This led to a deep sense of low self-esteem and a lack of confidence, making it difficult to fully engage in social and other aspects of my life. It made it hard for me to embrace myself and enjoy life without comparison.",
    back: "The journey to self-acceptance took time, but it helped me understand that true beauty comes from within. I realized that caring for my body and mental well-being is more important than meeting unrealistic expectations set by others. Over time, I came to see that my worth is not based on how I look, and that embracing who I am is far more meaningful than trying to become someone I am not. This experience taught me to be more patient with myself and to make self-love a consistent part of my life.",
  },
  {
    frontEmoji:
      "https://em-content.zobj.net/source/apple/419/hourglass-not-done_23f3.png",
    backEmoji:
      "https://em-content.zobj.net/source/apple/419/loudspeaker_1f4e2.png",
    front:
      "During my senior year, I found myself with multiple assignments and deadlines all coming up at the same time. I had underestimated the workload, and the pressure of completing everything on time became overwhelming. The sheer volume of work felt like it was too much to handle at once. I started to panic, not knowing how to handle everything, and the fear of falling behind took over. The pressure was constant, and it felt like there was no way to escape the chaos.",
    back: 'I came to understand how crucial time management is, especially when breaking large tasks into smaller, manageable steps. Prioritizing what needed to be done and setting achievable goals helped me avoid feeling overwhelmed. I also learned the power of discipline and the importance of saying "no" to distractions, which allowed me to stay focused and deliver quality work, even under pressure. This experience taught me to value planning ahead and staying organized as key elements for success.',
  },
  {
    frontEmoji:
      "https://em-content.zobj.net/source/apple/419/dollar-banknote_1f4b5.png",
    backEmoji: "https://em-content.zobj.net/source/apple/419/sparkles_2728.png",
    front:
      "As a college student, I quickly realized how challenging it could be to balance finances. Transportation, occasional expenses, food, and social activities all added up, and I found myself struggling to manage my budget. I had to figure out how to make my money last throughout the semester. Balancing necessities with my desires became a constant struggle, and the worry about money made it hard to enjoy life. I felt drained, constantly on edge, and as if I were just surviving—not truly living.",
    back: "I learned the importance of budgeting and living within my means. I began tracking my expenses, cutting back on non-essential purchases, and and looking for ways to save. This experience taught me financial responsibility and the importance of prioritizing needs over wants. More importantly, I discovered the value of living frugally, and the skills I gained in managing my finances were beneficial not just in college, but in life afterward. It showed me that financial discipline brings freedom and less stress.",
  },
  {
    frontEmoji:
      "https://em-content.zobj.net/source/apple/354/thinking-face_1f914.png",
    backEmoji:
      "https://em-content.zobj.net/source/apple/419/partying-face_1f973.png",
    front:
      "Throughout my life, especially in academic setting, I often struggled with self-doubt and imposter syndrome. When people praised me or my work, it felt like I was tricking them into thinking I was good at what I did. Despite my achievements, I could not shake the feeling that I did not truly deserve them. I constantly worried that others would eventually see through the facade I had built and realize I was not as skilled or capable as they believed. It made me feel disconnected, like it could all fall apart.",
    back: "Over time, I realized that imposter syndrome is common, especially for those striving for excellence. Understanding I was not alone helped me confront my doubts. I learned that growth often involves uncertainty, and that my accomplishments were the result of hard work, not luck. I began to accept that mistakes are a natural part of the journey, and they do not erase the progress I have made. This mindset made me embrace my abilities and pursue my goals without constantly questioning my worth.",
  },
  {
    frontEmoji:
      "https://em-content.zobj.net/source/apple/354/input-numbers_1f522.png",
    backEmoji:
      "https://em-content.zobj.net/source/apple/419/check-mark-button_2705.png",
    front:
      "I once received a grade much lower than I had anticipated, and it really shook my confidence. Despite putting in hours of hard work, the result felt like a harsh reminder of my limitations. I found myself questioning my abilities, feeling as though I had let down both myself and those around me. The weight of disappointment lingered, and I found it hard to shake off the feeling of failure. I could not help but wonder if all my efforts were in vain, and whether I would ever be able to meet my own expectations again.",
    back: "This experience taught me that grades do not determine my worth or abilities. I learned to handle disappointment and view it as a chance to grow. I took the time to reflect on where I went wrong, sought feedback, and made adjustments for the next challenge. I also came to understand that failure is an inevitable part of learning, and what truly matters is how I handle it and use it to improve moving forward. With the right mindset, challenges help me grow stronger—setbacks are temporary.",
  },
  {
    frontEmoji:
      "https://em-content.zobj.net/source/apple/354/question-mark_2753.png",
    backEmoji:
      "https://em-content.zobj.net/source/apple/419/hundred-points_1f4af.png",
    front:
      "As I approach the end of my college years, I find myself unsure about which career path I want to take. The pressure to have everything figured out—knowing exactly what I want to do and securing a job right after graduation has been overwhelming. I am still uncertain or not confident about my skills, my passions, and what career would be the right fit. Even now, I still question what my next steps should be. The uncertainty is scary, and I doubt whether I am truly ready for the challenges ahead.",
    back: "I came to understand that it is okay not to have everything figured out by graduation. I realized that many of my peers were facing similar uncertainties about their futures, and that it is simply part of the journey. This experience taught me that career paths are not always linear and that being open to change is essential. I learned that figuring out what I really want in a career takes patience and self-reflection, and that embracing new opportunities will guide me in the right direction.",
  },
  {
    frontEmoji:
      "https://em-content.zobj.net/source/apple/419/pouting-cat_1f63e.png",
    backEmoji:
      "https://em-content.zobj.net/source/apple/419/grinning-cat_1f63a.png",
    front:
      "There was a group project, and I had to work with team members who did not take their responsibilities seriously. I ended up doing their assigned tasks to make sure we passed. The unequal distribution of work left me feeling frustrated and taken advantage of, as I found myself carrying most of the responsibility. Although I wanted to address the issue without disrupting the group's structure, I struggled with the urge to speak up, fearing it would cause tension within the team.",
    back: "From that, I learned the importance of communication and speaking up early. I also realized that while teamwork can be frustrating, it is also an opportunity to practice leadership and patience. I cannot control others' efforts, but I can control how I respond and protect my own integrity. This taught me that setting clear expectations from the start can prevent misunderstandings later on. I am now more mindful of addressing imbalances while advocating for myself without creating conflict.",
  },
  {
    frontEmoji:
      "https://em-content.zobj.net/source/apple/419/broken-heart_1f494.png",
    backEmoji:
      "https://em-content.zobj.net/source/apple/419/kiss-mark_1f48b.png",
    front:
      "When someone I trusted let me down, it was one of the most painful experiences I had ever faced. The hardest part was accepting that even people I cared for deeply could hurt me, and it left me questioning what went wrong. I felt betrayed and confused, unsure of how to move forward or trust anyone again. It made me build walls and distance myself from others for a while. It made it difficult for me to form deep connections because I struggled with second-guessing people's intentions.",
    back: "With time, I learned that not everyone will meet your expectations, and that is part of being human. Forgiveness does not mean forgetting, but it frees you from the burden of resentment. Trust can be rebuilt slowly, and every heartbreak teaches you how to choose relationships more wisely. I also realized that healing takes patience, and it is okay to take small steps toward trusting again. Not all lessons are easy, but they shape you into someone stronger. Growth comes from facing pain, not avoiding it.",
  },
  {
    frontEmoji:
      "https://em-content.zobj.net/source/apple/419/stop-sign_1f6d1.png",
    backEmoji:
      "https://em-content.zobj.net/source/apple/419/glowing-star_1f31f.png",
    front:
      "There was a time when I always feared making mistakes in front of others. Whether it was speaking in class, sharing an idea, or trying something new, I was always afraid of being judged or laughed at. This fear kept me silent and stuck, even when I had something valuable to offer. It held me back, making me overthink every decision and action. I would often avoid opportunities, not because I did not want them, but because the thought of making mistakes in front of others felt devastating.",
    back: "I realized that perfection is an illusion, and everyone makes mistakes. The fear of judgment often exists more in our minds than in reality. When I started allowing myself to be imperfect, I discovered that growth comes from trying even if I stumble. People respect courage far more than flawlessness. I began to see that mistakes are not setbacks but lessons that guide me forward. The more I embraced my flaws, the more I felt free to take risks and explore new opportunities. It is the courage to try despite failure.",
  },
];

function Challenge() {
  return (
    <div className="container" id="challenges">
      <div className="challenge-container">
        <h1>Challenges & Learnings</h1>
        <p>
          Throughout my life, both personal and academic challenges have shaped
          who I am. Each setback has offered new lessons, pushing me to grow,
          think creatively, and adapt under pressure. Whether managing
          unexpected changes or complex responsibilities, I have learned to
          approach every situation with resilience and a mindset focused on
          growth. What follows reflects not just what I have learned, but the
          strength that drives my continued progress.
        </p>

        <div className="cards-grid">
          {challenges.map((item, index) => (
            <div className="flip-card" key={index}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img className="emoji" src={item.frontEmoji} alt="emoji" />
                  <p>{item.front}</p>
                </div>
                <div className="flip-card-back">
                  <img className="emoji" src={item.backEmoji} alt="emoji" />
                  <p>{item.back}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Challenge;
