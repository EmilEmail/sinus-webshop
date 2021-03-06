# SINUS Webshop

## VÅRT ARBETSSÄTT
Vi har kommit överens om att köra dagliga scrummöten vid kl 9 där vi går igenom dagens agenda,
vem som ska göra vad, ta upp problem som uppstått dagen innan, lägga till nya idéer till Trellon 
eller uppdatera vårt chart (finns i repot i mappen documentation, gjort i lucidchart). Uppdatera 
varandra om Vuex-variabler och annat som påverkar fler saker än det man själv jobbar med.
Uppstår problem så kan man givetvis kontakta varandra under dagen också. Vi ska även föra egna 
backlogs så vi inte missar att ta upp eventuella problem på nästa möte.
Viktigt är också att gitta ofta och med tydliga kommentarer/beskrivningar.

Våran syntax:
Views döps i ett ord. tex View.vue
Components döps i minst två ord, huvudkomponenten ska alltid innehålla Comp. tex ProductComp
CSS Class döps med små bokstäver, bindesstreck mellan orden och gärna View/Comp namnet först. tex product-comp-wrapper.
En sträng som är en äkta text skrivs med "", tex "Det här är text"
Medans en sträng som är tex en sökväg, skrivs med ' ', tex '../assets/fonts'
computed skrivs: computed: function() {...} för att tydligt visa att du kan använda den i html direkt.
medans methoder, data osv skrivs: methods() {...} för att lätt skilja dom åt.
CSS variabler bör i första hand döpas tex color1, font1 osv för att vara oberoende av innehållet.
Vi har kommit överens om att ikoner ska vara 32*32px stora.
Vi ska utgå från 8:ans tabell när vi använder oss av grid. 

## Arbetssätt
Samla era erfarenheter från Kanban, Scrum och diskussionerna av Modern Agile och kom överens i 
gruppen om vilka delar och hur ni ska inkorporera detta i ert arbete. 
Dokumentera vad ni kommer överens om i README.md i ert repository.


Vi har börjat dagen med ett Scrum möte kl 9 där vi gått igenom vad som står på Trello. Mycket trevliga möten där alla i gruppen deltar och samarbetar på ett bra och pedagogiskt sätt. På Scrum mötet utses en Trello-master och Scrum-master som sköter Trello-sidan/Scrum-mötena för dagen. På Trello dokumenteras allt. Både problem, funderingar, frågor till lärare, saker som ska göras och saker som är gjorda. Saker som ska göras är dessutom markerade i viktighetsordning så vi enkelt kan se vad som ska prioriteras. 
När vi tillsammans på Scrum mötet har gått igenom backloggen så sätter vi igång, man har då tagit ett kort från "att göra" högen till "gör". Oftast läggs ett namn till så övriga i gruppen kan se vem som jobbar med vad just då om man behöver kontakta personen i fråga.

Vi har arbetat både enskillt, två och två men även hela gruppen tillsammans beroende på hur korten har varit utformade. För det mesta så har vi kodat två och två för att kunna hjälpa och stötta varandra. Så fort vi har stött på problem så har vi kontaktat varandra på Teams där vi har haft alla våra möten. 

Eftersom vi ligger på lite olika nivå på kunskap i gruppen så har fördelningen av arbetsuppgifter kanske inte alltid varit jämt fördelat. Men vi har tillsammans gått igenom svårare koder så att alla i gruppen får en chans att förstå och hänga med, trots att man skriver från olika håll och med olika kunskap. Bra samarbete där! 

## Utvärdering
Trots av att vi gjorde ett DOM-träd skulle vi gärna kunna gjort det mer detaljerat. Bättre tidsplanering för det här specifika projektet, då vi kunnat undvika stress och onödiga funktioner.

Alla har sett en stark fördel att använda trello, både enskilt och för gruppen. Det är tydlighet i vad man gör, vad andra gör och vad man sätter upp för syntaxregler och designregler. Bra uppföljning på Scrum-mötena.

## Instruktioner
Ni ska bygga en FrontEnd till en färdig BackEnd. Se `SINUS Webshop - REST API` nedan för mer information.

Inom gruppen har ni en uppsättning mockups från UI-kursen i höstas, välj en av dessa mockups att utgå ifrån.
Om ni inte kommer överens om vilken ni ska använda så får ni be läraren om en annan.

Skapa en trello board och bjud alla i gruppen, inkl läraren.

## SINUS Webshop

SINUS Webshop är en onlinebutik som säljer skateboards och tillbehör.

