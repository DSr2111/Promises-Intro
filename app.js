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

const multipleNumbersFacts = async (num1, num2, num3) => {
  try {
    let url1 = `${baseUrl}${num1}`;
    let url2 = `${baseUrl}${num2}`;
    let url3 = `${baseUrl}${num3}`;

    let data1 = await axios.get(url1);
    console.log(`Fact about first number ${num1}: ${data1.data}`);
    let data2 = await axios.get(url2);
    console.log(`Fact about first number ${num2}: ${data2.data}`);
    let data3 = await axios.get(url3);
    console.log(`Fact about first number ${num3}: ${data3.data}`);
  } catch (error) {
    console.log(error);
  }
};

// Deck of Cards API code

const deckOfCardsURL = "https://deckofcardsapi.com/api/deck";

const drawRoute = "/new/draw/";

const drawCard = async () => {
  try {
    let url = `${deckOfCardsURL}${drawRoute}`;

    const response = await axios.get(url);
    const { suit, value } = response.data.cards[0];

    console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
  } catch (error) {
    console.log(error);
  }
};

const newDeckCard = async () => {
  try {
    let url = `${deckOfCardsURL}${drawRoute}`;
    let firstCard = null;

    const response1 = await axios.get(url);
    firstCard = response1.data.cards[0];
    let deckId = response1.data.deck_id;

    const response2 = await axios.get(`${deckOfCardsURL}/${deckId}/draw/`);
    secondCard = response2.data.cards[0];

    [firstCard, secondCard].forEach((card) => {
      console.log(`${card.value.toLowerCase()} of ${card.suit.toLowerCase()}`);
    });
  } catch (error) {
    console.log(error);
  }
};
