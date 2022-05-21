function Azar(){
  let salida:number =  Math.round(Math.random() * 100);
  return salida;
};

let arrayNumAleatorios:number[] = new Array(10);
let indice:number;

for (indice=0; indice < arrayNumAleatorios.length; indice++){
  arrayNumAleatorios[indice]=Azar();
}

console.log(arrayNumAleatorios);