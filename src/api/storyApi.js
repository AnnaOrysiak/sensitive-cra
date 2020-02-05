import config from '../api/config';

// url changed after login
// const urlAuth = localStorage.getItem('state') ? config.adminCorsUrl : config.baseCorsUrl;

class StoryApi {

  static getAllStories() {
    return fetch(`${config.baseCorsUrl}stories`)
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error("error ", res.status)
        }
      })
      .catch(err => err)
  }

  static getStoryById(id = '') {
    return fetch(`${config.baseCorsUrl}story/${id}`)
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error("error ", res.status)
        }
      })
      .catch(err => err)
  }

  static getStoriesByAuthor(author = '') {
    return fetch(`${config.adminCorsUrl}stories/${author}`)
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error("error ", res.status)
        }
      })
      .catch(err => err)
  }

  static deleteStoryById(id) {
    return fetch(`${config.adminCorsUrl}story/delete/${id}`)
      .then(res => {
        console.log(id)
        if (res.ok) {
          return res.json()
        } else {
          throw new Error("error ", res.status)
        }
      })
      .catch(err => err)
  }

}

export default StoryApi;