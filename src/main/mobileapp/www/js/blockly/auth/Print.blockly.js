window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.auth = window.blockly.js.blockly.auth || {};
window.blockly.js.blockly.auth.Print = window.blockly.js.blockly.auth.Print || {};

/**
 * Print
 */
window.blockly.js.blockly.auth.Print.Executar = function() {

  this.cronapi.screen.showIonicModal("modal18060");
  this.cronapi.screen.changeValueOfField("vars.ModalClienteNome", this.cronapi.screen.getValueOfField("vars.clienteNome"));
}
