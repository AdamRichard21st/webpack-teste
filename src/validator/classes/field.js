// /src/validator/classes/field.js

import { RulesMap } from "../rules";


export default class Field
{
    constructor(nodes, name, rules)
    {
        this.nodes = nodes;
        this.key = name;


        // interpreta cada regra individualmente
        this.rules = rules.split('|').map(argument => {

            // regex separador dos parâmetros
            const pattern = /([a-zA-Z_]+)(?:\:([a-zA-Z0-9,]+)?)/;


            // lê o nome da regra e os parâmetros se disponíveis
            let params = argument.split(pattern).filter(value => {

                return value.length;
            });


            // verifica se essa regra existe
            if ( RulesMap[params[0]] === undefined )
            {
                console.error(`Rule '${params[0]}' is not defined`);

                return null;
            }


            // adiciona uma nova regra ao array de regras
            return new RulesMap[params[0]](params.slice(1, 0));

        }).filter(rule => {

            return rule != null;
        });
    }
}