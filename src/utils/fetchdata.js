export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key':'a99f3d48cfmsha4d76f0c7ace99fp13abd1jsn5ab0b141b536',
  },
};



export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};