Webshoppen ska ha 3 olika lägen
* Anonym besökare
* Inloggad Kund
* Inloggad Admin (VG-krav)

### Anonym besökare
Det ska finnas en `registrerings`-view med ett registreringsformulär.
En order kan genomföras som anonym användare.

### Inloggad Kund
Det ska finnas en `My Account`-view med information om ditt konto och din orderhistorik.

### Inloggad Admin (VG-krav)
Det ska finnas en `Admin Area`-view med ett CRUD-gränssnitt för alla produkter.

### Övriga Views och Features
* En view för produktlista
* En view utcheckning med formulär för kontaktinfo och betalinfo, fylls i automagiskt om man är inloggad
* modal för enstaka produkt
* Modal för kundkorg
* Modal för inloggningsformulär

# SINUS Webshop - REST API

## Getting Started

1. `cd backend`
2. Install dependencies `npm install`
3. Start the server `npm run start`

## EndPoint Specifikation

| Resurs | Metod | Detaljer | Request Body |
| ------ | ------ | ------ | ------ |
| /api/auth/ | POST | Authentiserar user med email & password. Returnerar en JWT-token som används vid varje anrop API:et i en Authorization-header. | {"email": "...", "password" : "..."} |
| /api/register/ | POST | Registrerar en användare. | Se User-modellen |
| /api/products/ | GET | Returnerar en lista på samtliga produkter. | ❌ | 
| /api/products/:id | GET | Returnerar en enstaka produkt. | ❌ |
| /api/products/ | POST | Skapar en ny produkt. Enbart tillgänglig för admins | Se Product-modellen |
| /api/products/:id | PATCH | Uppdaterar produkt. Enbart tillgänglig för admins | Se Product-modellen |
| /api/products/:id | DELETE | Tar bort en produkt med :id. Enbart tillgänglig för admins | ❌ |
| /api/orders | GET | Returnerar en lista på den användarens ordrar eller samtliga ordrar för admins. | ❌ |
| /api/orders | POST | Skapar en ny order | Se Order-modellen |
| /api/me | GET | Hämtar den inloggade användren | ❌ |
| /api/me | PATCH | Uppdaterar profilen för den inloggade användren | Se User-modellen |

### Datamodeller

#### Product

##### Request Body
```javascript
 {
  "title": 'Gretas Fury',
  "price": 999,
  "shortDesc": 'Unisex',
  "longDesc": 'Skate ipsum dolor sit amet...',
  "imgFile": 'skateboard-greta.png'
} 
```

##### Document Model
```javascript
 {
  _id: '39y7gbbZk1u4ABnv', // generated serverside
  title: 'Gretas Fury',
  price: 999,
  shortDesc: 'Unisex',
  longDesc: 'Skate ipsum dolor sit amet...',
  imgFile: 'skateboard-greta.png' // Asset logic on clientside
} 
```

#### Order
##### Request Body
```js
{
  "items": ["productId1", "productId1", "productId2"]
}
```

##### Document Model
```javascript
 {
  _id: 123,
  timeStamp: Date.now(), 
  status: 'inProcess',
  items: [ 
    {
      title: "Tricky",
      price: 799,
      imgFile: "skateboard-generic.png",
      _id: "9E6KXMIdRglW0wbL",
      amount: 2
    }, 
    {
      <etc>
    }, 
    ... 
  ],
  orderValue: 999
} 
```

#### User

##### Request Body
```js
{
  "email": 'greta.thunberg@example.se',
  "password": 'grillkorv123',
  "name": 'Johan Kivi',

  "address": {
    "street": 'Tokitokvägen 3',
    "zip": '123 45',
    "city": 'Tokberga'
  }
} 
```

##### Document Model

```javascript
{
  _id: '6b521d3f-3d15...' // generated server side
  email: 'johan.kivi@zocom.se',
  password: '$$$hashed password$$$', // hashed serverside
  name: 'Johan Kivi',
  role: 'admin', // or customer
  address: {
    street: 'Tokitokvägen 3',
      zip: '123 45',
      city: 'Tokberga'
  },
  orderHistory: [ <orderId1>, <orderId2>, ... ]
} 
```

## Bedömningskritierer

### Godkänt

* State management i Vuex
* Vue Router för navigation
* Demonstrera komponenter, props, emits, data, computed, events
* API-abstraktion till egen modul
* Tydlig feature breakdown i Trello
* Dokumenterat agilt arbetssätt i README
* Inlämnad utvärdering i slutet


### Väl godkänt
* {...godkänt}
* Admin-view för CRUD av produkter
