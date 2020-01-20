import "whatwg-fetch";
import { isEmpty } from "../helpers/index"

export function getData(urls) {
  return Promise.all(
    !isEmpty(urls) ? urls.map(url => window.fetch(url)
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
    ) : error => ({ error })
  );
};

function checkStatus(response) {
  if (response.ok) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(new Error(response.statusText));
  };
};
