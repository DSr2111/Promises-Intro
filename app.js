// Numbers API code

const baseUrl = "http://numbersapi.com/";

const numberFactAsync = async (number) => {
  let url = `${baseUrl}${number}`;

  try {
    for (let i = 1; i <= 4; i++) {
      // 4 facts
      let data = await axios.get(url);
      console.log(`Fact ${i} about ${number}: ${data.data}`);
    }
  } catch (error) {
    console.log(error);
  }
};

const multipleNumbersFacts = (num1, num2, num3) => {
  let url1 = `${baseUrl}${num1}`;
  let url2 = `${baseUrl}${num2}`;
  let url3 = `${baseUrl}${num3}`;

  axios
    .get(url1)
    .then((data) => {
      console.log(`Fact about first number ${num1}: ${data.data}`);
      return axios.get(url2);
    })
    .then((data) => {
      console.log(`Fact about second number ${num2}: ${data.data}`);
      return axios.get(url3);
    })
    .then((data) => {
      console.log(`Fact about third number ${num3}: ${data.data}`);
    })
    .catch((err) => console.log(err));
};

// Deck of Cards API code

const deckOfCardsURL = "https://deckofcardsapi.com/api/deck";

const drawRoute = "/new/draw/";

const drawCard = () => {
  let url = `${deckOfCardsURL}${drawRoute}`;

  axios
    .get(url)
    .then((response) => {
      let { suit, value } = response.data.cards[0];
      console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
    })
    .catch((err) => console.log(err));
};

const newDeckCard = () => {
  let url = `${deckOfCardsURL}${drawRoute}`;
  let firstCard = null;

  axios
    .get(url)
    .then((response) => {
      firstCard = response.data.cards[0];
      let deckId = response.data.deck_id;
      return axios.get(`${deckOfCardsURL}/${deckId}/draw/`);
    })
    .then((response) => {
      let secondCard = response.data.cards[0];
      [firstCard, secondCard].forEach(function (card) {
        console.log(
          `${card.value.toLowerCase()} of ${card.suit.toLowerCase()}`
        );
      });
    })
    .catch((err) => console.log(err));
};
