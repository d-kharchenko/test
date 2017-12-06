import React from 'react';
import CallBackForm from '../../../components/callback';
import './contacts.css'
const ContactsList = [
    {
        vodafone: '+38 (066) 510-50-08',
        life: '+38 (073) 510-50-08',
        kievstar: '+38 (098) 510-50-08',
        stationary: '+38 (0542) 790-750',
        email: 'INFO@ISLAND-UKRAINE.COM',
        adress: '40000, Україна, м.Суми, вул.Привокзальна, 9'
    }
];

const showCont = (
    ContactsList.map((el, index) =>
        <div className="contacts-tel" key={index}>
            <h5 className="contacts-tel__title">Телефонуйте:</h5>
            <h3>{el.stationary}</h3>
            <h3>{el.vodafone}</h3>
            <h3>{el.life}</h3>
            <h3>{el.kievstar}</h3>
        </div>

    )
);
const showEmail = (
    ContactsList.map((el, index) =>
        <div className="contacts-email" key={index}>
            <h5 className="contacts-email__title">E-mail:</h5>
            <h3>{el.email}</h3>
        </div>
    )
);
// const showAdress = (
//     ContactsList.map((el, index) =>
//         <div className="contacts-adress" key={index}>
//             <h5>Адреса:</h5>
//             <h3>{el.adress}</h3>
//         </div>
//     )
// );

const Contacts = () => {
    return(
        <div className="contacts">
            <div className="container">
                <div className="contacts-wrap">
                    {showCont}
                    {showEmail}
                    {/*{showAdress}*/}
                    <CallBackForm />
                </div>
            </div>
        </div>
    )

};
export default Contacts;