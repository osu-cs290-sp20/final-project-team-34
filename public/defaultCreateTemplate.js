(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['defaultCreate'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"log-form-container\" id=\"log-container\">\r\n  <div class=\"log-form-box\">\r\n    <form class=\"log-form\">\r\n    <h1 class=\"logs-title\" id=\"log-number\">Log "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"logNumber") || (depth0 != null ? lookupProperty(depth0,"logNumber") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"logNumber","hash":{},"data":data,"loc":{"start":{"line":4,"column":47},"end":{"line":4,"column":60}}}) : helper)))
    + "</h1>\r\n    <p>Handler: <input class=\"log-field\" type=\"text\" placeholder=\"Enter handlers name here\" required=\"required\"></input></p>\r\n    <p>Dog: <input class=\"log-field\" type=\"text\" required=\"required\"></input></p>\r\n    <div>\r\n      <span>Date: <input class=\"log-field\" type=\"text\" required=\"required\"></input></span>\r\n      <span>Phase of Day: <input class=\"log-field\" type=\"text\"></input></span>\r\n      <span>Duration: <input class=\"log-field\" type=\"text\"></input></span>\r\n    </div>\r\n    <div>\r\n      <span>weather: <input class=\"log-field\" type=\"text\"></input></span>\r\n      <span>wind: <input class=\"log-field\" type=\"text\"></input></span>\r\n    </div>\r\n    <div>\r\n      <span>Problem Type: <input class=\"log-field\" type=\"text\" required=\"required\"></input></span>\r\n      <span>Trail Age: <input class=\"log-field\" type=\"text\"></input></span>\r\n    </div>\r\n    <p>Environment:<textarea class=\"log-field\"></textarea></p>\r\n    <p>Performance Analysis: <textarea class=\"log-field\"></textarea></p>\r\n    <p>Goals for Training: <textarea class=\"log-field\" required=\"required\"></textarea></p>\r\n    </form>\r\n  </div>\r\n</div>\r\n";
},"useData":true});
})();