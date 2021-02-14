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
                // percorre por cada input encontrada
                let inputs = form.querySelectorAll(`*[name="${key}"]`);


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