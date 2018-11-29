<template>
  <section class="menu">
    <div class="submenu">
      <router-link class="submenu-link" to="/menu">Pizza</router-link>
      <router-link class="submenu-link" to="/menu/addons">Napoje i Dodatki</router-link>
    </div>
    <router-view :menu="menu"></router-view>
  </section>
</template>

<script>
export default {
  data(){
    return {
      menu: {
        "pizza": {
          "1": {
            "id": "1",
            "name": "Szkolna",
            "components": "ser, sos pom.",
            "sm": "20,90",
            "md": "29,90",
            "lg": "35,90"
          },
          "2": {
            "id": "2",
            "name": "Farmerska",
            "components": "ser, sos pom., kukurydza, cebula, kiełbasa",
            "sm": "25,90 ",
            "md": "34,90",
            "lg": "40,90"
          },
          "3": {
            "id": "3",
            "name": "Peperoni",
            "components": "ser, sos pom., salami, oliwki, cebula, papryka peperoni",
            "sm": "26,90",
            "md": "35,90",
            "lg": "41,90"
          },
          "4": {
            "id": "4",
            "name": "Salami",
            "components": "ser, sos pom., salami, cebula",
            "sm": "24,90",
            "md": "33,90",
            "lg": "39,90"
          },
          "5": {
            "id": "5",
            "name": "Diabelska",
            "components": "ser, sos pom., salami, boczek, cebula, pieczarki, papr. peperoni, sos chilli",
            "sm": "28,90",
            "md": "37,90",
            "lg": "43,90"
          },
          "6": {
            "id": "6",
            "name": "Klasyczna",
            "components": "ser. sos pom., szynka, pieczarki",
            "sm": "24,90",
            "md": "33,90",
            "lg": "39,90"
          },
          "7": {
            "id": "7",
            "name": "Morska",
            "components": "ser, sos pom., szynka, pomidor, czosnek, cebula, krewetki",
            "sm": "28,90",
            "md": "37,90",
            "lg": "43,90"
          },
          "8": {
            "id": "8",
            "name": "Rybna",
            "components": "ser, sos pom., tuńczyk, szynka, papryka świeża, pomidor",
            "sm": "28,90",
            "md": "37,90",
            "lg": "43,90"
          },
          "9": {
            "id": "9",
            "name": "Cebulowa",
            "components": "ser. sos pom., cebula, kukurydza",
            "sm": "23,90",
            "md": "32,90",
            "lg": "38,90"
          },
          "10": {
            "id": "10",
            "name": "Beskidzka",
            "components": "ser, sos pom., boczek, kiełbasa, cebula, jajko",
            "sm": "27,90",
            "md": "36,90",
            "lg": "42,90"
          },
          "11": {
            "id": "11",
            "name": "Romana",
            "components": "ser, sos pom., szynka, salami, pieczarki",
            "sm": "26,90",
            "md": "35,90",
            "lg": "41,90"
          },
          "12": {
            "id": "12",
            "name": "Hawajska",
            "components": "ser, sos pom., szynka, ananas",
            "sm": "24,90",
            "md": "33,90",
            "lg": "39,90"
          },
          "13": {
            "id": "13",
            "name": "Pieczarkowa",
            "components": "ser, sos pom., pieczarki",
            "sm": "21,90",
            "md": "30,90",
            "lg": "36,90"
          },
          "14": {
            "id": "14",
            "name": "Capri",
            "components": "ser, sos pom., szynka, tuńczyk, kukurydza",
            "sm": "26,90",
            "md": "35,90",
            "lg": "41,90"
          },
          "15": {
            "id": "15",
            "name": "Arturo",
            "components": "ser, sos pom., szynka, boczek, salami, cebula oliwki",
            "sm": "28,90",
            "md": "37,90",
            "lg": "43,90"
          },
          "16": {
            "id": "16",
            "name": "Amoroso",
            "components": "ser, sos pom., szynka, pieczarki, koper włoski",
            "sm": "25,90",
            "md": "34,90",
            "lg": "40,90"
          },
          "17": {
            "id": "17",
            "name": "Kozia",
            "components": "ser, sos pom., ser pleúniowy, ser feta, ser mozzarella",
            "sm": "26,90",
            "md": "35,90",
            "lg": "41,90"
          },
          "18": {
            "id": "18",
            "name": "Meksykańska",
            "components": "ser, sos pom., salami, fasola czerwona, papryka świeża, ogórki, sos chilli",
            "sm": "27,90",
            "md": "36,90",
            "lg": "42,90"
          },
          "19": {
            "id": "19",
            "name": "Trzy Kolory",
            "components": "ser, sos pom., szpinak, szynka, pieczarki",
            "sm": "26,90",
            "md": "35,90",
            "lg": "41,90"
          },
          "20": {
            "id": "20",
            "name": "Wegetariańska",
            "components": "ser, sos pom., pieczarki, cebula, papryka, kukurydza, por",
            "sm": "27,90",
            "md": "36,90",
            "lg": "42,90"
          },
          "21": {
            "id": "21",
            "name": "Livorano",
            "components": "ser, sos pom., kiełbasa, boczek, ogórek, cebula",
            "sm": "26,90",
            "md": "35,90",
            "lg": "41,90"
          },
          "22": {
            "id": "22",
            "name": "Kurczakowa",
            "components": "ser, sos pom., kurczak, salami, kukurydza, czosnek, curry",
            "sm": "27,90",
            "md": "36,90",
            "lg": "42,90"
          },
          "23": {
            "id": "23",
            "name": "Cztery Pory Roku",
            "components": "ser, sos pom., szynka, pieczarki, małże, krewetki, oliwki, papryka",
            "sm": "30,90",
            "md": "39,90",
            "lg": "45,90"
          },
          "24": {
            "id": "24",
            "name": "Specjalna",
            "components": "ser, sos pom., kurczak, szynka, pieczarki, papryka świeża, kukurydza",
            "sm": "28,90",
            "md": "37,90",
            "lg": "43,90"
          },
          "25": {
            "id": "25",
            "name": "Frutti Di Mare",
            "components": "ser, sos pom., małże, krewetki, tuńczyk",
            "sm": "28,90",
            "md": "37,90",
            "lg": "43,90"
          },
          "26": {
            "id": "26",
            "name": "Sycylijska",
            "components": "ser, sos pom., szynka, pieczarki, papryka, oliwki",
            "sm": "26,90",
            "md": "35,90",
            "lg": "41,90"
          },
          "27": {
            "id": "27",
            "name": "Elba",
            "components": "ser, sos pom., szynka, kukurydza, ananas, brzoskwinia",
            "sm": "28,90",
            "md": "37,90",
            "lg": "43,90"
          },
          "28": {
            "id": "28",
            "name": "Ferrara",
            "components": "ser, sos pom., kurczak, żurawina, ser pleśniowy",
            "sm": "28,90",
            "md": "37,90",
            "lg": "43,90"
          },
          "29": {
            "id": "29",
            "name": "Casino",
            "components": "ser, sos pom., szynka, ser pleśniowy, papryka świeża, szczypior",
            "sm": "27,90",
            "md": "36,90",
            "lg": "42,90"
          },
          "30": {
            "id": "30",
            "name": "Fantazja",
            "components": "ser, sos pom., kompozycja własna klienta",
            "sm": "32,90",
            "md": "41,90",
            "lg": "47,90"
          },
          "31": {
            "id": "31",
            "name": "Zbójnicka",
            "components": "ser, sos pom., bekon wędz., cebula, ogórek kons., kełbasa, papryka świeża",
            "sm": "28,90",
            "md": "37,90",
            "lg": "43,90"
          },
          "32": {
            "id": "32",
            "name": "Bałtycka",
            "components": "ser, sos pom., pieczarki, tuńczyk",
            "sm": "24,90",
            "md": "33,90",
            "lg": "39,90"
          },
          "33": {
            "id": "33",
            "name": "Popularna",
            "components": "ser, sos pom., ogórek, kiełbasa",
            "sm": "24,90",
            "md": "33,90",
            "lg": "39,90"
          },
          "34": {
            "id": "34",
            "name": "Amigo",
            "components": "ser, sos pom., szynka, cebula",
            "sm": "24,90",
            "md": "33,90",
            "lg": "39,90"
          },
          "35": {
            "id": "35",
            "name": "Bartolini",
            "components": "ser, sos pom., pieczarki, cebula, ser pleśniowy, czosnek",
            "sm": "25,90",
            "md": "34,90",
            "lg": "40,90"
          },
          "36": {
            "id": "36",
            "name": "Romanesca",
            "components": "ser, sos pom., szynka, por, jajko",
            "sm": "24,90",
            "md": "33,90",
            "lg": "39,90"
          },
          "37": {
            "id": "37",
            "name": "Matador",
            "components": "ser, sos pom., wieprzowina, kurczak, papryka peper., por, podwójny ser",
            "sm": "31,90",
            "md": "40,90",
            "lg": "46,90"
          },
          "38": {
            "id": "38",
            "name": "Altono",
            "components": "ser, sos pom., salami, papr. kons., kukurydza, por, jajko, czosnek, sos chili",
            "sm": "27,90",
            "md": "36,90",
            "lg": "42,90"
          },
          "39": {
            "id": "39",
            "name": "Fonucci",
            "components": "ser, sos pom., kiełbasa, pomidor, papryka świeża, cebula",
            "sm": "26,90",
            "md": "35,90",
            "lg": "41,90"
          },
          "40": {
            "id": "40",
            "name": "Capra",
            "components": "czekolada, owoce południowe",
            "sm": "26,90",
            "md": "35,90",
            "lg": "41,90"
          },
          "41": {
            "id": "41",
            "name": "Udine",
            "components": "ser, sos pom., ogórek świeży, boczek, kiełbasa, pap. konserwowa",
            "sm": "28,90",
            "md": "37,90",
            "lg": "43,90"
          },
          "42": {
            "id": "42",
            "name": "Pescara",
            "components": "ser, sos pom., wieprzowina, ogórek świeży, koperek, ser pleśniowy",
            "sm": "30,90",
            "md": "39,90",
            "lg": "45,90"
          },
          "43": {
            "id": "43",
            "name": "Tarano",
            "components": "ser, sos pom., salami, boczek, pieczarki, cebula",
            "sm": "27,90",
            "md": "36,90",
            "lg": "42,90"
          },
          "44": {
            "id": "44",
            "name": "Patricioza",
            "components": "ser, sos pom., szynka, ser pleśniowy, sos chilli, pieprz, czosnek",
            "sm": "26,90",
            "md": "35,90",
            "lg": "41,90"
          },
          "45": {
            "id": "45",
            "name": "Domowa",
            "components": "ser, sos pom., szynka, salami, boczek, pieczarki, cebula",
            "sm": "28,90",
            "md": "37,90",
            "lg": "43,90"
          },
          "46": {
            "id": "46",
            "name": "Primavera",
            "components": "ser, sos pom., szynka, kurczak, peperoni, ser pleśniowy, kukurydza, curry",
            "sm": "28,90",
            "md": "37,90",
            "lg": "43,90"
          },
          "47": {
            "id": "47",
            "name": "Grecka",
            "components": "ser, sos pom., salami, oliwki, ser feta, pap. kons., jajko, czosnek, sos chilli",
            "sm": "28,90",
            "md": "37,90",
            "lg": "43,90"
          },
          "48": {
            "id": "48",
            "name": "Górska",
            "components": "ser, sos pom., kiełbasa, pieczarki, czosnek świeży, jajko, cebula smażona",
            "sm": "27,90",
            "md": "36,90",
            "lg": "42,90"
          },
          "49": {
            "id": "49",
            "name": "Jarska",
            "components": "ser, sos pom., pieczarki, pomidor, kukurydza, groszek",
            "sm": "25,90",
            "md": "34,90",
            "lg": "40,90"
          },
          "50": {
            "id": "50",
            "name": "Casa Mia",
            "components": "ser, sos pom., szynka, pomidor, ser pleśniowy rok pol",
            "sm": "27,90",
            "md": "36,90",
            "lg": "42,90"
          },
          "51": {
            "id": "51",
            "name": "Szparagowa",
            "components": "ser, sos pom., szynka, szparagi, pomidor",
            "sm": "27,90",
            "md": "36,90",
            "lg": "42,90"
          },
          "52": {
            "id": "52",
            "name": "Palermo",
            "components": "ser, sos pom., ser pleśniowy, ser feta, ser mozzarella, salami, szczypior",
            "sm": "29,90",
            "md": "38,90",
            "lg": "44,90"
          },
          "53": {
            "id": "53",
            "name": "Napoli",
            "components": "ser, sos pom., anchois, pomidory, czarne oliwki, capary, cebula, pieprz zielony",
            "sm": "29,90",
            "md": "38,90",
            "lg": "44,90"
          },
          "54": {
            "id": "54",
            "name": "Kabanos",
            "components": "ser, sos pom., podwójny kabanos, boczek, cebula, papryka, peperoni",
            "sm": "29,90",
            "md": "38,90",
            "lg": "44,90"
          },
          "55": {
            "id": "55",
            "name": "Ziołowa",
            "components": "ser, oliwa z oliwek, pieprz zielony, czosnek św., szpinak, pomidor, ser pleśniowy",
            "sm": "28,90",
            "md": "39,90",
            "lg": "43,90"
          },
          "56": {
            "id": "56",
            "name": "Norweska",
            "components": "ser, sos pom., łosoś, tuńczyk, pomidor, oliwki",
            "sm": "29,90",
            "md": "38,90",
            "lg": "44,90"
          },
          "57": {
            "id": "57",
            "name": "Łososiowa",
            "components": "ser, sos pom., łosoś, kapary",
            "sm": "28,90",
            "md": "37,90",
            "lg": "43,90"
          },
          "58": {
            "id": "58",
            "name": "Piekło Kebab",
            "components": "ser, sos pom., podwójny kebab peperoni, cebula, sos chilli",
            "sm": "28,90",
            "md": "37,90",
            "lg": "43,90"
          },
          "59": {
            "id": "59",
            "name": "Ryżowe Pole",
            "components": "ser, sos pom., kebab, ryż, pieczarki, cebula",
            "sm": "28,90",
            "md": "37,90",
            "lg": "43,90"
          },
          "60": {
            "id": "60",
            "name": "Serowa",
            "components": "ser, sos pom., ser pleśniowy, ser feta, ser mozzarella, oscypek, curry",
            "sm": "29,90",
            "md": "38,90",
            "lg": "44,90"
          },
          "61": {
            "id": "61",
            "name": "Wiejska",
            "components": "ser, sos pom., boczek, kiełbasa, oscypek, żurawina",
            "sm": "28,90",
            "md": "37,90",
            "lg": "43,90"
          },
          "62": {
            "id": "62",
            "name": "Wiosenna",
            "components": "ser, oliwa z oliwek, pomid., ogórek świeży, oliwki czarne, sałata lodowa, koperek",
            "sm": "27,90",
            "md": "36,90",
            "lg": "42,90"
          },
          "63": {
            "id": "63",
            "name": "Szwarcarska",
            "components": "ser, sos pom., kabanos, ser pleśn., cebula prażona, fasola czerwona",
            "sm": "29,90",
            "md": "38,90",
            "lg": "44,90"
          },
          "64": {
            "id": "64",
            "name": "Zimowa",
            "components": "ser, sos czosnkowy, brokuły, ziemniaki, boczek, szynka, majonez",
            "sm": "29,90",
            "md": "38,90",
            "lg": "44,90"
          },
          "65": {
            "id": "65",
            "name": "Jesienna",
            "components": "ser, sos pom., ziemniaki, mięso kebab, cebula, brokuły",
            "sm": "30,90",
            "md": "39,90",
            "lg": "45,90"
          },
          "66": {
            "id": "66",
            "name": "Turecka",
            "components": "ser, sos pom., kebab, ziemniaki, cebula, boczek, sałata lodowa",
            "sm": "28,90",
            "md": "37,90",
            "lg": "43,90"
          },
          "67": {
            "id": "67",
            "name": "Felippe",
            "components": "ser, sos pom., kebab, ryż, kukurydza, curry",
            "sm": "28,90",
            "md": "37,90",
            "lg": "43,90"
          },
          "68": {
            "id": "68",
            "name": "Jurajska",
            "components": "ser, sos pom., kebab, cebula, papryka, por, ogórek świeży",
            "sm": "28,90",
            "md": "37,90",
            "lg": "43,90"
          },
          "69": {
            "id": "69",
            "name": "Pasterska",
            "components": "ser, sos pom., kebab, ser pleśniowy, ser feta, ser mozzarella, oscypek",
            "sm": "30,90",
            "md": "39,90",
            "lg": "45,90"
          },
          "70": {
            "id": "70",
            "name": "Włoska",
            "components": "ser, sos pom., ser pleśniowy, ser feta, ser mozzarella, rucola, suszone pomidory",
            "sm": "28,90",
            "md": "37,90",
            "lg": "43,90"
          },
          "71": {
            "id": "71",
            "name": "Galicyjska",
            "components": "ser, oliwa z oliwek, łosoś wędz., ricola, susoszne pomidory, pieprz zielony, capary",
            "sm": "31,90",
            "md": "40,90",
            "lg": "46,90"
          }
        },
        "addons": {
          "dodatki": {
            1: {
              name: "Warzywne",
              sm: "3,00",
              md: "4,00",
              lg: "5,00"
            },
            2: {
              name: "Mięsne",
              sm: "3,00",
              md: "4,00",
              lg: "5,00"
            },
            3: {
              name: "Podwójny ser",
              sm: "3,00",
              md: "4,00",
              lg: "5,00"
            }
          },
          "sosy": [
            {name: "sos czosnkowy", price: "1,50"},
            {name: "sos chilli", price: "2,00"},
            {name: "ketchup", price: "1,00"}
          ],
          "napoje": [
            {name: "woda mineralna 0,5l", price: "3,00"},
            {name: "Coca-Cola 0,5l", price: "4,00"},
            {name: "Coca-Cola 1l", price: "6,00"},
            {name: "Nestea 0,5l", price: "4,00"},
            {name: "Sprite 0,5l", price: "4,00"},
            {name: "Fanta 0,5l", price: "4,00"},
            {name: "sok Cappy 0,3l", price: "3,00"},
            {name: "piwo Tyskie 0,5l", price: "5,00"},
            {name: "piwo Żywiec 0,5l", price: "5,00"}
          ]
        }
      } // menu
    }
  }
}
</script>

<style lang="scss">
  @import "../scss/_variables.scss";

  .menu{
    width: $mainWidth;
    min-height: 600px;
    background: $bgColor;

    .submenu{
      text-align: center;
      padding: 10px;

      .submenu-link{
        text-decoration: none;
        background: #c5f7e2;
        color: #000;
        padding: 5px;
        font-size: 20px;
        margin: 0 10px;
      }
    }
  }


</style>
