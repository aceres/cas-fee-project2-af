# CURL - Dokumentaiton und Beispiele

[http://blog.scottlowe.org/2014/02/19/using-curl-to-interact-with-a-restful-api/]
[https://erichonorez.wordpress.com/2013/02/10/how-create-a-rest-api-with-node-js-and-express/]
[http://coenraets.org/blog/2012/10/creating-a-rest-api-using-node-js-express-and-mongodb/]

## Idee für ein Rezept (Daten)

Rezept: Spaghetti Bolognese

### Einkaufsliste

500 Gramm Hackfleisch
1 Karotte
1 Flasche Tomatensaft
1 Prise Pfeffer
Etwas Salz
3 Zwiebeln
1 Knoblauch
1 Blatt Oregano
1 Kilogramm Spaghetti (Barilla)

### Zubereiten und Kochen

Schritt 1
Zuerst schneiden wir Zwiebeln...

Schritt 2
Zwiebeln leicht andunsten

## JSON (Vorstellung für unser Projekt)

`
{
  {
    "recipe": "Spaghetti Bolognese",
    "description": "Zauberhaft wie in Tessin...",
    "user": "Tanja Sennhauser",
    "createdAt": 1471865163,
    "prepTime": "200 Minjten",
    "cuisine": "Italienisch",
    "portion": 4,
    "category": "Hauptspeise",
    "level": "einfach"
    "rating": 100,
    "ingredients": [
      {
        "ingredient": "Karotten",
        "quantity": 2,
        "unit": "Kilogramm"
      },
      ...
    ],
    "steps": [
      {
        "stepDescription": "Bla bla"
      },
      ...
    ]
  }
}
`

## Registration und Login (Vorstellung für unser Projekt)

`
{
  [
    {
      "uid": 1,
      "email": "tanja@hsr.ch",
      "user": "tanja",
      "password": "sdzfi.werudsf.sdfjsd",
      "surname": "Tanja",
      "name": "Sennhauser",
      "street": "Hauptstrasse 23",
      "zip": "8000",
      "city": "Rapperswil"
    }
  ]
}
`

## Kategorie

`
{
  categories: [
    "Vorspeise", "Hauptspeise", "Dessert", "Beilage", "Frühstück", "Kleine Gerichte"
  ]
}
`

## Schwierigkeitsgrad

`
{
  levels: [
    "einfach", "mittel", "schwer"
  ]
}
`

## Länderküche

`
{
  cuisine: [
    "Schweizerisch", "Italienisch", "Französisch", "Thailändich"
  ]
}
`
