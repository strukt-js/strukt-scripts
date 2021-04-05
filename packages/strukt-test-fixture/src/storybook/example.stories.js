import { LitElement, html } from 'lit-element';

export default {
  title: 'Hello World',
  component: 'my-element',
};

class MyElement extends LitElement {
  static get properties() {
    return {
      name: { type: String },
    };
  }

  constructor() {
    super();
    this.message = '';
  }

  render() {
    return html`<h1>Hello ${this.name}</h1>`;
  }
}

customElements.define('my-element', MyElement);

const Template = ({ name }) => html`<my-element name=${name}></my-element>`;

export const HelloWorld = Template.bind({});

HelloWorld.args = {
  name: 'Strukt',
};
