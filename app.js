const baseUrl = "http://numbersapi.com/";

const numberFact = (number) => {
  let url = `${baseUrl}${number}`;

  axios
    .get(url)
    .then((data) => console.log(`Fact about the number: ${data.data}`))
    .catch((err) => console.log(err));
};
