import config from '../api/config';

class usersApi {
  static getAllUsers() {
    return fetch(`${config.adminCorsUrl}users`)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('error ', res.status);
        }
      })
      .catch(err => err);
  }
}

export default usersApi;
