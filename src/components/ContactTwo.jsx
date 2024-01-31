import React from "react";
import { useRef } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaTelegram, FaWhatsapp } from "react-icons/fa";
import emailjs from "emailjs-com";

const ContactTwo = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_06xt6lw",
      "template_evfot8u",
      form.current,
      "2T_3ce_CTc7gbI6v0"
    );

    e.target.reset();
  };

  return (
    <section
      id="Contact"
      className=" text-white flex flex-col justify-center sm:items-center px-4 w-auto lg:w-full pb-10"
    >
      <div className="pb-10">
        <h5 className="text-4xl pb-2 text-center ">Связаться со мной</h5>
        <h2 className="text-2xl pb-4 text-center">Мои контакты </h2>
      </div>

      <div className="flex flex-col lg: lg:flex-row lg:gap-5 max-w-screen-sm lg:max-w-6xl lg:w-full lg:justify-between">
        <div className="flex flex-col lg:flex-col sm:flex-row gap-1 sm:gap-6">
          <article className="flex flex-col items-center bg-gradient-to-r shadow-md hover:scale-105 duration-500 py-2 shadow-yellow-400  p-2 rounded-2xl sm:w-3/4 lg:w-full mb-8">
            <MdOutlineEmail size={40} />
            <h4>Email</h4>
            <h5>AloneOmen@yandex.ru</h5>
            <a
              href="mailto:AloneOmen@yandex.ru"
              target="_blank"
              className="text-zinc-400 hover:duration-300 hover:text-zinc-600 "
            >
              Отправить письмо
            </a>
          </article>
          <article className="flex flex-col items-center bg-gradient-to-r p-2 rounded-2xl sm:w-3/4 lg:w-full mb-8 shadow-md hover:scale-105 duration-500 py-2 shadow-sky-400">
            <FaTelegram size={40} />
            <h4>Telegram</h4>
            <h5>@AloneLevel</h5>
            <a
              href="https://t.me/AloneLevel"
              target="_blank"
              className="text-zinc-400 hover:duration-300 hover:text-zinc-600 text-center "
            >
              Отправить сообщение
            </a>
          </article>
          <article className="flex flex-col items-center bg-gradient-to-r  p-2 rounded-2xl sm:w-3/4 lg:w-full mb-8 lg:mb-0 shadow-md hover:scale-105 duration-500 py-2 shadow-green-400">
            <FaWhatsapp size={40} />
            <h4>Telephone</h4>
            <h5>+7-966-701-35-40</h5>
            <a
              href="tel:+79667013540"
              target="_blank"
              className="text-zinc-400 hover:duration-300 hover:text-zinc-600 "
            >
              Позвонить
            </a>
          </article>
        </div>
        <form
          ref={form}
          className="flex flex-col items-center gap-4 p-4 rounded-2xl lg:w-9/12 shadow-md hover:scale-105 duration-500 py-2 shadow-blue-600"
          onSubmit={sendEmail}
        >
          <div className="text-2xl text-center pb- flex gap-4 items-center">
            Связаться с вами <MdOutlineEmail size={35} />
          </div>
          <input
            className="p-2 rounded-lg text-black pr-4 w-full max-w-96"
            type="text"
            name="name"
            placeholder="Введите имя"
            required
          />
          <input
            className="p-2 rounded-lg text-black pr-4 w-full max-w-96"
            type="tel"
            name="telephone"
            placeholder="Введите телефон"
            required
          />
          <textarea
            className="p-2 rounded-lg text-black pr-4 w-full max-w-96"
            name="message"
            rows="7"
            placeholder="Введите дополнительную информацию или дополнительный способ связи"
          ></textarea>
          <button
            type="submit"
            className=" hover:scale-110 hover:bg-slate-300 duration-500 py-2 px-4 w-40 bg-slate-400 rounded-3xl"
          >
            Отправить
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactTwo;
