import Request from './Request'

const endpoint = 'simple';

export default class SimpleService extends Request {
  static getValue(options, filters) {
    return this.getData(endpoint, options, filters)
  }
}