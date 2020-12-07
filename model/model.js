var MODEL = (function() {
  var _getView = function(viewName) {
    $.get(`view/${viewName}.html`, function(data) {
      $("#cont").html(data);
    });
  };

  return {
    getView: _getView
  };
})();
