import config from '../api/config';

// url changed after login
// const urlAuth = localStorage.getItem('state') ? config.adminCorsUrl : config.baseCorsUrl;

class NewsApi {

  static getAllNews() {
    return fetch(`${config.baseCorsUrl}news`)
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error("error ", res.status)
        }
      })
      .catch(err => err)
  }

}

export default NewsApi;