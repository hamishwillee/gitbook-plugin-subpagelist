var cheerio = require('cheerio');

module.exports = {
    // Map of hooks
    hooks: {
        

           "page:before": function(page) {
               page.content = page.content + "\n# Title\n" 
               return page;
           },
            
           "page:after": function(page) {

             var $ = cheerio.load(page.content);
             var matchthingy =  $('ul.summary > li.active').children().text();
            
             $('.body-inner').append('<p>THIS IS SOME RANDOM TEXT</p>')
            

            page.content = $.html()
            return page;
            }

        
        
    },

    // Map of new blocks
    blocks: {},

    // Map of new filters
    filters: {}
};