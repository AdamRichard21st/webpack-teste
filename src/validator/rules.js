// /src/validator/rules.js


// lista de regras registradas
import RuleMininum from './classes/rules/min';
import RuleRequired from './classes/rules/required';


const RulesMap = {
    'min': RuleMininum,
    'required': RuleRequired,
};


export {
    RuleMininum,
    RuleRequired,
    RulesMap
}