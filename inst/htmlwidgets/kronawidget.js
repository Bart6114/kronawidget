HTMLWidgets.widget({

  name: 'kronawidget',

  type: 'output',

  factory: function(el, width, height) {

    return {


      renderValue: function(x) {
        el.innerHTML = x.content; // insert data
        document.getElementsByTagName('krona')[0].setAttribute("style", "display:none;");

        load('#' + el.id); // load the Krona logic

      },

      resize: function(width, height) {

      }

    };
  }
});
