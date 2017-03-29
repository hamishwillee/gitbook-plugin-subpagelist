var cheerio = require('cheerio');

module.exports = {
    // Map of hooks
    hooks: {
        
          ///
                  // Requires an unhealthy knowledge of the generated template...
        "page:after": function(page) {

            var $ = cheerio.load(page.content);
            //var matchthingy =  $('ul.summary > li.active').children().text();
            

            page.content = $.html() + "<h1>Any old crap.</h1>"; //+ matchthingy.html();
            return page;
            }

        
        
    },

    // Map of new blocks
    blocks: {},

    // Map of new filters
    filters: {}
};