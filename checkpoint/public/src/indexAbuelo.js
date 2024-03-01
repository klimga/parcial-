import * as components from './components/indexPadre.js'
import {productsData} from './components/data/data.js'
class AppContainer extends HTMLElement{
  
    cards = [];

    constructor(){
        super();
        this.attachShadow ({mode : 'open'});
       
        productsData.forEach((Element) => {
            const card = this.ownerDocument.createElement('custom-card');
           card.setAttribute('title', Element.title);
           card.setAttribute('value', Element.value);
           card.setAttribute('description', Element.description);
           card.setAttribute('quantity', Element.quantity);
           card.setAttribute('inStock', Element.inStock);
           card.setAttribute('image', Element.image);
           this.cards.push(card);
        });
         
    }
        
  
    
    connectedCallback(){
        this.render();
    }
    
    render(){
        this.shadowRoot.innerHTML = `
        
        `;
        this.cards.forEach((mycard) =>{
            this.shadowRoot.appendChild(mycard)
        });
    }
    
    }
    customElements.define('app-container', AppContainer)