import React, { useState, useEffect } from "react";
import Axios from "axios";
import OfferCardItem from "./OfferCardItem";
import "./Cards.css";

function OfferCards() {
  const [offerList, setOfferList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/getOffers").then((response) => {
      setOfferList(response.data);
    });
  }, []);

  return (
    <div className="cards">
      <h1>OfferCards.js Line 6</h1>

      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items" key="ul1">
            {offerList.map((item) => (
              <>
                <OfferCardItem
                  id={item.idoffer}
                  src={item.img_src}
                  alt={item.img_alt}
                  path={item.tyre_path}
                  name={item.name}
                  code={item.idoffer}
                  data={item.data}
                  price={item.price}
                />
              </>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default OfferCards;

/*
//STAVLJA SE UMJESTO LINIJA 23-34 ZA PONIŠTAVANJE WARNINGA O KEYEVIMA UNUTAR <li>
<li className="cards__item" key={item.idoffer}>
  <Link className="cards__item__link" to={item.tyre_path}>
    <figure
      className="cards__item__pic-wrap"
      data-category={item.price + " HRK (s PDV-om)"}
    >
      <img
        src={item.img_src}
        alt={item.img_alt}
        className="cards__item__img"
      />
    </figure>

    <div className="cards__item__name__offer">
      <h5 className="cards__item__text">{item.name}</h5>
    </div>

    <div className="cards__item__data__offer">
      <h5 className="cards__item__text">
        {"Šifra proizvoda: " + item.idoffer}
      </h5>
      <h5 className="cards__item__text">{item.data}</h5>
    </div>
  </Link>
</li>*/
