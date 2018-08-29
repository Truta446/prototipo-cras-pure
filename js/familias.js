'use strict';

document.querySelector('#btn-adicionar-familia').addEventListener('click', abrirFormFamilia);

function abrirFormFamilia(evt){
    Helper.hideAndShow('#lista-familias', '#form-familias-container');
}