var cheerio = require('cheerio');

module.exports = {
    // Map of hooks
    hooks: {
        

      "page:after": function(page) {
          page.content = page.content+"----\n # Title\n" ;
          
          
          ///
                  // Requires an unhealthy knowledge of the generated template...
        "page:after": function(page) {

            var $ = cheerio.load(page.content);
            var matchthingy =  $('ul.summary > li.active').children().text()
            
            /*

            // Replace top level li.chapter with li.part
            $('ul.summary > li.chapter').each(function(i, elem) {
                var li = $(elem);

                // Replace the classes if the chapter is actually a part, and add a divider
                if (li.text().indexOf('-XPARTX-') > 0) {
                    li.removeClass('chapter');
                    li.addClass('part');

                    // Don't add a divider before the first part, let it come straight after the Introduction page
                    if (i > 1)
                        li.before('<li class="part divider" />');
                }
            });

            // remove chapter numbers from any intro pages (and child pages)
            $('ul.summary > li.chapter span > b').remove();
            $('ul.summary > li.chapter a > b').remove();

            // Remove the chapter number from the part header
            $('ul.summary > li.part > span > b').remove();
            $('ul.summary > li.part > a > b').remove();

            // Replace the nasty munging of the name for part heading
            $('ul.summary > li.part > span').each(function(i, elem) {
                var span = $(elem);
                span.text(span.text().replace(/-XPARTX-/, ""));
            });

            // Bump the remaining chapter numbers so each chapter is only unique
            // within the part
            $('ul.summary > li.part li.chapter b').each(function(i, elem) {
                var b = $(elem);
                var text = b.text();
                var index = text.indexOf('.');
                if (index > -1)
                    b.text(text.substring(index + 1));
            });
            */

          page.content = $.html() + "<h1>Any old crap.</h1>" + matchthingy.html();
          return page;
      }

        
        
    },

    // Map of new blocks
    blocks: {},

    // Map of new filters
    filters: {}
};