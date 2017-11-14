
'use strict';
angular.module('admin')
  .component('maTextEditor', {
    bindings: {
        model : '<',
        onChange: '&'
    },
    templateUrl : 'maTextEditor.component.html',
    controller : maTextEditorController,
  })

function maTextEditorController(){
  let $ctrl = this;

  $ctrl.tinymceOptions = {
      plugins: 'advlist autolink link image lists charmap preview colorpicker textcolor autoresize emoticons wordcount',
      toolbar: "bold italic underline strikethrough forecolor backcolor alignleft aligncenter alignright alignjustify image styleselect fontsizeselect emoticons",
      autorzsize_bottom_margin: 30,
      autoresize_on_init: false,
      theme: 'modern',
  };

  $ctrl.setPost = function(){
      $ctrl.onChange({model : $ctrl.model})
  }
};
