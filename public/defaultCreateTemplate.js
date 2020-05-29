(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['defaultCreate'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div>\r\n  <p>log "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"logNumber") || (depth0 != null ? lookupProperty(depth0,"logNumber") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"logNumber","hash":{},"data":data,"loc":{"start":{"line":2,"column":9},"end":{"line":2,"column":22}}}) : helper)))
    + "</p>\r\n  <p>Handler: <input type=\"text\"></input></p>\r\n  <p>Dog: <input type=\"text\"></input></p>\r\n  <div>\r\n    <span>Date: <input type=\"text\"></input></span>\r\n    <span>Phase of Day: <input type=\"text\"></input></span>\r\n    <span>Duration: <input type=\"text\"></input></span>\r\n  </div>\r\n  <div>\r\n    <span>weather: <input type=\"text\"></input></span>\r\n    <span>wind: <input type=\"text\"></input></span>\r\n  </div>\r\n  <div>\r\n    <span>Problem Type: <input type=\"text\"></input></span>\r\n    <span>Age of Trail: <input type=\"text\"></input></span>\r\n  </div>\r\n  <p>Environment:</p>\r\n  <textarea></textarea>\r\n\r\n  <p>Performance Analysis:</p>\r\n  <textarea></textarea>\r\n\r\n  <p>Training Goals:</p>\r\n  <textarea></textarea>\r\n  <input type=\"button\" value=\"Submit\"></input>\r\n</div>\r\n";
},"useData":true});
})();