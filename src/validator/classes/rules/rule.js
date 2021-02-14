// /src/classes/rules/rule.js


/**
 * Classe template das para criação
 * de novas regras de validação.
 */
export default class Rule
{
    constructor()
    {
        this.key = 'rule';
    }


    /**
     * Funçao acionada quando o valor do campo
     * é atualizado.
     * 
     * @param {string} value Valor do campo sendo validado.
     * 
     * @return {string} Valor com validação aplicada.
     */
    onChange(value)
    {
        return value;
    }


    /**
     * Funçao acionada quando o formulário está
     * prestes a ser enviado e seus campos
     * precisam ser validados. 
     * 
     * @param {string} value    Campo sendo validado.
     * 
     * @return {bool}   Retorna `true` se o campo foi validado.
     *                 `false` caso contrário.
     */
    onSubmit(value)
    {
        return true;
    }
}