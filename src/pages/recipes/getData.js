export const getData = async () => {
  const data = await (
    await fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=s")
  ).json();
  return data;
};

