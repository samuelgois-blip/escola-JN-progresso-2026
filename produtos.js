const pessoa = {
 nome: "marilia",
 idade: 28,
 cidade: "piripiri",




}
for (let chave in pessoa) {
  console.log(`${chave}:${pessoa[chave]}`)


  }
  console.log(Object.keys(pessoa) );
  console.log(Object.values(pessoa) );
  console.log(Object.entries (pessoa) );
  

