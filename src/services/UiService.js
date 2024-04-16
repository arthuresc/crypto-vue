import Toast from 'awesome-toast-component'

export default class UiService {

  static getError(title = 'Teste', txt = '') {
    const text = !!txt ? `🛑 <h1>${title}</h1> ${txt}` : `🛑  ${title}`;
    new Toast(text, {position: 'top'})
  }
}