import react from "../assets/React.png";
import flexi from "../assets/Portfolios/flexiHtml.png";
import acc from "../assets/Portfolios/acc.png";
import cookies from "../assets/Portfolios/Cookies.png";
import finset from "../assets/Portfolios/finset.png";
import step from "../assets/Portfolios/StepByStep.png";
import keyboard from "../assets/Portfolios/keyboard.png";
import hangman from "../assets/Portfolios/hangman.png";
import music from "../assets/Portfolios/music.png";

export default function Portfolio() {
  const Portfolio = [
    {
      id: 1,
      src: flexi,
      href: `https://alone107.github.io/flexi/`,
      title: "Flexi site (HTML, CSS, JS)",
    },
    {
      id: 2,
      src: acc,
      href: `https://alone107.github.io/Accouting-App/`,
      title: "Список расходов (React)",
    },
    {
      id: 3,
      src: cookies,
      href: `https://alone107.github.io/cookies/`,
      title: "Магазин Вкусностей (HTML, CSS, JS)",
    },
    {
      id: 4,
      src: finset,
      href: `https://alone107.github.io/finset12/`,
      title: "Многостраничный сайт (HTML, CSS)",
    },
    {
      id: 5,
      src: step,
      href: `https://alone107.github.io/todolist/`,
      title: "Список дел (JS)",
    },
    {
      id: 6,
      src: keyboard,
      href: `https://alone107.github.io/klava/`,
      title: "Клавиатура (JS)",
    },
    {
      id: 7,
      src: hangman,
      href: `https://alone107.github.io/Hangman-Game/`,
      title: "Игра Hangman (JS + Tailwind)",
    },
    {
      id: 8,
      src: music,
      href: `https://alone107.github.io/Music-React/`,
      title: "Music App (React)",
    },
  ];

  return (
    <section id="Portfolio" className="w-full h-full text-white mb-20">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center items-center lg:items-start w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Портфолио
          </p>
          <p className="py-6 ">Посмотрите мои остальные работы</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12 px-12 sm:px-0">
          {Portfolio.map(({ id, src, href, title }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <h3 className="text-center mt-4 mb-2 text-2xl h-1/5">{title}</h3>
              <img
                src={src}
                alt=""
                className="rounded-md duration-500 hover:scale-110  w-full p-2 h-3/5 object-contain"
              />
              <div className=" flex items-center justify-center border-t-2 border-gray-600">
                <button className="w-1/2 h-1/5 px-6 duration-200 hover:scale-105">
                  <a href={href}> Demo</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
