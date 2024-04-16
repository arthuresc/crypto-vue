import Request from './Request'

const endpoint = 'coins';

export default class CoinsService extends Request {
  static getValue(options, filters) {
    return this.getData(endpoint, options, filters)
  }
  // static get getAll() {
  //   return this.getData(endpoint)
  // }
}