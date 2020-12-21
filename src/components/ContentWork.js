import clinica from '../images/projects/Captura.PNG';
import giftApp from '../images/projects/GiftExpert.PNG';
import portfolio from '../images/projects/portfolio.PNG';

const ContentWork = () => {

  return (
    <div className=" bg-black py-12">
      <span className="text-white text-center w-20 mb-12 bg-red-300 m-auto block">My works</span>
      <div className="lg:px-32 md:px-12 px-6 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-8">
        <div className="col-span-full text-white text-center ">Proyectos para clientes</div>
        <div className="relative md:col-span-full md:w-1/2 md:m-auto z-0">
          <img className="lg:w-full hover:opacity-50 cursor-pointer transition-all duration-700" src={clinica} alt="clinica image"/>
          <div className="absolute z-10 inset-x-0 bottom-4 w-1/2 h-8 m-auto flex justify-center items-center">
            <a href="http://apclinica.ml/login" className="w-48 text-white bg-black bg-opacity-60 border-2 border-gray-700 rounded-full text-center leading-8 hover:bg-opacity-100 transition-all duration-700" target="_blank">ver web</a>
            <a href="http://apclinica.ml/login" className="w-48 text-white bg-black bg-opacity-60 border-2 border-gray-700 rounded-full text-center leading-8" target="_blank">Repositorio</a>
          </div>
        </div>
        <div className="col-span-full text-white text-center">Proyectos propios</div>
        <div className="relative md:col-span-full md:w-1/2 md:m-auto">
          <img className="lg:w-full hover:opacity-50 cursor-pointer transition-all duration-700" src={portfolio} alt="portfolio image"/>
          <a href="http://apclinica.ml/login" target="_blank">Ir a web</a>
          <a href="http://apclinica.ml/login" target="_blank">Ver repositorio</a>
        </div>
        <div className="col-span-full text-white text-center">Proyectos de cursos realizados</div>
        <div className="relative">
          <img className="lg:w-full hover:opacity-50 cursor-pointer transition-all duration-700" src={giftApp} alt="giftApp image"/>
          <a href="http://apclinica.ml/login" target="_blank">Ir a web</a>
          <a href="http://apclinica.ml/login" target="_blank">Ver repositorio</a>
        </div>
      </div>
    </div>
  )
}

export default ContentWork;