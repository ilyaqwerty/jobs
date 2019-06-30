const PATH = process.env.REACT_APP_PATH;

const serialize = obj => Object.keys(obj).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(obj[key])).join('&');

function get (url, ...params) {
  console.log('GET', url);

  const GET = {
    method: 'GET'
  };

  return fetch(`${url}?${serialize(...params)}`, GET)
    .then(res => {
      console.log(res);
      return res.json()
    })
    .catch(e => {
      console.log(e);
      throw e
    })
}

export default class Data {
  getJobsList (...args) {
    // return get('https://jobs.github.com/positions.json', ...args)
    return get(PATH, ...args)
  }
}
