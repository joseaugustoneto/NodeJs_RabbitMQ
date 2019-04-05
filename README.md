# API RESTful nodeJS + express + RabbitMQ

Utilizando o nodeJS e RabbitMQ foi criado uma API RESTful que em sua primeira versão `v1` utilizando NodeJs + Express. Na segunda versão `v2` é incrementado o RabbitMQ que através de RPC busca informações em outro microserviço da mesma API, mescla as informações e retorna para o cliente.

#### Pré-requisitos

* [node & npm](https://nodejs.org)
* [rabbitmq](https://www.rabbitmq.com/)

#### API Postman

Acesse o [link](https://documenter.getpostman.com/view/877405/S1EJXLrE) a api do postman com as rotas configuradas.

#### Server RabbitMQ

`npm run start:rabbit`


#### Server NodeJS

`npm start`

#### Teste da API

Depois de iniciar os dois serviços você pode testar as requisições através do postman ou qualquer outra ferramente de requisições HTTP.
