import React from 'react';
import IdCard from './components/idCard/IdCard.js';
import Greetings from './components/greetings/Greetings.js';
import Random from './components/random/Random.js';
import BoxColor from './components/boxColor/BoxColor.js';
import CreditCard from './components/creditCard/CreditCard.js';
import Rating from './components/rating/Rating.js';
import DriverCard from './components/driverCard/DriverCard.js';
import LikeButton from './components/likeButton/LikeButton.js';
import ClickablePicture from './components/clickablePicture/ClickablePicture.js';
import './App.css';
import Facebook from './components/facebook/Facebook.js';
import facebookData from '../src/data/berlin.json';

function App() {
  const [countryClicked, setCountryClicked] = React.useState("")
  const handleButtonClick = (country) => {
    // console.log(country.element);
    setCountryClicked(country.element)
  }
  let fbArray = facebookData.map((person) => person.country);
  const fbSet = new Set(fbArray)
  fbArray = [...fbSet]
  // console.log(fbArray);

  return (
    <div className="App">
      {/* ID Card */}
      <h1>IdCard</h1>
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date('1992-07-14')}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth={new Date('1988-05-11')}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      {/* Greetings */}
      <h1>Greetings</h1>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <Greetings lang="au">Jason</Greetings>
      {/* random Min/Max */}
      <h1>Random</h1>
      <Random min={1} max={6} />
      <Random min={1} max={100} />
      <h1>BoxColor</h1>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
      <BoxColor r={28} g={200} b={240} />
      <h1>CreditCard</h1>
      <CreditCard
        type="Visa"
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="white"
      />
      <CreditCard
        type="Master Card"
        number="0123456789010995"
        expirationMonth={3}
        expirationYear={2021}
        bank="N26"
        owner="Maxence Bouret"
        bgColor="#eeeeee"
        color="#222222"
      />
      <CreditCard
        type="Visa"
        number="0123456789016984"
        expirationMonth={12}
        expirationYear={2019}
        bank="Name of the Bank"
        owner="Firstname Lastname"
        bgColor="#ddbb55"
        color="white"
      />
      <h1>Rating</h1>
      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>
      <h1>DriverCard</h1>
      <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: 'Toyota Corolla Altis',
          licensePlate: 'CO42DE',
        }}
      />
      <DriverCard
        name="Dara Khosrowshahi"
        rating={4.9}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{
          model: 'Audi A3',
          licensePlate: 'BE33ER',
        }}
      />
      <h1>LikeButton</h1>
      <LikeButton />
      <LikeButton />
      <h1>ClickablePicture</h1>
      <ClickablePicture
        img="./assets/images/maxence.png"
        imgClicked="./assets/images/maxence-glasses.png"
      />
      <h1>Facebook</h1>
        {fbArray.map(element => <button onClick={() => handleButtonClick({element})}>{element}</button>)}
      {facebookData.map((person) => {
        return <Facebook {...person} countryClicked={countryClicked} />;
      })}
    </div>
  );
}

export default App;
