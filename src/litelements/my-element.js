import { LitElement, html, customElement, property } from 'lit-element'

@customElement('hello-element')
class HelloElement extends LitElement {
  @property() hello = 'EPAM'
  static get properties() {
    return {
      hello: { type: String },
    }
  }
  render() {
    return html` <p>Hello ${this.hello}!</p> `
  }
}

export default HelloElement
