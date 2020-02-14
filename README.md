# Rotas disponibilizadas

>URL: **https://limitless-atoll-61000.herokuapp.com**

## Login

>Type
- POST
>ENDPOINT 
- {URL}/api/users/login
>REQUEST BODY
```
{
	"login": "user",
	"password": "user"
}
```
>RESPONSE
```
{
  "isLogged": true,
  "isAdmin": false
}
```
## Campanhas - Listagem

>Type
- GET
>ENDPOINT 
- {URL}/api/campaigns
>RESPONSE
```
[
  {
    "title": "Fanta uva e maçã verde"
  },
  {
    "title": "Pizza quadrada ou redonda"
  }
]
```
