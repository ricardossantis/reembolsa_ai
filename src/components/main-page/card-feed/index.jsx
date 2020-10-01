import React from "react";
import Card from "./card.jsx";
import { useWindowSize } from "../../system-general/header/hookWindowSize.js";
import { MaxFeed, MinFeed } from "./card-style.js";

const ClientCard = () => {
  const width = useWindowSize().width;
  return (
    <>
      {(width > 768 && (
        <>
          <MaxFeed>
            <Card
              text=" Proin vulputate nisi ornare purus elementum, eu pellentesque mauris
  posuere. Proin pellentesque pellentesque felis, eget gravida nulla
  rutrum luctus. Isto é um teste. Isto é um teste. Isto é um teste. Isto é um teste. "
              name="Cristine Ferreira Fardo Balsini"
              company="Kenzie Academy Brazil"
            />
            <Card
              text="Contratar o serviço do Reembolsa.ai mudou para melhor a rotina da nossa empresa. 
        Estamos satisfeitos com o serviço fornecido e divulgamos para vários clientes também. 
        Nunca mais tivemos erros na hora de fechar o caixa final do mês!"
              name="Cristine Ferreira Fardo Balsini"
              company="Kenzie Academy Brazil"
            />
          </MaxFeed>
          <MaxFeed>
            <Card
              text=" Proin vulputate nisi ornare purus elementum, eu pellentesque mauris
  posuere. Proin pellentesque pellentesque felis, eget gravida nulla
  rutrum luctus."
              name="Cristine Ferreira Fardo Balsini"
              company="Kenzie Academy Brazil"
            />
            <Card
              text="Contratar o serviço do Reembolsa.ai mudou para melhor a rotina da nossa empresa. 
        Estamos satisfeitos com o serviço fornecido e divulgamos para vários clientes também. 
        Nunca mais tivemos erros na hora de fechar o caixa final do mês!"
              name="Cristine Ferreira Fardo Balsini"
              company="Kenzie Academy Brazil"
            />
          </MaxFeed>
        </>
      )) || (
        <MinFeed>
          <Card
            text=" Proin vulputate nisi ornare purus elementum, eu pellentesque mauris
posuere. Proin pellentesque pellentesque felis, eget gravida nulla
rutrum luctus. Praesent et massa a diam laoreet feugiat. Suspendisse
urna massa"
            name="Cristine Ferreira Fardo Balsini"
            company="Kenzie Academy Brazil"
          />
          <Card
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
