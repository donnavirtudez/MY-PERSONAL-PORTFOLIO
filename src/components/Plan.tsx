import React from "react";

import "../assets/styles/Plan.scss";

function Plan() {
  const plans = [
    {
      id: 1,
      image:
        "https://i.pinimg.com/736x/0f/3e/cf/0f3ecfbfe3cb2964170bf39f64838ca0.jpg",
      description:
        "Graduate from college to make myself proud and honor my parents' hard work and sacrifices, to show them that their efforts were not in vain.",
    },
    {
      id: 2,
      image:
        "https://i.pinimg.com/736x/54/53/79/545379b03aec992eb41dd9ba759a01b7.jpg",
      description:
        "Find a job that aligns with my degree, ideally in a work-from-home setup, so I have the flexibility to attend to other commitments when needed.",
    },
    {
      id: 3,
      image:
        "https://i.pinimg.com/736x/d4/3c/9d/d43c9d3be2c5353d4d5e78e003367cbf.jpg",
      description:
        "Focus on improving my skills through study and practice to unlock better opportunities and achieve a higher income.",
    },
    {
      id: 4,
      image:
        "https://i.pinimg.com/736x/44/f7/e4/44f7e452c60d0e3a71c1967f390216f2.jpg",
      description:
        "Once financially stable and still able to handle academic challenges, I will pursue medicine to achieve my dream of becoming a doctor.",
    },
    {
      id: 5,
      image:
        "https://i.pinimg.com/736x/a6/64/34/a66434f2041a9db16fe081c4da8543af.jpg",
      description:
        "Travel a lot and visit places I have never been to before, not just to see the world, but to grow, learn, and find inspiration in every new experience.",
    },
    {
      id: 6,
      image:
        "https://i.pinimg.com/736x/57/7a/ba/577aba45e0776cd6d51e2790d6084841.jpg",
      description:
        "Spend quality time with friends I cherish the most, creating lasting memories, and enjoying each other's company through life's ups and downs.",
    },
    {
      id: 7,
      image:
        "https://i.pinimg.com/736x/4c/50/dc/4c50dc525357cc91a09e3d14209455a5.jpg",
      description:
        "Exercise regularly to maintain my fitness and well-being, boost my energy, and keep both my body and mind strong.",
    },
    {
      id: 8,
      image:
        "https://i.pinimg.com/736x/7a/5a/60/7a5a601808082d22560825fdfb94dfda.jpg",
      description:
        "Provide my family with a home we can truly call our own, a place where we can create a sense of belonging and share moments of joy and warmth.",
    },
    {
      id: 9,
      image:
        "https://i.pinimg.com/736x/ff/74/c8/ff74c8942404966ddeb60a34f5e770cb.jpg",
      description:
        "Raise a cat and treat it like my own child, giving it all the love, care, and comfort it needs to feel like a true member of the family.",
    },
    {
      id: 10,
      image:
        "https://i.pinimg.com/736x/2f/6f/d5/2f6fd5a89ab3827fbe47bddd11f6faa5.jpg",
      description:
        "Learn to play the guitar, master different chords and techniques, and eventually perform my favorite songs with confidence.",
    },
    {
      id: 11,
      image:
        "https://i.pinimg.com/736x/13/5c/bb/135cbb955f18115da101dab54347e2fe.jpg",
      description:
        "Attend concerts of my favorite bands or artists, immerse myself in their music, and enjoy the unforgettable experience of live performances.",
    },
    {
      id: 12,
      image:
        "https://i.pinimg.com/736x/0c/b5/f6/0cb5f615793a557bb4b8e41d4472d786.jpg",
      description:
        "See BLACKPINK in person, experience their incredible performance live, and have the chance to be in the same space as my idols.",
    },
  ];

  return (
    <div className="container" id="plans">
      <div className="plan-container">
        <h1>Future Plans</h1>
        <p>
          In the coming years, I plan to focus on setting meaningful goals that
          align with my values and passions. Whether through further education,
          travel, or new creative pursuits, I want to explore opportunities that
          allow me to grow and gain new perspectives. I am committed to staying
          curious, embracing change, and pushing myself outside of my comfort
          zone. Ultimately, I hope to build a balanced and fulfilling life while
          making a positive impact on the people and communities around me.
        </p>
        <div className="card-grid">
          {plans.map((plan) => (
            <div key={plan.id} className="card">
              <img
                src={plan.image}
                alt={`Plan ${plan.id}`}
                className="card-image"
              />
              <div className="card-description">
                <p>{plan.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Plan;
