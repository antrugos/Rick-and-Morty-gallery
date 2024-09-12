const url = "https://rickandmortyapi.com/api/character";

const getData = async () => {
  const data = await fetch(url);
  const res = await data.json();
  return res;
};

export default getData;
