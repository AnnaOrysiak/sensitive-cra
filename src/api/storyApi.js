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

  static getStoryBiId(id = '') {
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

  static getStoryBiAuthor(author = '') {
    return fetch(`${config.baseCorsUrl}story/${author}`)
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

export default StoryApi;