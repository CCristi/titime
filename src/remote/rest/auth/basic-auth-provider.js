export default class BasicAuthProvider {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  sign(requestConfig) {
    const signedRequestConfig = Object.assign({}, requestConfig);

    signedRequestConfig.headers = Object.assign(signedRequestConfig.headers || {}, {
      Authorization: `Basic ${this.btoa(`${this.username}:${this.password}`)}`,
    });

    return signedRequestConfig;
  }

  btoa(str) { // eslint-disable-line
    return new Buffer(str).toString('base64');
  }
}
