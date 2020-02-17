# Rotas disponibilizadas

>URL: **https://limitless-atoll-61000.herokuapp.com**

## Login (Login: coca, Password: coca | Login: pizza, Password: pizza | Login: user, Password: user)

>Type
- POST
>ENDPOINT 
- {URL}/api/users/login
>REQUEST BODY
```
{
	"login": "coca",
	"password": "coca"
}
```
>RESPONSE
```
{
  "isLogged": true,
  "isAdmin": true,
  "idPartner": 1
}
```

## Parceiros - Listagem

>Type
- GET
>ENDPOINT 
- {URL}/api/partners
>RESPONSE
```
[
  {
    "id": 1,
    "title": "Coca-Cola"
  },
  {
    "id": 2,
    "title": "Pizza Hut"
  }
]
```
## Campanhas - Listagem

>Type
- GET
>ENDPOINT 
- {URL}/api/campaigns?partner=1
>RESPONSE
```
[
  {
    "title": "Fanta uva e maçã verde",
    "id": 1
  }
]
```

## Usuário - Detalhamento

>Type
- GET
>ENDPOINT 
- {URL}/api/users/3
>RESPONSE
```
{
  "id": "3",
  "name": "Barack Obama",
  "genre": "M",
  "points": 4500,
  "level": "Gold"
}
```
## Feedback - Cadastro (Chamada realizada após Bip no QRCode)

>Type
- POST
>ENDPOINT 
- {URL}/api/feedbacks
>REQUEST BODY
```
{
	"idCampaign": 2, 
	"idItemCampaign": 1,
	"city": "Recife"
}
```
>RESPONSE
```
{
  "partner": "Pizza Hut",
  "campaign": "Pizza Quadrada ou Redonda"
}
```

## Feedback - Relatório da campanha

>Type
- POST
>ENDPOINT 
- {URL}/api/feedbacks/report/{id_campaign}
>RESPONSE
```
{
  "total": 5,
  "graphicCity": {
    "_data": {
      "♠Não Informado": [
        "Não Informado",
        1
      ],
      "♠Recife": [
        "Recife",
        3
      ],
      "♠Garanhuns": [
        "Garanhuns",
        1
      ]
    },
    "size": 3
  },
  "graphicHour": {
    "_data": {
      "22": [
        22,
        2
      ],
      "23": [
        23,
        3
      ]
    },
    "size": 2
  }
}
```
