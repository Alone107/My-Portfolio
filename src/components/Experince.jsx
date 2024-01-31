import html from "../assets/HTML5_Badge.png";
import css from "../assets/CSS3.png";
import javascript from "../assets/Javascript.png";
import react from "../assets/React.png";
import tailwind from "../assets/tailwind.png";
import git from "../assets/git.png";

export default function Experince() {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: react,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: git,
      title: "GitHub",
      style: "shadow-gray-400",
    },
  ];

  return (
    <section id="Experience" className=" w-full h-screen sm:mb-0 mb-5">
      <div className="max-w-screen-lg mx-auto flex flex-col p-4 text-white items-center lg:items-start">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Технологии
          </p>
          <p className="py-6">Технологии которые я использовал</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="html" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
