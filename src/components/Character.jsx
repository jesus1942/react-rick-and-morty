// import Character from './components/Character';

function Character({ character }) {
    
    return (
          // eslint-disable-next-line react/jsx-key
        <div className="text-center p-5">
            <h3>{character.name}</h3>
            <img className="img-fluid rounded-pill" src={character.image} alt={character.name} />
            <p>{character.origin.name}</p>
        </div>
    );
    
}

export default Character;