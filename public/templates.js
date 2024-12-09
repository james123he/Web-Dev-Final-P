(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['home'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"video"),depth0,{"name":"video","data":data,"indent":"                ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"container\" id=\"recommended-page\">\n    <div class=\"recommended\">\n        <div class=\"section-title\">Recommended</div>\n        <div class=\"video-grid\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"recommendedVideos") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":12},"end":{"line":8,"column":21}}})) != null ? stack1 : "")
    + "        </div>\n    </div>\n</div>\n\n";
},"usePartial":true,"useData":true});
templates['search'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"video"),depth0,{"name":"video","data":data,"indent":"                ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"container\" id=\"search-page\">\n    <div class=\"search-results\">\n        <div class=\"section-title\">Results for: \""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"query") || (depth0 != null ? lookupProperty(depth0,"query") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"query","hash":{},"data":data,"loc":{"start":{"line":4,"column":49},"end":{"line":4,"column":58}}}) : helper)))
    + "\"\n        </div>\n        <div class=\"video-grid\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"searchResults") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":12},"end":{"line":9,"column":21}}})) != null ? stack1 : "")
    + "        </div>\n    </div>\n</div>\n";
},"usePartial":true,"useData":true});
templates['video-player'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"video-player-container\">\n    <h2>"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"video") : depth0)) != null ? lookupProperty(stack1,"title") : stack1), depth0))
    + "</h2>\n    <video class=\"video-player\" controls preload=\"metadata\" poster=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"video") : depth0)) != null ? lookupProperty(stack1,"thumbnail") : stack1), depth0))
    + "\">\n    <source src=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"video") : depth0)) != null ? lookupProperty(stack1,"url") : stack1), depth0))
    + "\" type=\"video/mp4\">\n    Your browser does not support the video tag.\n    </video>\n    <p>"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"video") : depth0)) != null ? lookupProperty(stack1,"description") : stack1), depth0))
    + "</p>\n</div>";
},"useData":true});
templates['layouts/main'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Social Media Video Sharing</title>\n  <link href=\"https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100&family=Roboto:wght@300;400&display=swap\" rel=\"stylesheet\">\n  <link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.15.4/css/all.css\" crossorigin=\"anonymous\">\n  <link rel=\"stylesheet\" href=\"/style.css\">\n</head>\n<body>\n    <header>\n        <a id=\"home-icon\" href=\"/\">\n            <img src=\"/icon.png\" alt=\"Home\" />\n        </a>\n        <h1>Social Media Video Sharing</h1>\n        <form class=\"search-form\" onsubmit=\"handleSearch(event)\">\n            <input type=\"text\" id=\"search-input\" value=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"query") || (depth0 != null ? lookupProperty(depth0,"query") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"query","hash":{},"data":data,"loc":{"start":{"line":18,"column":56},"end":{"line":18,"column":65}}}) : helper)))
    + "\" placeholder=\"Search videos\" required>\n            <button type=\"submit\">Search</button>\n        </form>\n    </header>\n\n    <div id=\"menu-backdrop\" class=\"hide-menu\"></div>\n    <div id=\"menu-bar\" class=\"hide-menu\">\n        <ul>\n            <li><a href=\"#\">Settings</a></li>\n            <li><a href=\"#\">Post Video</a></li>\n            <li><a href=\"#\">Filters</a></li>\n            <li><a href=\"#\">Saved</a></li>\n        </ul>\n    </div>\n\n    "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"body") || (depth0 != null ? lookupProperty(depth0,"body") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"body","hash":{},"data":data,"loc":{"start":{"line":33,"column":4},"end":{"line":33,"column":15}}}) : helper))) != null ? stack1 : "")
    + "\n\n    <div id=\"upload-backdrop\" class=\"hide-upload\"></div>\n    <div class=\"upload-box\" id=\"upload-box\">\n        <label for=\"video-title\">Title:</label>\n        <input type=\"text\" id=\"video-title\" placeholder=\"Enter video title\">\n        <label for=\"video-url\">URL:</label>\n        <input type=\"url\" id=\"video-url\" placeholder=\"Enter video URL\">\n        <label for=\"video-description\">Description:</label>\n        <textarea id=\"video-description\" placeholder=\"Enter video description\"></textarea>\n        <label>\n            <input type=\"checkbox\" id=\"for-kids\"> For Kids\n        </label>\n        <label>\n            <input type=\"checkbox\" id=\"game\"> Game\n        </label>\n        <button>Upload Video</button>\n    </div>\n\n    <button class=\"show-upload-box\" onclick=\"toggleUploadBox()\">+</button>\n\n    <script>\n        function handleSearch(e) {\n            e.preventDefault();\n            const query = document.getElementById('search-input').value.trim();\n            if (query) {\n                window.location.href = '/search/' + encodeURIComponent(query);\n            }\n        }\n\n        function toggleUploadBox() {\n            const uploadBox = document.getElementById('upload-box');\n            const backdrop = document.getElementById('upload-backdrop');\n            const isHidden = backdrop.classList.contains('hide-upload');\n\n            if (isHidden) {\n                backdrop.classList.remove('hide-upload');\n                uploadBox.style.display = 'flex';\n            } else {\n                backdrop.classList.add('hide-upload');\n                uploadBox.style.display = 'none';\n            }\n        }\n    </script>\n\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.7.8/handlebars.min.js\" integrity=\"sha512-E1dSFxg+wsfJ4HKjutk/WaCzK7S2wv1POn1RRPGh8ZK+ag9l244Vqxji3r6wgz9YBf6+vhQEYJZpSjqWFPg9gg==\" crossorigin=\"anonymous\" referrerpolicy=\"no-referrer\"></script>\n<script src=\"/templates.js\" charset=\"utf-8\"></script>\n<script src=\"/index.js\" charset=\"utf-8\"></script>\n\n</body>\n</html>\n\n";
},"useData":true});
templates['partials/video'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"video-item\">\n    <a href=\"/video/"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":2,"column":20},"end":{"line":2,"column":26}}}) : helper)))
    + "\" class=\"video-link\">\n        <img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"thumbnail") || (depth0 != null ? lookupProperty(depth0,"thumbnail") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"thumbnail","hash":{},"data":data,"loc":{"start":{"line":3,"column":18},"end":{"line":3,"column":31}}}) : helper)))
    + "\" alt=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":3,"column":38},"end":{"line":3,"column":47}}}) : helper)))
    + "\" class=\"video-thumbnail\"/>\n        <h3 class=\"video-title\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":4,"column":32},"end":{"line":4,"column":41}}}) : helper)))
    + "</h3>\n    </a>\n    <p class=\"video-description\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":6,"column":33},"end":{"line":6,"column":48}}}) : helper)))
    + "</p>\n</div>\n\n\n\n";
},"useData":true});
})();