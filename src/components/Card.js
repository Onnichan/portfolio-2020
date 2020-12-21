
const Card = ({ image, title, description }) => {

  return (
    <div className="flex flex-col items-center justify-center shadow-lg bg-black p-4 hover:bg-red-500 transition-all duration-500">
      <img src={ image } className="w-12 h-12 " alt="skill image" />
      <p className="font-semibold text-base text-white">{ title }</p>
    </div>
  )
}

export default Card;