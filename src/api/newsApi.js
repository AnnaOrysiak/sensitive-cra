import config from '../api/config';

// url changed after login
const urlAuth = localStorage.getItem('state') ? config.adminCorsUrl : config.baseCorsUrl;

class NewsApi {

  static getAllNews() {
    return fetch(`${urlAuth}news`)
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error("error ", res.status)
        }
      })
      .catch(err => err)
  }

  static deleteNewsById(id) {
    return fetch(`${urlAuth}news/delete/${id}`)
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