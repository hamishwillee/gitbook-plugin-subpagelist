var cheerio = require('cheerio');

module.exports = {
    // Map of hooks
    hooks: {
        

           "page:before": function(page) {
               page.content = page.content + "\n# Title\n" 
               return page;
           },
            
           "page": function(page) {

              var $ = cheerio.load(page.content);
              //var matchthingy =  $('ul.summary > li.active').children().text();
              //console.log(matchthingy);
              // Write a file in the output folder
              //output.writeFile('hello.txt', matchthingy);
              $('.page-inner').remove();
              //$('section').append('<p>THIS IS SOME RANDOM TEXT</p>');
              //$('ul').append('<li class = "plum">Plum</li>');
              //$('p').append('XX');
            

              page.content = $.html()
              page.content = page.content.replace("Title", "2FISH");
              
              
              return page;
            }

        
        
    },

    // Map of new blocks
    blocks: {},

    // Map of new filters
    filters: {}
};