# Rotas disponibilizadas

>URL: **https://limitless-atoll-61000.herokuapp.com**

## Login (Login: admin, Password: admin)

>Type
- POST
>ENDPOINT 
- {URL}/api/users/login
>REQUEST BODY
```
{
	"login": "admin",
	"password": "admin"
}
```
>RESPONSE
```
{
  "isLogged": true,
  "isAdmin": true
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
## Campanhas - Detalhamento

>Type
- GET
>ENDPOINT 
- {URL}/api/campaigns/1
>RESPONSE
```
{
  "title": "Fanta uva e maçã verde",
  "id": 1,
  "feedback": [
    {
      "title": "Fanta Uva",
      "quantity": 100,
      "graphics": [
        {
          "title": "Por Cidade",
          "result": [
            {
              "label": "Recife",
              "quantity": 30
            },
            {
              "label": "São Paulo",
              "quantity": 40
            },
            {
              "label": "Rio de janeiro",
              "quantity": 30
            }
          ]
        },
        {
          "title": "Por Idade",
          "result": [
            {
              "label": "Até 18 anos",
              "quantity": 5
            },
            {
              "label": "18 à 25 anos",
              "quantity": 65
            },
            {
              "label": "25 à 40 anos",
              "quantity": 20
            },
            {
              "label": "Acima de 40 anos",
              "quantity": 10
            }
          ]
        }
      ]
    },
    {
      "title": "Fanta Maça Verde",
      "quantity": 50,
      "graphics": [
        {
          "title": "Por Cidade",
          "result": [
            {
              "label": "Recife",
              "quantity": 15
            },
            {
              "label": "São Paulo",
              "quantity": 20
            },
            {
              "label": "Rio de janeiro",
              "quantity": 15
            }
          ]
        },
        {
          "title": "Por Idade",
          "result": [
            {
              "label": "Até 18 anos",
              "quantity": 5
            },
            {
              "label": "18 à 25 anos",
              "quantity": 30
            },
            {
              "label": "25 à 40 anos",
              "quantity": 10
            },
            {
              "label": "Acima de 40 anos",
              "quantity": 5
            }
          ]
        }
      ]
    }
  ]
}
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
