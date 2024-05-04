let url = "http://numbersapi.com/1";

let numberFact = axios.get(url);

numberFact
  .then((data) => console.log(`Fact about the number: ${data.data}`))
  .catch((err) => console.log(err));
