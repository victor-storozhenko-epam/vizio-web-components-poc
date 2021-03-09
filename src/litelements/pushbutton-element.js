import { css, customElement, html, LitElement, property } from 'lit-element'
import { SPACE_KEYS } from './utils/keys'

@customElement('pushbutton-element')
class PushbuttonElement extends LitElement {
  @property() color = 'red'
  @property() pressed = false

  static get styles() {
    return css`
      button {
        border-radius: 2em;
        border: 0;
        fontsize: 1.3em;
        background-color: #aadede;
        padding: 0.7em 2em;
        color: #1e1e1e;
      }
    `
  }

  render() {
    return html`
      <button
        aria-label="${this.color} pushbutton"
        @mousedown=${this.down}
        @mouseup=${this.up}
        @touchstart=${this.down}
        @touchend=${this.up}
        @keydown=${(e: KeyboardEvent) =>
          SPACE_KEYS.includes(e.key) && this.down()}
        @keyup=${(e: KeyboardEvent) => SPACE_KEYS.includes(e.key) && this.up()}
      >
        Press me
      </button>
    `
  }

  down() {
    if (!this.pressed) {
      this.pressed = true
      this.dispatchEvent(new Event('button-press'))
    }
  }

  up() {
    if (this.pressed) {
      this.pressed = false
      this.dispatchEvent(new Event('button-release'))
    }
  }
}

export default PushbuttonElement
