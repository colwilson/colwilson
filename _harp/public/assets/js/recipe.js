/*
Language: Recipe
Category: common
*/

hljs.registerLanguage("recipe", 



  function(hljs) {
    var NUMBER = {
      className: 'literal', relevance: 0,
      variants: [
        {begin: '\[0-9]+\/[0-9]+'},
        {begin: hljs.C_NUMBER_RE},
      ]
    };

    return {
      keywords: 'tbsp tsp cup pinch tin',
      contains: [
        NUMBER
      ]
    };
  }

);