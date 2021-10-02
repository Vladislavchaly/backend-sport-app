'use strict'

export default class BaseResources {

  static async index(data) {
    return data;
  }

  static async make(request) {
    if (Array.isArray(request)) {
      return Promise.all(request.map( data => this.index(data)))
    }

    return this.index(request);
  }

}
