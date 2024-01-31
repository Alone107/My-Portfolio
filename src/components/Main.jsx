import mainPhoto from "../assets/cat-good.jpg";
import "../App.css";

export default function Main() {
  return (
    <section className="flex flex-col lg:flex lg:flex-row justify-center items-center lg:justify-between w-full h-screen">
      <div className="flex flex-col lg:ml-56 justify-center items-center">
        <h1 className="text-2xl sm:text-4xl text-white animate-[wiggle_1s_ease-in-out_infinite]">
          <span className="text-violet-800">Привет!</span>  Меня зовут Вячеслав.
        </h1>
        <h3 className="texts text-center text-1xl sm:text-2xl text-white mt-3 animate-[wiggle_1s_ease-in-out_infinite]">
          
          Я Frontend-разработчик
        </h3>
      </div>
      <img
        className="rounded-3xl mt-6 lg:mt-0 w-80 lg:w-1/4 lg:h-2/4 lg:rounded-s-full"
        src={mainPhoto}
        alt="cat"
      />
    </section>
  );
}
