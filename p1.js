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

function GLtrat(k) { return k-1; }

function GLerr(N, k) { 
  return N-k;
}

function GLtot(N) { return N-1; }

function SCtrat(yi, ni, y, N) {
  let suma = 0;
  
  for(let i in yi) {
    suma += (yi[i]**2)/ni;
  }

  return suma - ((y**2)/N);
}

function SCtot(yic, y, N) {
  return sumatoria(yic) - (y**2)/N;
}

function SCerr(SCtot, SCtrat) { 
  return SCtot - SCtrat;
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

let datos = [
  [6, 5, 12, 9, 10],     // A
  [14, 11, 0, 5, 6],     // B
  [-5, -4, -5, -11, -7], // C
  [-8, -11, -5, -7, -9]  // D
];

let ni = 5;
let y = 6;
let k = 4;
let N = 20;

let gltrat = GLtrat(k);
let gltot = GLtot(N);
let glerr = GLerr(N, k);

let sctrat = SCtrat(yi(datos), ni, y, N);

let sctot = SCtot(yic(datos), y, N);

let scerr = SCerr(sctot, sctrat);

let cmtrat = CMtrat(sctrat, gltrat);

let cmerr = CMerr(scerr, glerr);

let f = Fisher(cmtrat, cmerr);

console.log(f);
