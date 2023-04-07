import done from './done.png';

function MyRecipesComponent({label, image, calories, ingredients, dietLabels}) {
    return(<div>
    <div className="container">
        <div className='list'>
        <h2>{label}</h2>
        <h3>{dietLabels[0]}</h3>
        <h3>{dietLabels[1]}</h3>
        </div>
    </div>

    <div className="container">
        <img src={image} alt="foto"/>
    </div>

    <ul className="list">
        {ingredients.map(element => (
            <li key={element} className="item"><img src={done} alt='done'/> {element}</li>
        ))}
    </ul>


    <div className="container">
        <p className="par">{calories.toFixed()} calories</p>
    </div>

    </div>)
}

export default MyRecipesComponent;