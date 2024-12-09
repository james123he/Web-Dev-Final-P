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

  return "<div class=\"container\" id=\"recommended-page\">\r\n    <div class=\"recommended\">\r\n        <div class=\"section-title\">Recommended</div>\r\n        <div class=\"video-grid\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"recommendedVideos") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":12},"end":{"line":8,"column":21}}})) != null ? stack1 : "")
    + "        </div>\r\n    </div>\r\n</div>\r\n\r\n";
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

  return "<div class=\"container\" id=\"search-page\">\r\n    <div class=\"search-results\">\r\n        <div class=\"section-title\">Results for: \""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"query") || (depth0 != null ? lookupProperty(depth0,"query") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"query","hash":{},"data":data,"loc":{"start":{"line":4,"column":49},"end":{"line":4,"column":58}}}) : helper)))
    + "\"\r\n        </div>\r\n        <div class=\"video-grid\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"searchResults") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":12},"end":{"line":9,"column":21}}})) != null ? stack1 : "")
    + "        </div>\r\n    </div>\r\n</div>\r\n";
},"usePartial":true,"useData":true});
templates['video-player'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"video-player-container\">\r\n    <h2>"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"video") : depth0)) != null ? lookupProperty(stack1,"title") : stack1), depth0))
    + "</h2>\r\n    <video class=\"video-player\" controls preload=\"metadata\" poster=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"video") : depth0)) != null ? lookupProperty(stack1,"thumbnail") : stack1), depth0))
    + "\">\r\n    <source src=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"video") : depth0)) != null ? lookupProperty(stack1,"url") : stack1), depth0))
    + "\" type=\"video/mp4\">\r\n    Your browser does not support the video tag.\r\n    </video>\r\n    <p>"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"video") : depth0)) != null ? lookupProperty(stack1,"description") : stack1), depth0))
    + "</p>\r\n</div>";
},"useData":true});
templates['layouts/main'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <title>Social Media Video Sharing</title>\r\n  <link href=\"https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100&family=Roboto:wght@300;400&display=swap\" rel=\"stylesheet\">\r\n  <link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.15.4/css/all.css\" crossorigin=\"anonymous\">\r\n  <link rel=\"stylesheet\" href=\"/style.css\">\r\n</head>\r\n<body>\r\n    <header>\r\n        <a id=\"home-icon\" href=\"/\">\r\n            <img src=\"/icon.png\" alt=\"Home\" />\r\n        </a>\r\n        <h1>Social Media Video Sharing</h1>\r\n        <form class=\"search-form\" onsubmit=\"handleSearch(event)\">\r\n            <input type=\"text\" id=\"search-input\" value=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"query") || (depth0 != null ? lookupProperty(depth0,"query") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"query","hash":{},"data":data,"loc":{"start":{"line":18,"column":56},"end":{"line":18,"column":65}}}) : helper)))
    + "\" placeholder=\"Search videos\" required>\r\n            <button type=\"submit\">Search</button>\r\n        </form>\r\n    </header>\r\n\r\n    <div id=\"menu-backdrop\" class=\"hide-menu\"></div>\r\n    <div id=\"menu-bar\" class=\"hide-menu\">\r\n        <ul>\r\n            <li><a href=\"#\">Settings</a></li>\r\n            <li><a href=\"#\">Post Video</a></li>\r\n            <li><a href=\"#\">Filters</a></li>\r\n            <li><a href=\"saved\">Saved</a></li>\r\n        </ul>\r\n    </div>\r\n\r\n    "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"body") || (depth0 != null ? lookupProperty(depth0,"body") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"body","hash":{},"data":data,"loc":{"start":{"line":33,"column":4},"end":{"line":33,"column":14}}}) : helper))) != null ? stack1 : "")
    + "\r\n\r\n    <div id=\"upload-backdrop\" class=\"hide-upload\"></div>\r\n    <div class=\"upload-box\" id=\"upload-box\">\r\n        <label for=\"video-title\">Title:</label>\r\n        <input type=\"text\" id=\"video-title\" placeholder=\"Enter video title\">\r\n        <label for=\"video-url\">URL:</label>\r\n        <input type=\"url\" id=\"video-url\" placeholder=\"Enter video URL\">\r\n        <label for=\"video-description\">Description:</label>\r\n        <textarea id=\"video-description\" placeholder=\"Enter video description\"></textarea>\r\n        <label>\r\n            <input type=\"checkbox\" id=\"for-kids\"> For Kids\r\n        </label>\r\n        <label for=\"post-genre\">Genre:</label>\r\n            <select id=\"post-genre\" name=\"post-genre\">\r\n            <option selected value=\"\">Any</option>\r\n            <option value=\"action\">Action</option>\r\n            <option value=\"comedy\">Comedy</option>\r\n            <option value=\"drama\">Drama</option>\r\n            <option value=\"horror\">Horror</option>\r\n            <option value=\"documentary\">Documentary</option>\r\n            <option value=\"animation\">Animation</option>\r\n            </select>\r\n        <button>Upload Video</button>\r\n    </div>\r\n\r\n    <button class=\"show-upload-box\">+</button>\r\n\r\n    <script>\r\n        function handleSearch(e) {\r\n            e.preventDefault();\r\n            const search = document.getElementById('search-input').value.trim();\r\n            const genre = document.getElementById('genre-select').value.trim();\r\n            const kidFriendly = document.getElementById('kid-friendly-checkbox').checked;\r\n            let url = '/search?query=' + encodeURIComponent(search);\r\n            if (genre) {\r\n                url += '&genre=' + encodeURIComponent(genre);\r\n            }\r\n            if (kidFriendly) {\r\n                url += '&forKids=' + encodeURIComponent(kidFriendly);\r\n            }\r\n            window.location.href = url;\r\n\r\n        }\r\n\r\n    </script>\r\n\r\n\r\n<div id=\"filter-backdrop\" class=\"filter-hidden\"></div>\r\n<div id=\"filter-modal\" class=\"filter-hidden\">\r\n    <div class=\"filter-dialog\">\r\n\r\n    <div class=\"filter-header\">\r\n        <h4>Search Filters</h4>\r\n        <button type=\"button\" id=\"filter-close\" class=\"filter-hide-button\">&times;</button>\r\n    </div>\r\n\r\n    <div class=\"filter-body\">\r\n\r\n        <div class=\"filter-input-element\">\r\n            <label for=\"kid-friendly-checkbox\">Kid friendly</label>\r\n            <input type=\"checkbox\" id=\"kid-friendly-checkbox\" name=\"kidFriendly\">\r\n        </div>\r\n        <div class=\"filter-input-element\">\r\n            <label for=\"genre-select\">Genre</label>\r\n            <select id=\"genre-select\" name=\"genre\">\r\n                <option value=\"\">Any</option>\r\n                <option value=\"action\">Action</option>\r\n                <option value=\"comedy\">Comedy</option>\r\n                <option value=\"drama\">Drama</option>\r\n                <option value=\"horror\">Horror</option>\r\n                <option value=\"documentary\">Documentary</option>\r\n                <option value=\"animation\">Animation</option>\r\n            </select>\r\n        </div>\r\n\r\n\r\n    </div>\r\n\r\n    <div class=\"filter-input-element\">\r\n        <button type=\"submit\">Apply Filters</button>\r\n    </div>\r\n\r\n    </div>\r\n</div>\r\n\r\n\r\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.7.8/handlebars.min.js\" integrity=\"sha512-E1dSFxg+wsfJ4HKjutk/WaCzK7S2wv1POn1RRPGh8ZK+ag9l244Vqxji3r6wgz9YBf6+vhQEYJZpSjqWFPg9gg==\" crossorigin=\"anonymous\" referrerpolicy=\"no-referrer\"></script>\r\n<script src=\"/templates.js\" charset=\"utf-8\"></script>\r\n<script src=\"/index.js\" charset=\"utf-8\"></script>\r\n\r\n</body>\r\n</html>\r\n\r\n";
},"useData":true});
templates['partials/video'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"video-item\">\r\n    <a href=\"/video/"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":2,"column":20},"end":{"line":2,"column":26}}}) : helper)))
    + "\" class=\"video-link\">\r\n        <img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"thumbnail") || (depth0 != null ? lookupProperty(depth0,"thumbnail") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"thumbnail","hash":{},"data":data,"loc":{"start":{"line":3,"column":18},"end":{"line":3,"column":31}}}) : helper)))
    + "\" alt=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":3,"column":38},"end":{"line":3,"column":47}}}) : helper)))
    + "\" class=\"video-thumbnail\"/>\r\n        <h3 class=\"video-title\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":4,"column":32},"end":{"line":4,"column":41}}}) : helper)))
    + "</h3>\r\n    </a>\r\n    <p class=\"video-description\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":6,"column":33},"end":{"line":6,"column":48}}}) : helper)))
    + "</p>\r\n</div>\r\n\r\n\r\n\r\n";
},"useData":true});
})();