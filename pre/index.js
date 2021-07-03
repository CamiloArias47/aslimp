const sharp = require('sharp');
const fs = require('fs');
const path = require('path')
const projectPath = path.dirname(__dirname)
const directory = path.join(projectPath, '/static/images')

//recorte lista categorias en el home 
fs.readdirSync(directory+"/categorias").forEach(file => {
    if( !(file.includes("-D43y-header-small.") || 
          file.includes("-D43y-header-medium.") || 
          file.includes("-D43y-header-big.") || 
          file.includes("-D43y-header-xl.") ||
          file.includes("-D43y-small.") || 
          file.includes("-D43y-medium.")) 
    ){

        sharp(`${directory}/categorias/${file}`)
          .resize(156, 108) // width, height
          .toFile(`${directory}/categorias/${file}-D43y-small.jpg`);

        sharp(`${directory}/categorias/${file}`)
          .resize(349, 236) // width, height
          .toFile(`${directory}/categorias/${file}-D43y-medium.jpg`);
    }
});

//recortes para las categorias pagina, imagen principal de la cabecera
fs.readdirSync(directory+"/categorias").forEach(file => {
  if( !(file.includes("-D43y-header-small.") || 
        file.includes("-D43y-header-medium.") || 
        file.includes("-D43y-header-big.") || 
        file.includes("-D43y-header-xl.") ||
        file.includes("-D43y-small.") || file.includes("-D43y-medium.") ) 
  ){

      sharp(`${directory}/categorias/${file}`)
        .resize(350, 180) // width, height
        .toFile(`${directory}/categorias/${file}-D43y-header-small.jpg`);

      sharp(`${directory}/categorias/${file}`)
        .resize(600, 180) // width, height
        .toFile(`${directory}/categorias/${file}-D43y-header-medium.jpg`);

      sharp(`${directory}/categorias/${file}`)
        .resize(960, 180) // width, height
        .toFile(`${directory}/categorias/${file}-D43y-header-big.jpg`);

      sharp(`${directory}/categorias/${file}`)
        .resize(1200, 475) // width, height
        .toFile(`${directory}/categorias/${file}-D43y-header-xl.jpg`);
  }
});

//recorte lista home-welcome en el home 
fs.readdirSync(directory+"/home-welcome").forEach(file => {
  if( !(file.includes("-D43y-header-small.") || 
        file.includes("-D43y-header-medium.") || 
        file.includes("-D43y-header-big.") || 
        file.includes("-D43y-header-xl.")  ) 
  ){

      sharp(`${directory}/home-welcome/${file}`)
        .resize(350, 180) // width, height
        .toFile(`${directory}/home-welcome/${file}-D43y-header-small.jpg`);

      sharp(`${directory}/home-welcome/${file}`)
        .resize(600, 180) // width, height
        .toFile(`${directory}/home-welcome/${file}-D43y-header-medium.jpg`);

      sharp(`${directory}/home-welcome/${file}`)
        .resize(960, 180) // width, height
        .toFile(`${directory}/home-welcome/${file}-D43y-header-big.jpg`);

      sharp(`${directory}/home-welcome/${file}`)
        .resize(1200, 475) // width, height
        .toFile(`${directory}/home-welcome/${file}-D43y-header-xl.jpg`);
  }
});


//recorte productos
fs.readdirSync(directory+"/productos").forEach(file => {
  if( !(file.includes("-D43y-scroll.") || 
        file.includes("-D43y-mscroll.") || 
        file.includes("-D43y-bscroll.") || 
        file.includes("-D43y-xlscroll.") || 
        file.includes("-D43y-thumbxs.") || 
        file.includes("-D43y-thumbSmall.") || 
        file.includes("-D43y-small.") ||
        file.includes("-D43y-medium.") || 
        file.includes("-D43y-medium+.") || 
        file.includes("-D43y-big.") ) 
  ){
      //recorte lista productos en el home 
      sharp(`${directory}/productos/${file}`)
        .resize(179, 250) // width, height
        .toFile(`${directory}/productos/${file}-D43y-scroll.jpg`);
      
      sharp(`${directory}/productos/${file}`)
        .resize(216, 250) // width, height
        .toFile(`${directory}/productos/${file}-D43y-mscroll.jpg`);
      
      sharp(`${directory}/productos/${file}`)
        .resize(230, 250) // width, height
        .toFile(`${directory}/productos/${file}-D43y-bscroll.jpg`);
      
      sharp(`${directory}/productos/${file}`)
        .resize(500, 543) // width, height
        .toFile(`${directory}/productos/${file}-D43y-xlscroll.jpg`);
      
      //recorte productos detalles mobile
      sharp(`${directory}/productos/${file}`)
        .resize(120, 120) // width, height
        .toFile(`${directory}/productos/${file}-D43y-thumbxs.jpg`);
      
      sharp(`${directory}/productos/${file}`)
        .resize(220, 220) // width, height
        .toFile(`${directory}/productos/${file}-D43y-thumbSmall.jpg`);

      sharp(`${directory}/productos/${file}`)
        .resize(400, 400) // width, height
        .toFile(`${directory}/productos/${file}-D43y-small.jpg`);

      sharp(`${directory}/productos/${file}`)
        .resize(500, 500) // width, height
        .toFile(`${directory}/productos/${file}-D43y-medium.jpg`);

      sharp(`${directory}/productos/${file}`)
        .resize(800, 800) // width, height
        .toFile(`${directory}/productos/${file}-D43y-medium+.jpg`);
      
      sharp(`${directory}/productos/${file}`)
        .resize(1000, 1000) // width, height
        .toFile(`${directory}/productos/${file}-D43y-big.jpg`);

  }
});

//recorte lista logo
fs.readdirSync(directory+"/logos").forEach(file => {
  if( file.includes("Aslimp2.png") ){

      sharp(`${directory}/logos/${file}`)
        .resize(268, 78) // width, height
        .toFile(`${directory}/logos/${file}-D43y-croped.png`);
  }
});
