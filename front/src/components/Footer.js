import React from 'react';
import departement13 from "../img/Bouches-du-Rhône_13_logo.png"
import "../css/footer.css"
import voyage from "../img/Voyage_Privé.svg.png"
import AWS from "../img/AWS.png"
import provence from "../img/provencetourisme.png"
import code from "../img/code4marseille.png"
import inco from "../img/inco.png"

const Footer = () => {
    return (

            <footer className="footer">
                <div className="row">
                    <a href="https://www.departement13.fr/" target="_blank" className="column">
                        <img src={departement13} alt="d13"/>
                    </a>
                    <a href="https://membres.voyage-prive.com/voyageprive/fr/?cid=31746&affid=Marque-exact-42638028443[…]NdCvePsNXX2k_o5m2k7P8h7CDTUxLBP9q1SEIj_No1QaAiqSEALw_wcB"
                       target="_blank" className="column">
                        <img src={voyage} alt="voyage privé"/>
                    </a>
                    <a href="https://aws.amazon.com/fr/?nc2=h_lg" target="_blank" className="column">
                        <img src={AWS} alt="aws"/>
                    </a>
                </div>
                <div className="row">
                    <a href="https://www.myprovence.fr/" target="_blank" className="column">
                        <img className="smaller" src={provence} alt="my provence"/>
                    </a>
                    <a href="https://inco-group.co/" target="_blank" className="column">
                        <img className="smaller" src={inco} alt="inco"/>
                    </a>
                    <a href="https://code4marseille.fr/" target="_blank" className="column">
                        <img className="smaller" src={code} alt="code4marseille"/>
                    </a>
                </div>
            </footer>


    );
};

export default Footer;