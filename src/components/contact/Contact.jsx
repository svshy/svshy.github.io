import React, { useRef, useState } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
import ContactImg from "../../assets/contact-img.svg";
import Modal from "./Modal";

const Contact = () => {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [modalToggle, setModalToggle] = useState(false);

  const showModalHandler = () => {
    setModalToggle(true);
  };

  const hideModalHandler = () => {
    if (loading === true) {
      return;
    }
    setModalToggle(false);
  };

  const [formInputs, setFormInputs] = useState({
    user_name: "",
    user_email: "",
    user_subject: "",
    user_message: "",
  });

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    const inputName = event.target.name;

    setFormInputs((prevState) => ({
      ...prevState,
      [inputName]: inputValue,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    showModalHandler();
    setLoading(true);

    emailjs
      .sendForm(
        "service_e80furr",
        "template_ht4vuan",
        form.current,
        "pECMVFE2AlapszwFa"
      )
      .then(
        (result) => {
          setLoading(false);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setFormInputs({
      user_name: "",
      user_email: "",
      user_subject: "",
      user_message: "",
    });
  };

  return (
    <>
      {modalToggle && <Modal onClose={hideModalHandler} loading={loading} />}
      <section className="contact container section" id="contact">
        <h2 className="section__title">Kontakt</h2>
        <div className="contact__container grid">
          <div className="contact__info">
            <img src={ContactImg} alt="" className="contact__img" />
          </div>
          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <div className="contact__form-group">
              <div className="contact__form-div">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Imię i nazwisko"
                  className="contact__form-input"
                  onChange={handleInputChange}
                  value={formInputs.user_name}
                  autoComplete="off"
                  required
                />
              </div>
              <div className="contact__form-div">
                <input
                  type="email"
                  name="user_email"
                  placeholder="Email"
                  className="contact__form-input"
                  onChange={handleInputChange}
                  value={formInputs.user_email}
                  autoComplete="off"
                  required
                />
              </div>
            </div>

            <div className="contact__form-div">
              <input
                type="text"
                name="user_subject"
                placeholder="Temat wiadomości"
                className="contact__form-input"
                onChange={handleInputChange}
                value={formInputs.user_subject}
                autoComplete="off"
                required
              />
            </div>
            <div className="contact__form-div contact__form-area">
              <textarea
                name="user_message"
                id=""
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Treść wiadomości..."
                onChange={handleInputChange}
                value={formInputs.user_message}
                autoComplete="off"
                required
              ></textarea>
            </div>
            <div className="contact__form-submit">
              <button type="submit" className="btn submit-btn">
                Wyślij wiadomość
                <i className="fa-solid fa-paper-plane"></i>
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
