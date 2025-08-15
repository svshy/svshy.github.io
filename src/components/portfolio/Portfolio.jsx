import React from "react";
import "./portfolio.css";
import Bug1 from "../../assets/bug1.svg";
import Bug2 from "../../assets/bug2.svg";
import Web1 from "../../assets/web1.svg";
import PortfolioItem from "./PortfolioItem";

const portfolio = [
  {
    id: 1,
    image: Web1,
    title: `Strona "O mnie"`,
    description:
      "Strona napisana przy użyciu technologii React, JavaScript, CSS, HTML, aby wykorzystać teorię z obejrzanych kursów w praktyce. Do wysyłki emaili zastosowano rozwiązanie EmailJS",
    link: "https://github.com/svshy/portfolio_website",
  },
  {
    id: 2,
    image: Bug1,
    title: "Testy automatyczne - Cypress",
    description:
      "Projekt z testami automatycznymi w Cypress stworzonymi przeze mnie w ramach ćwiczeń na stronie Automation Exercise. Dodatkowo napisany pipeline, który pozwala uruchomić testy automatyczne i wygenerować raport z testów w HTML na Jenkinsie.",
    link: "https://github.com/svshy/Automation-exercise-e2e-cypress-tests",
  },
  {
    id: 3,
    image: Bug2,
    title: "Testy API Trello - Postman",
    description:
      "Kolekcja z zautomatyzowanymi testami wybranych metod z API Trello. W pliku Readme.md instrukcja uruchomienia testów w Postmanie oraz w konsoli za pośrednictwem Newmana, który przy użyciu odpowiedniej komendy generuje także raport w HTML.",
    link: "https://github.com/svshy/Trello-API-test",
  },
  {
    id: 4,
    image: Web1,
    title: "Aplikacja MERN do uwierzytelniania użytkowników",
    description:
      "Aplikacja umożliwia rejestrację oraz logowanie użytkownika, zarządza sesjami i wysyła powiadomienia e-mail przy użyciu zewnętrznego API. Całość została zbudowana w oparciu o technologie MERN: MongoDB, Express.js, React.js oraz Node.js.",
    link: "https://github.com/svshy/mern-auth-app",
  },
];

const Portfolio = () => {
  return (
    <section className="work container section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <div className="work__container grid">
        {portfolio.map((element) => {
          return (
            <PortfolioItem
              key={element.id}
              image={element.image}
              title={element.title}
              description={element.description}
              link={element.link}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
