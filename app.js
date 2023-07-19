let TextBox = document.getElementById("TextBox");
//console.log(TextBox.innerHTML);

let Titlebox = document.getElementById("TitleForWord");

let Button = document.getElementById("TextButton");

let description = document.getElementById("wordMeaning");

// const changeValue = () => {
//   Titlebox.innerHTML = TextBox.value;
// };

let ButtonBox = document
  .getElementById("TextButton")
  .addEventListener("click", async (e) => {
    e.preventDefault();
    await dictionary();
  });

//
const dictionary = async () => {
  const url = `https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=${TextBox.value}`;
  console.log(url);
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "d29d800db9msh2844e84d9629f5ep18b6afjsn371f94eb4a03",
      "X-RapidAPI-Host": "dictionary-by-api-ninjas.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    console.log(result.valid);
    console.log(result.definition);
    Titlebox.innerHTML = result.word;
    description.innerHTML = result.definition;
  } catch (error) {
    console.error(error);
  }
};
