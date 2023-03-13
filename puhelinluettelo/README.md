# Web-ohjelmointi: Puhelinluettelo -projekti
## Osa 2, tehtävät 2.6 - 2.16.

### **Tärkeää**
- **Tehtävät 2.6 - 2.10 on tehty eri pohjalle, joka korjattiin oikeanlaiseksi kohdassa 2.10**
    - Nämä tehtävät siis jätetty selkeyden vuoksi näkyviin, mutta viimeinen toimiva `App.js` perustuu `App-2-10-new.js` pohjalle, jonka perusteella myös loput tehtävät 2.16 asti on tehty
    - **`App.js` on siis viimeisin ja palautuskelpoinen tiedosto**
    - **Ratkaisu kaikkiin tehtäviin on siis tiedostossa `App.js`, koska kaikki tehtävät rakentuvat edellisen päälle!**

### Tehtävä 2.6: puhelinluettelo step1
- Toimii ongelmitta, vanha pohja
- Tehtävänannon mukaan ei tarkista vielä duplikaatteja, mutta nimen lisääminen onnistuu
- Tiedostossa `App-2-6.js`

### Tehtävä 2.7: puhelinluettelo step2
- Toimii ongelmitta, vanha pohja
- Tarkistaa duplikaatit ja antaa alertin
- Tiedostossa `App-2-7.js`

### Tehtävä 2.8: puhelinluettelo step3
- Toimii ongelmitta, vanha pohja
- Nimi ja numero, tarkistaa myös nimen duplikaatin
- Tiedostossa `App-2-8.js`

### Tehtävä 2.9*: puhelinluettelo step4
- Ylim. vapaaehtoinen tehtävä
- Jätetty tekemättä palautettaessa!

### Tehtävä 2.10: puhelinluettelo step5
- Vanhan version ongelmia (`App-2-10-old.js`):
    - Toimii muuten normaalisti, mutta törmättiin ongelmiin refaktoroidessa
    - Syöttökentät eivät putsaantuneet lähettämisen jälkeen!
    - Koko sovellus tehty tähän asti vanhanaikaisesti noudattamatta materiaalin ajankohtaisempia ohjeita
- Vanha sovellus kirjoitettu uudelleen (`App-2-10-new.js`), esimerkkien ohjeiden mukaisesti
    - Toimii nyt oikein!
- Sijainnit:
    - Vanha virheellinen sovellus `App-2-10-old.js`
    - Uusi toimiva sovellus `App-2-10-new.js`

### Tehtävä 2.11: puhelinluettelo step6
- Toimii ongelmitta, uusi pohja
- Alkutila haetaan Axios-kirjaston avulla palvelimelta Effect hookin avulla
- Tiedostossa `App-2-11.js`

### Tehtävä 2.12: puhelinluettelo step7
- Toimii ongelmitta, uusi pohja
- Henkilöt synkronoidaan palvelimelle (`db.json`)
- Tiedostossa `App-2-13.js`, sillä palvelimen kanssa kommunikoinnista vastaava toiminnallisuus siirrettiin omaan moduuliin jo tässä vaiheessa.

### Tehtävä 2.13: puhelinluettelo step8
- Toimii ongelmitta, uusi pohja
- Palvelimen kanssa kommunikoinnista vastaava toiminnallisuus siirretty jo edellsiessä kohdassa omaan moduuliin
    - Kyseinen moduuli sijainnissa `./services/persons.js`
- Tiedostossa `App-2-13.js`

### Tehtävä 2.14: puhelinluettelo step9
- Toimii ongelmitta, uusi pohja
- Poisto toimmii halutulla tavalla dynaamisesti
- Tiedostossa `App-2-14.js`

### Tehtävä 2.15*: puhelinluettelo step10
- Ylim. vapaaehtoinen tehtävä
- Jätetty tekemättä palautettaessa!

### Tehtävä 2.16: puhelinluettelo step11
- Lisätty uutaman sekunnin näkyvä ilmoitus, joka kertoo onnistuneista operaatioista
    - Operaatiot, joissa ilmoitus näkyy ovat henkilön lisäys ja poisto
    - Numeron muutos liittyy vapaaehtoiseen tehtävään 2.15, jota en tehnyt
        - Täten tätä ilmoitusta ei tule
- Toimii ongelmitta
- Tämä on viimeinen sovellusversio, joten se **löytyy sijainnista** `App.js`
    - Kaikki sovellukseen tehdyt muutokset sisältyvät tähän viimeiseen versioon!
    - Kaikki muut versiot ovat jätetty ohjelmoinnin avuksi, mutta ne eivät ole toimivia välttämättä itsessään enää
