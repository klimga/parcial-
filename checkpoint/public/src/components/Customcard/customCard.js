class customCard extends HTMLElement {

constructor(){
    super();
    this.attachShadow ({mode : 'open'});
}

static get observedAttributes(){

    return['title','value','description','quantity', 'image'];

}
attributeChangedCallback(propValue,oldValue,newValu){

    this[propValue] = newValu;
    this.render();

}
connectedCallback(){
    this.render();
}

render(){
    this.shadowRoot.innerHTML = `
    <link rel="name" href="./src/components/Customcard/CustomCard.css">


    <img src="${this.image}"></img>
    <h1>${this.title}</h1>
    <P>${this.description}</P>
    <P>${this.value}/P>
    <P>${this.quantity}</P>

    `;

}

}
customElements.define('custom-card', customCard)
export default customCard;