(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['createPage'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<script src=\"create.js\" defer></script>\r\n\r\n<h1>Title</h1>\r\n<hr>\r\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"defaultCreate"),depth0,{"name":"defaultCreate","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "<input class=\"log-submit\" id=\"btn-submit\" type=\"button\" value=\"Submit\"></input>\r\n";
},"usePartial":true,"useData":true});
})();