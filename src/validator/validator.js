// /src/validator/validator.js


import Rules from './rules';
import Field from './classes/field';



export default class Validator
{
    constructor(selector, params)
    {
        // lista de nodes encontrados a partir do seletor
        this.nodes = document.querySelectorAll(selector);


        // percorre por todos nodes de formulários encontrados
        this.nodes.forEach(form => {

            // percorre por cada propriedade
            for (let [key, value] of Object.entries(params))
            {
                // seletor que será utilizado para consultar
                // todos elementos condizentes com a chave
                // percorrida atualmente
                let selector = key == '*' ? '*[name]' : `*[name="${key}"]`;


                // percorre por cada input encontrada de acordo
                // com a chave atualmente percorrida
                let inputs = form.querySelectorAll(selector);


                // valida se alguma input foi encontrada
                if ( inputs.length )
                {
                    // instancia um novo Field a partir da
                    // NodeList encontrada
                    this[key] = new Field(inputs, key, value);
                }
            }

        }, this);
    }
}
