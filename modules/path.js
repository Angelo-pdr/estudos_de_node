const path = require("path")

// Apenas o nome do arquivo atual
console.log("Apenas o nome do arquivo atual: " + path.basename(__filename))

//O nome do diretorio Atual
console.log("O nome do diretorio Atual: " + path.dirname(__filename))

//Extensao do arquivo
console.log( "Extensao do arquivo: " + path.extname(__filename))

//Criar Objeto Path
console.log( path.parse(__filename))

//Juntar caminhos de arquivos
console.log( "Juntar caminhos de arquivos: " + path.join(__dirname, "teste", "test.html"))