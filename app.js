const baseUrl = "http://numbersapi.com/";

const numberFact = (number) => {
  let url = `${baseUrl}${number}`;

  axios
    .get(url)
    .then((data) => {
      console.log(`First fact about ${number}: ${data.data}`);
      return axios.get(url);
    })
    .then((data) => {
      console.log(`Second fact about ${number}: ${data.data}`);
      return axios.get(url);
    })
    .then((data) => {
      console.log(`Third fact about ${number}: ${data.data}`);
      return axios.get(url);
    })
    .then((data) => {
      console.log(`Fourth fact about ${number}: ${data.data}`);
      return axios.get(url);
    })
    .catch((err) => console.log(err));
};

console.log(numberFact(102));
