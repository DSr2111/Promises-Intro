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

const multipleNumbersFacts = (num1, num2, num3) => {
  let url1 = `${baseUrl}${num1}`;
  let url2 = `${baseUrl}${num2}`;
  let url3 = `${baseUrl}${num3}`;

  axios
    .get(url1)
    .then((data) => {
      console.log(`Fact about first number ${number}: ${data.data}`);
      return axios.get(url2);
    })
    .then((data) => {
      console.log(`Second fact about ${number}: ${data.data}`);
      return axios.get(url3);
    })
    .then((data) => {
      console.log(`Third fact about ${number}: ${data.data}`);
    })
    .catch((err) => console.log(err));
};
