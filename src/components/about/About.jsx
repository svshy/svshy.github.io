import React from "react";
import "./about.css";
import Image from "../../assets/me.png";
import PdfCv from "../../private_files/CV_Dominik_Such.pdf";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">O mnie</h2>
      <div className="about__container grid">
        <img src={Image} alt="Dominik Such" className="about__img" />
        <div className="about__data">
          <div className="about__info">
            <p className="about__description">
              Obecnie pełnię rolę testera automatyzującego w Empik Group.
              Specjalizuję się w tworzeniu testów E2E wykorzystujących
              JavaScript, TypeScript, Playwright i Cypress, a także w testowaniu
              API oraz wsparciu zespołów front‑endowych, szczególnie w zakresie
              React (TS).
            </p>

            <p className="about__description">
              Nieustannie rozwijam się w obszarze testów automatycznych, a
              dodatkowo poznaję technologie frontendowe – React – oraz
              backendowe – Node.js. Pozwala mi to lepiej wychwytywać i naprawiać
              potencjalne błędy od strony kodu źródłowego, a w przyszłości także
              po stronie backendu w projektach opartych o Node.js.
            </p>

            <p className="about__description">
              Wiedza z zakresu React umożliwia mi również aktywny udział w
              procesie tworzenia warstwy wizualnej aplikacji w przerwach między
              testowaniem. Dzięki temu mogę łączyć umiejętności testerskie z
              praktyczną wiedzą programistyczną, wspierając zespół w różnych
              etapach realizacji projektu.
            </p>

            <a href={PdfCv} className="btn" download="CV_Dominik_Such.pdf">
              Pobierz CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
