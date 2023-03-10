import fetch from "node-fetch";

const jsonTypicode = "https://dummyapi.io/data/v1/user?created=1";

const fetchData = async (apiEndPoint) => {
  try {
    const response = await fetch(apiEndPoint);
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
};

fetchData(jsonTypicode);