(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['default'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div>\r\n  <style>\r\n    p {\r\n      display: block;\r\n    }\r\n\r\n    .hor {\r\n      display\r\n    }\r\n  </style>\r\n\r\n  <p>log "
    + alias4(((helper = (helper = lookupProperty(helpers,"logNumber") || (depth0 != null ? lookupProperty(depth0,"logNumber") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"logNumber","hash":{},"data":data,"loc":{"start":{"line":12,"column":9},"end":{"line":12,"column":22}}}) : helper)))
    + "</p>\r\n  <p>Handler: "
    + alias4(((helper = (helper = lookupProperty(helpers,"handler") || (depth0 != null ? lookupProperty(depth0,"handler") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"handler","hash":{},"data":data,"loc":{"start":{"line":13,"column":14},"end":{"line":13,"column":25}}}) : helper)))
    + "</p>\r\n  <p>Dog: "
    + alias4(((helper = (helper = lookupProperty(helpers,"dog") || (depth0 != null ? lookupProperty(depth0,"dog") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dog","hash":{},"data":data,"loc":{"start":{"line":14,"column":10},"end":{"line":14,"column":17}}}) : helper)))
    + "</p>\r\n  <div>\r\n    <span>Date: "
    + alias4(((helper = (helper = lookupProperty(helpers,"date") || (depth0 != null ? lookupProperty(depth0,"date") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date","hash":{},"data":data,"loc":{"start":{"line":16,"column":16},"end":{"line":16,"column":24}}}) : helper)))
    + "</span>\r\n    <span>Phase of Day: "
    + alias4(((helper = (helper = lookupProperty(helpers,"phase") || (depth0 != null ? lookupProperty(depth0,"phase") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"phase","hash":{},"data":data,"loc":{"start":{"line":17,"column":24},"end":{"line":17,"column":33}}}) : helper)))
    + "</span>\r\n    <span>Duration: "
    + alias4(((helper = (helper = lookupProperty(helpers,"duration") || (depth0 != null ? lookupProperty(depth0,"duration") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"duration","hash":{},"data":data,"loc":{"start":{"line":18,"column":20},"end":{"line":18,"column":32}}}) : helper)))
    + "</span>\r\n  </div>\r\n  <div>\r\n    <span>weather: "
    + alias4(((helper = (helper = lookupProperty(helpers,"weather") || (depth0 != null ? lookupProperty(depth0,"weather") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"weather","hash":{},"data":data,"loc":{"start":{"line":21,"column":19},"end":{"line":21,"column":30}}}) : helper)))
    + "</span>\r\n    <span>wind: "
    + alias4(((helper = (helper = lookupProperty(helpers,"wind") || (depth0 != null ? lookupProperty(depth0,"wind") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"wind","hash":{},"data":data,"loc":{"start":{"line":22,"column":16},"end":{"line":22,"column":24}}}) : helper)))
    + "</span>\r\n  </div>\r\n  <div>\r\n    <span>Problem Type: "
    + alias4(((helper = (helper = lookupProperty(helpers,"problem") || (depth0 != null ? lookupProperty(depth0,"problem") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"problem","hash":{},"data":data,"loc":{"start":{"line":25,"column":24},"end":{"line":25,"column":35}}}) : helper)))
    + "</span>\r\n    <span>Age of Trail: "
    + alias4(((helper = (helper = lookupProperty(helpers,"trail") || (depth0 != null ? lookupProperty(depth0,"trail") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"trail","hash":{},"data":data,"loc":{"start":{"line":26,"column":24},"end":{"line":26,"column":33}}}) : helper)))
    + "</span>\r\n  </div>\r\n  <p>Environment:</p>\r\n  <p>"
    + alias4(((helper = (helper = lookupProperty(helpers,"environment") || (depth0 != null ? lookupProperty(depth0,"environment") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"environment","hash":{},"data":data,"loc":{"start":{"line":29,"column":5},"end":{"line":29,"column":20}}}) : helper)))
    + "</p>\r\n\r\n  <p>Performance Analysis:</p>\r\n  <p>"
    + alias4(((helper = (helper = lookupProperty(helpers,"performance") || (depth0 != null ? lookupProperty(depth0,"performance") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"performance","hash":{},"data":data,"loc":{"start":{"line":32,"column":5},"end":{"line":32,"column":20}}}) : helper)))
    + "</p>\r\n\r\n  <p>Training Goals:</p>\r\n  <p>"
    + alias4(((helper = (helper = lookupProperty(helpers,"goals") || (depth0 != null ? lookupProperty(depth0,"goals") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"goals","hash":{},"data":data,"loc":{"start":{"line":35,"column":5},"end":{"line":35,"column":14}}}) : helper)))
    + "</p>\r\n</div>\r\n";
},"useData":true});
})();