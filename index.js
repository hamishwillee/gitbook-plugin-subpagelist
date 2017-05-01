

module.exports = {
    // Map of hooks
    hooks: {
        

           "page:before": function(page) {
               page.content = page.content + "\n# Title\n" 
               console.log('PAGE BEFORE');
               return page;
           },
            
           "page": function(page) {

             console.log('PAGE');
              
              
              return page;
            }

        
        
    },

    // Map of new blocks
    blocks: {},

    // Map of new filters
    filters: {}
};