import React from "react";
import Card from "./card.jsx";
import { useWindowSize } from "../../system-general/header/hookWindowSize.js";
import Button from "../home-button";
import { MaxFeed, MinFeed, BoxButton } from "./card-style.js";
import man1 from '../../../images/man1.jpg';
import man2 from '../../../images/man2.jpg';
import woman1 from '../../../images/woman1.jpg';
import woman2 from '../../../images/woman2.jpg';

const ClientCard = () => {
  const width = useWindowSize().width;
  return (
    <>
      {(width > 768 && (
        <>
          <MaxFeed>
            <Card
              image={man1}
              text=" Proin vulputate nisi ornare purus elementum, eu pellentesque mauris
  posuere. Proin pellentesque pellentesque felis, eget gravida nulla
  rutrum luctus. Isto é um teste. Isto é um teste. Isto é um teste. Isto é um teste. "
              name="Cristine Ferreira Fardo Balsini"
              company="Kenzie Academy Brazil"
            />
            <Card
            image={man2}
              text="Contratar o serviço do Reembolsa.ai mudou para melhor a rotina da nossa empresa. 
        Estamos satisfeitos com o serviço fornecido e divulgamos para vários clientes também. 
        Nunca mais tivemos erros na hora de fechar o caixa final do mês!"
              name="Cristine Ferreira Fardo Balsini"
              company="Kenzie Academy Brazil"
            />
          </MaxFeed>
          <MaxFeed>
            <Card
            image={woman1}
              text=" Proin vulputate nisi ornare purus elementum, eu pellentesque mauris
  posuere. Proin pellentesque pellentesque felis, eget gravida nulla
  rutrum luctus."
              name="Cristine Ferreira Fardo Balsini"
              company="Kenzie Academy Brazil"
            />
            <Card
            image={woman2}
              text="Contratar o serviço do Reembolsa.ai mudou para melhor a rotina da nossa empresa. 
        Estamos satisfeitos com o serviço fornecido e divulgamos para vários clientes também. 
        Nunca mais tivemos erros na hora de fechar o caixa final do mês!"
              name="Cristine Ferreira Fardo Balsini"
              company="Kenzie Academy Brazil"
            />
          </MaxFeed>
          <BoxButton>
            <Button bckButton="#F1548D" />
          </BoxButton>
        </>
      )) || (
        <MinFeed>
          
          <Card
            image={man1}
            text=" Proin vulputate nisi ornare purus elementum, eu pellentesque mauris
posuere. Proin pellentesque pellentesque felis, eget gravida nulla
rutrum luctus. Praesent et massa a diam laoreet feugiat. Suspendisse
urna massa"
            name="Cristine Ferreira Fardo Balsini"
            company="Kenzie Academy Brazil"
          />
          <Card
            image={man2}
            text="Contratar o serviço do Reembolsa.ai mudou para melhor a rotina da nossa empresa. 
  Estamos satisfeitos com o serviço fornecido e divulgamos para vários clientes também. 
  Nunca mais tivemos erros na hora de fechar o caixa final do mês!"
            name="Cristine Ferreira Fardo Balsini"
            company="Kenzie Academy Brazil"
          />
        </MinFeed>
      )}
    </>
  );
};

export default ClientCard;
