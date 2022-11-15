import React, { useState, useEffect } from 'react';
import data_jo from '../data/data_athletes.json'

const QuizWidget = () => {
    const [isClick, setIsClick] = useState(false);
    const [isAnswer, setIsAnswer] = useState(false);
    const [profil, setProfil] = useState([]);
    const [quiz, setQuiz] = useState('');

    const returnDefault = () => {
        return (
            <>
                <div className="quiz" onClick={handleSubmit}>
                    Click to Open Quiz
                </div>
            </>
        );
    }

    const returnPerso = () => {
        return (
            <>
                <div className="quiz">
                    <div> { quiz } </div>
                    <div>
                        <ul>
                            <li> 
                                <img src={ profil[1].image } />
                                { profil[1].first_name } { profil[1].last_name }
                            </li>
                            <li> 
                                <img src={ profil[2].image } />
                                { profil[2].first_name } { profil[2].last_name }
                            </li>
                            <li> 
                                <img src={ profil[3].image } />
                                { profil[3].first_name } { profil[3].last_name }
                            </li>
                            <li> 
                                <img src={ profil[4].image } />
                                { profil[4].first_name } { profil[4].last_name }
                            </li>
                        </ul>
                    </div>
                </div>
            </>
        );
    }

    const getRandom = () => {
        let lengthData = Object.keys(data_jo).length;
        let arrayNum = [];
        arrayNum.push(Math.floor(Math.random() * 4) + 1);
        for (let n = 0; n<4; n++){
            arrayNum.push(Math.floor(Math.random() * lengthData));
        }
        getProfil(arrayNum);
    }

    const getProfil = (arrayNum) => {        
        let arrayProfil = [];

        arrayProfil.push(data_jo[arrayNum[arrayNum[0]]]);
        for (let n = 1; n<5; n++){
            arrayProfil.push(data_jo[arrayNum[n]]);
        }        
        setProfil(arrayProfil);
        createQuiz(arrayProfil);
    }

    const createQuiz = (arrayProfil) => {
        let random = Math.floor(Math.random() * 3) + 1;
        switch (random){
            case 1:
                setQuiz("Parmis ces 4 propositions, Quel.le est l'athlète né.e le " + arrayProfil[0].birth + " qui pratique la discipline \"" + arrayProfil[0].discipline + "\" ?");
                break;
            case 2:
                setQuiz("Parmis ces 4 propositions, Quel.le athlète " + arrayProfil[0].nationality + " a obtenu.e " + arrayProfil[0].gold_medal + " médaille.s d'or ?");
                break;
            case 3:
                setQuiz("Parmis ces 4 propositions, Quel.le athlète a obtenu.e " + arrayProfil[0].gold_medal + " médaille.s d'or, " + arrayProfil[0].silver_medal + " médaille.s d'argent et " + arrayProfil[0].copper_medal + " médaille.s de bronze ?");
                break;
                        
        }
    }



    const handleSubmit = () => {  
        getRandom(); 
        setIsClick(true);
    }

    return isClick ? returnPerso() : returnDefault();
};

export default QuizWidget;