let url = "http://numbersapi.com/1";

let numberFact = axios.get(url);

numberFact.then((data) => console.log(data)).catch((err) => console.log(err));
