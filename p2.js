function sumatoria(valores) {
  let suma = 0;

  for(let valor of valores) {
    suma += valor;
  }

  return suma;
}

function sumatoriaC(valores) {
  let suma = 0;

  for(let valor of valores) {
    suma += valor**2;
  }

  return suma;
}

///////////////////////////////////

function yi(valores) {
  let v = [];
  
  for(let valor of valores) {
    v.push(sumatoria(valor));
  }

  return v;
}

function yic(valores) {
  let v = [];
  
  for(let valor of valores) {
    v.push(sumatoriaC(valor));
  }

  return v;
}
/*
///////////////////////////////////

function GLtrat(k) { return k-1; }

function GLerr(N, k, b) { 
  return (k-1)*(b-1);
}

function GLtot(N) { return N-1; }

function GLbloq(b) { return b-1; }

function SCtrat(yi, b, N) {
  let suma = 0;
  
  for(let i in yi) {
    suma += (yi[i]**2)/ni - yi[i]**2)/N;
  }

  return suma - ((y**2)/N);
}

function SCtot(yic, y, N) {
  return sumatoria(yic) - (y**2)/N;
}

function SCbloq() {
  
}

function SCerr(SCtot, SCtrat, SCbloq) { 
  return SCtot - SCtrat - SCbloq;
}

function CMtrat(SCtrat, GLtrat) {
  return SCtrat/GLtrat;
}

function CMerr(SCerr, GLerr) {
  return SCerr/GLerr;
}

function Fisher(CMtrat, CMerr) {
  return CMtrat/CMerr;
}

function DMSH() {}
*/

let datos = [
  [22, 25, 26, 26], // L
  [26, 27, 29, 28], // M
  [25, 28, 33, 27], // M
  [25, 26, 30, 30], // J
  [31, 29, 33, 30], // V
];

let y = 6;
let k = 5;
let b = 4;
let N = 20;

console.log(yic(datos));
