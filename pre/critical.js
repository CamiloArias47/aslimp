const critical = require('critical')

const SRC = {
    home : 'index.html',
    category : 'category.html',
    product : 'product.html'
},

OUTPUT = {
    home : 'critical-index.css',
    category : 'critical-category.css',
    product : 'critical-product.css'
},

DEVICE = {
    mobile : {width:360, height:640},
    desktop: {width:1200, height:800}
}
    



critical.generate({
    // Inline the generated critical-path CSS
    // - true generates HTML
    // - false generates CSS
    inline: false,
  
    // Your base directory in which source and destination
    base: 'pre/critical-src',
  
    // HTML source in string, all your page
    // html: '<html>...</html>',
  
    // HTML source file
    src: SRC[process.argv[2]],
  
    // Your CSS Files (optional)
    css: ['themes/aslimp/assets/aslimp/dist/main.css_5c99d70a7725bacd4c701e995b969fea.css','themes/aslimp/static/css/aslimp.css'],
  
    // Viewport width
    width: DEVICE[process.argv[3]].width,
  
    // Viewport height
    height: DEVICE[process.argv[3]].height,
  
    // Output results to file
    target: {
      css: process.argv[3]+"-"+OUTPUT[process.argv[2]],
    },
  
    // Extract inlined styles from referenced stylesheets
    //extract: true,
  });