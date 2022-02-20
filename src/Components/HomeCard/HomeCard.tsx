interface Props {
  id: string,
  addToList: ((listName: string, id: string) => void),
  name: string,
  rating: number,
  image: string,
  location: string[],
  phone: string,
  url: string
}

const displayAddress = (address: string[]) => {
  return address.map(element => 
    <p>{element}</p>
  )
}

const HomeCard: React.FC<Props> = (props: Props) => {
  return (
    <div className="home-card">
      <img src={props.image} />
      <div>
        <h3 className="name">{props.name}</h3>
        <p className="rating">Rating: {props.rating}</p>
        <p className='phone'>{props.phone}</p>
        <div className='address'>
          {displayAddress(props.location)}
        </div>
        <p>{props.url}</p>
      </div>
      <div>
        <button 
          id={props.id}
          onClick={(event) => 
          props.addToList("gottaGo", props.id)}>Gotta Go!</button>
        <button
        id={props.id}
        onClick={(event) => 
        props.addToList("lovedIt", props.id)}>Loved It!</button>
      </div>
    </div>
  )
}

export default HomeCard;