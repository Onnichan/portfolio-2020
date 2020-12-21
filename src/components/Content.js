
import gif from "../images/tenor.gif";
import gif2 from "../images/alert.gif";

const Content = () => {

  return (
    <section className="flex flex-row items-center content-90 lg:overflow-hidden sm:overflow-auto bg-gray-50">
      <div className="xl:w-2/4 md:w-2/4 sm:w-3/4 xl:pl-32 md:pl-12 pl-6 py-40 ">
        <h3 className="text-black font-bold text-4xl inline">FRONTEND DEVELOPER</h3>
        <h1 className="pb-12 font-bold text-red-500">WALTER DANIEL HUAYNAPATA AGUILAR</h1>
        <p className="text-base text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 content-p">Hola, soy un desarrollador frontend y actualmente resido en Perú, Tacna me apasiona la tecnologia y el diseño es lo que mas me atrae y encanta. Actualmente estoy aprendiendo tecnologias de frontend para pulir mis skills y ser mas versátil. Te invito a que te quedes un poco mas en ver mi trabajo. </p>
        <div className="pt-12">
          <span className="font-mono text-xl">Follow me</span>
          <div>
          <a href="https://github.com/Onnichan" target="_blank" rel="noreferrer"><i className="fab fa-github mr-4 text-4xl "></i></a>
          <a href="https://github.com/Onnichan" target="_blank" rel="noreferrer"><i className="fas fa-envelope mr-4 text-4xl " rel="noreferrer"></i></a>
          <a href="https://www.linkedin.com/in/walter-daniel-huaynapata-aguilar-391041197" target="_blank" rel="noreferrer"><i className="fab fa-linkedin text-4xl"></i></a>
          </div>
        </div>
      </div>
      <div className="xl:w-2/4 md:w-2/4 sm:w-1/4 sm:hidden hidden md:block bg-image h-full shadow-xl">
        <img className="text-white w-3/4 h-3/4" src={gif2} alt="Imagen de programación"/>
      </div>
    </section>
  )
}

export default Content;