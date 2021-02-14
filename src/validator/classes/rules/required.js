// /src/classes/rules/required.js

import Rule from './rule';


// Validação de campos numéricos.
export default class RuleRequired extends Rule
{
    constructor()
    {
        super();

        this.key = 'required';
    }


    onSubmit(value)
    {
        return value && value.length > 0;
    }
}