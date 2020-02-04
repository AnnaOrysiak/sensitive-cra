import config from '../api/config';

// url changed after login
const urlAuth = localStorage.getItem('state') ? config.adminCorsUrl : config.baseCorsUrl;

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

  static deleteNewsById(id) {
    console.log(`${urlAuth}news/delete/${id}`);
    return fetch(`${urlAuth}news/delete/${id}`, {
      method: "post",
      credentials: "include",
      headers: {
        "Content-Type": "text/plain"
      },
      // body: id,
    })
      .then(res => {
        console.log(res.headers);
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