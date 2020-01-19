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

export function formatData(data) {
  const parsedData = [];
  data.forEach(element => {
      parsedData.push(JSON.parse(JSON.stringify(element), replacer));
  });
  return parsedData;
}

function replacer(key, val) {
  if (typeof val !== 'object') {
    return String(val);
  }
  if (!val) {
      return '';
  }
  return val;
}


// Handle HTTP errors since fetch won't.
// function handleErrors(response) {
//   if (!response.ok) {
//       throw Error(response.statusText);
//   }
//   return response;
// }