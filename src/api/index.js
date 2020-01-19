export function getData(urls) {
  return Promise.all(
    urls.map(url => fetch(url)
      .then(checkStatus)  
      .then(
        response => response.json()
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

function checkStatus(response) {
  if (response.ok) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(new Error(response.statusText));
  }
}



// Handle HTTP errors since fetch won't.
// function handleErrors(response) {
//   if (!response.ok) {
//       throw Error(response.statusText);
//   }
//   return response;
// }