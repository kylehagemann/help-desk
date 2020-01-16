var path = require('path');

export function getData(urls) {
  return Promise.all(
    urls.map(url => fetch(url)
      .then(
        res => res.json()
      )
      .then(
        data => ({ name: url.split('\\').pop().split('/').pop().split('.')[0], data })
      )
      .catch(
        error => ({ error, url })
      )
    )
  )
}




  // Promise.all([
  //   fetch("http://localhost:3000/items/get"),
  //   fetch("http://localhost:3000/contactlist/get"),
  //   fetch("http://localhost:3000/itemgroup/get")
  // ])
  // .then(
  //   handleErrors()
  // )
  // .then(
  //   ([organizations, tickets, users]) => {
  //     let res = [organizations, tickets, users]
  //     return res.json()
  //   }
  // )
  // .catch(
  //   (err) => {
  //     console.log(err);
  //   }
  // );



// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
      throw Error(response.statusText);
  }
  return response;
}