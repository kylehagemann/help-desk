const getRandomInt = (max=1000) => {
  return Math.floor(Math.random() * Math.floor(max));
}
const getRandomString = () => {
  return 'a' + getRandomInt() + 'z';
};
const getRandomBoolean = () => {
  return Math.random() > 0.5 ? true : false;
}

export default {
  getRandomInt,
  getRandomBoolean, 
  getRandomString
}