'use strict';

document.querySelector('#btn-adicionar-familia').addEventListener('click', abrirFormFamilia);

function abrirFormFamilia(evt){
    Helper.hideAndShow('#lista-familias', '#form-familias-container');
    Helper.changeToolBarTitle({
        el: '#familias',
        contentContainer: '.content',
        titles: [{
            'name': 'Famílias',
            'action': 'lista-familias'
        },
        {
            'name': 'Cadastro',
            'action': 'form-familias-container'
        }]
    });
}