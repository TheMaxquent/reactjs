import React from 'react';
import Data from "../data/data_athletes.json"

const WidgetAthlete = () => {

    const data = Data.slice(900);



    return (
        <div className="widgetAthlete">
            <h3>LES ATHLÈTES</h3>
            {data.map(athlete => (
                <div className="card">
                    <img src={athlete.image} alt="img athlete" />
                    <h4>{athlete.first_name} {athlete.last_name}</h4>
                    <p>{athlete.birth}</p>
                    <p>{athlete.gender}</p>
                    <p>Gold medal: {athlete.gender}</p>
                    <p>Silver medal: {athlete.gender}</p>
                    <p>Copper medal: {athlete.copper_medal}</p>
                    <p>Copper medal: {athlete.copper_medal}</p>
                    <p>Discipline: {athlete.discipline}</p>
                    <p>Taille: {athlete.height}</p>
                    <p>Poid: {athlete.weight}</p>
                    <span className="nationality">
                    <p>Nationalité: {athlete.copper_medal}</p>
                    <img alt="image pays" className="imgpays" src={"https://countryflagsapi.com/svg/" + athlete.nationality}/>
                    </span>


                </div>
                )
            )}
        </div>
    );
};

export default WidgetAthlete;