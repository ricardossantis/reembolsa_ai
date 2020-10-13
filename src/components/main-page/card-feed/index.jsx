import React from "react";
import Card from "./card.jsx";
import { useWindowSize } from "../../system-general/header/hookWindowSize.js";
import Button from "../home-button";
import { MaxFeed, MinFeed, BoxButton } from "./card-style.js";

const ClientCard = () => {
  const width = useWindowSize().width;
  return (
    <>
      {(width > 768 && (
        <>
          <MaxFeed>
            <Card
              text=" Antes da Reembolsa.ai era uma bagunça! Cheio de papéis. Agora tudo ficou mais simples e rápido.
              Nossos colaboradores podem estar certos de que serão reembolsados o quanto antes! "
              name="Luiz Paulo de Siqueira Júnior"
              company="Poliffonia"
            />
            <Card
              text="Receber os meus reembolsos ficou mais simples. Agora não preciso me preocupar com vários documentos e assinaturas.
              Solicitou e logo esta aprovado. Rápido e fácil!"
              name="Priscila Benavides Muñoz Martins"
              company="Poliffonia"
            />
          </MaxFeed>
          <MaxFeed>
            <Card
              text="Agora estou mais tranquila quando viajo a trabalho. Sei que se precisar de um reembolso, com o Reembolsa.ai, não tem erro! 
              Simples e fácil de usar. Me atende em qualquer lugar. "
              name="Fatima Regina C. Ferraz"
              company="Colégio SEPP"
            />
            <Card
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
