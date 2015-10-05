Blockly.Blocks['coins_value'] = {
  init: function() {
    this.appendValueInput("coins_value")
        .setCheck(null)
        .appendField("coins value")
        .appendField(new Blockly.FieldDropdown([["=", "equal"], ["<", "lessthan"], [">", "greaterthan"]]), "NAME");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(90);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['rdoc_value'] = {
  init: function() {
    this.appendValueInput("rdoc_value")
        .setCheck(null)
        .appendField("rdoc value = ");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setColour(300);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
