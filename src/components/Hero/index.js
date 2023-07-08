import image from "./undraw_medical_care_movn.png";
import { useEffect, useState } from "react";
import Button from "../Ui/Button";
import StyledHero from "./hero.styled";

function Hero() {
  const [covid, setCovid] = useState("");
  return (
    <StyledHero>
      <section>
        <div className="hero__left">
          <h2>Covid ID</h2>
          <h4>Monitoring Perkembangan Covid</h4>
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
          printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
           essentially unchanged. It was popularised in the 1960s with the 
          release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
          </p>
          <Button>Vaccine</Button>
        </div>
        <div className="hero__right">
          <img src={image} alt="" />
        </div>
      </section>
    </StyledHero>
  );
}

export default Hero;
