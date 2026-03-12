import React from "react";
import "./about.css";
import Image from "../../assets/me.png";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">O mnie</h2>
      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />
        <div className="about__data">
          <div className="about__info">
            <p className="about__description">
              Tester oprogramowania z ponad 4-letnim doświadczeniem w testowaniu
              aplikacji webowych. Specjalizuję się w automatyzacji testów
              end-to-end z wykorzystaniem Playwright oraz TypeScript.
            </p>

            <p className="about__description">
              Posiadam doświadczenie w projektowaniu scenariuszy testowych,
              testowaniu API (Postman), integracji testów z pipeline CI/CD oraz
              analizie przyczyn błędów. Posiadam również podstawową znajomość
              testowania wydajności aplikacji webowych w k6.
            </p>

            <p className="about__description">
              Dzięki doświadczeniu frontendowemu (React) łatwiej diagnozuję
              problemy aplikacji i efektywnie współpracuję z zespołem
              developerskim przy poprawie jakości oprogramowania.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
