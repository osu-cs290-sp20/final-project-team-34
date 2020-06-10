(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['default'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<article class=\"log\">\r\n  <div class=\"log-content\">\r\n    <h1 class=\"logs-title\">Log "
    + alias4(((helper = (helper = lookupProperty(helpers,"logNumber") || (depth0 != null ? lookupProperty(depth0,"logNumber") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"logNumber","hash":{},"data":data,"loc":{"start":{"line":3,"column":31},"end":{"line":3,"column":44}}}) : helper)))
    + "</h1>\r\n    <p><b>Handler:</b> "
    + alias4(((helper = (helper = lookupProperty(helpers,"handler") || (depth0 != null ? lookupProperty(depth0,"handler") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"handler","hash":{},"data":data,"loc":{"start":{"line":4,"column":23},"end":{"line":4,"column":34}}}) : helper)))
    + "</p>\r\n    <p><b>Dog:</b> "
    + alias4(((helper = (helper = lookupProperty(helpers,"dog") || (depth0 != null ? lookupProperty(depth0,"dog") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dog","hash":{},"data":data,"loc":{"start":{"line":5,"column":19},"end":{"line":5,"column":26}}}) : helper)))
    + "</p>\r\n    <div>\r\n      <span><b>Date:</b> "
    + alias4(((helper = (helper = lookupProperty(helpers,"date") || (depth0 != null ? lookupProperty(depth0,"date") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date","hash":{},"data":data,"loc":{"start":{"line":7,"column":25},"end":{"line":7,"column":33}}}) : helper)))
    + "</span>\r\n      <span><b>Phase of Day:</b> "
    + alias4(((helper = (helper = lookupProperty(helpers,"phase") || (depth0 != null ? lookupProperty(depth0,"phase") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"phase","hash":{},"data":data,"loc":{"start":{"line":8,"column":33},"end":{"line":8,"column":42}}}) : helper)))
    + "</span>\r\n      <span><b>Duration:</b> "
    + alias4(((helper = (helper = lookupProperty(helpers,"duration") || (depth0 != null ? lookupProperty(depth0,"duration") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"duration","hash":{},"data":data,"loc":{"start":{"line":9,"column":29},"end":{"line":9,"column":41}}}) : helper)))
    + "</span>\r\n    </div>\r\n    <div>\r\n      <span><b>Weather:</b> "
    + alias4(((helper = (helper = lookupProperty(helpers,"weather") || (depth0 != null ? lookupProperty(depth0,"weather") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"weather","hash":{},"data":data,"loc":{"start":{"line":12,"column":28},"end":{"line":12,"column":39}}}) : helper)))
    + "</span>\r\n      <span><b>Wind:</b> "
    + alias4(((helper = (helper = lookupProperty(helpers,"wind") || (depth0 != null ? lookupProperty(depth0,"wind") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"wind","hash":{},"data":data,"loc":{"start":{"line":13,"column":25},"end":{"line":13,"column":33}}}) : helper)))
    + "</span>\r\n    </div>\r\n    <div>\r\n      <span><b>Problem Type:</b> "
    + alias4(((helper = (helper = lookupProperty(helpers,"problem") || (depth0 != null ? lookupProperty(depth0,"problem") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"problem","hash":{},"data":data,"loc":{"start":{"line":16,"column":33},"end":{"line":16,"column":44}}}) : helper)))
    + "</span>\r\n      <span><b>Age of Trail:</b> "
    + alias4(((helper = (helper = lookupProperty(helpers,"trail") || (depth0 != null ? lookupProperty(depth0,"trail") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"trail","hash":{},"data":data,"loc":{"start":{"line":17,"column":33},"end":{"line":17,"column":42}}}) : helper)))
    + "</span>\r\n    </div>\r\n    <p><b>Environment:</b></p>\r\n    <p>"
    + alias4(((helper = (helper = lookupProperty(helpers,"environment") || (depth0 != null ? lookupProperty(depth0,"environment") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"environment","hash":{},"data":data,"loc":{"start":{"line":20,"column":7},"end":{"line":20,"column":22}}}) : helper)))
    + "</p>\r\n\r\n    <p><b>Performance Analysis:</b></p>\r\n    <p>"
    + alias4(((helper = (helper = lookupProperty(helpers,"performance") || (depth0 != null ? lookupProperty(depth0,"performance") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"performance","hash":{},"data":data,"loc":{"start":{"line":23,"column":7},"end":{"line":23,"column":22}}}) : helper)))
    + "</p>\r\n\r\n    <p><b>Training Goals:</b></p>\r\n    <p>"
    + alias4(((helper = (helper = lookupProperty(helpers,"goals") || (depth0 != null ? lookupProperty(depth0,"goals") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"goals","hash":{},"data":data,"loc":{"start":{"line":26,"column":7},"end":{"line":26,"column":16}}}) : helper)))
    + "</p>\r\n  </div>\r\n</article>";
},"useData":true});
})();