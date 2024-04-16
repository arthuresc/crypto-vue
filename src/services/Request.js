import axios from 'axios';
import UiService from './UiService';
const api = import.meta.env['VITE_API_PATH'];
const controller = new AbortController();
function abortSignal(timeoutMs) {
  const abortController = new AbortController();
  setTimeout(() => abortController.abort(), timeoutMs || 1500);
  return abortController.signal;
}


export default class Request {


  static getData(endpoint, options = '', filters = ''){
    const formatedFilters = Array.isArray(filters)
    ? filters.reduce((accumulator, currentValue) => {
      return accumulator + '&' + currentValue;
    }, '')
    : `${filters}`;


    const formatedOptions = Array.isArray(options)
    ? options.reduce((accumulator, currentValue) => {
      return accumulator +'/' + currentValue;
    }, '')
    : `/${options}`;


    const apiOptions = formatedOptions === '/' && !formatedFilters ? '' : `${formatedOptions}?${formatedFilters}`;


    const axiosOptions = {
      signal: abortSignal(3000),
      'cache-control': 'max-age=30',
      's-maxage':60, 
      'content-type': 'application/json',
      charset:'utf-8'
    }

    controller.abort()
    
    const url = `${api}/${endpoint}${apiOptions}`
    return axios
        .get(url, axiosOptions)
        .then((data) => data)
        .catch((e) => {
          UiService.getError(`${e.message}`)
        })
  }
}