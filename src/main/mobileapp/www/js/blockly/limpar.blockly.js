window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.Limpar = window.blockly.js.blockly.Limpar || {};

/**
 * limpar
 */
window.blockly.js.blockly.Limpar.Executar = function() {

  this.cronapi.screen.changeValueOfField("vars.clienteNome", '');
  this.cronapi.screen.changeValueOfField("vars.VarTipoServ", '');
  this.cronapi.screen.changeValueOfField("vars.VarDateServ", '');
  this.cronapi.screen.changeValueOfField("vars.txt", '');
}
