module.exports = {
    // Map of hooks
    hooks: {
        

      "page:before": function(page) {
          page.content = "# Title\n" +page.content;
          return page;
      }

        
        
    },

    // Map of new blocks
    blocks: {},

    // Map of new filters
    filters: {}
};