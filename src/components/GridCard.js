import Card from './Card';


const GridCard = ({ softSkills }) => {

  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-2 m-10 z-10">
      {
        softSkills.map( skill => {
          return <Card key={ skill.title } {...skill} />
        })
      }
    </div>
  )
}

export default GridCard;