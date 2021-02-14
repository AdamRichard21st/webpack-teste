// /src/classes/rules/min.js

import Rule from './rule';


// Validação de campos numéricos.
export default class RuleMininum extends Rule
{
    constructor()
    {
        super();

        this.key = 'min';
    }


    onChange(value)
    {
        return value;
    }
}