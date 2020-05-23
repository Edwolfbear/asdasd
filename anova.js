class ANOVA {
  constructor(datos) {
    this.datos = datos;
    this.k = datos.length;
    this.ni = [];
    this.y = 0.0;
    this.gltrat = 0.0;
    this.gltotl = 0.0;
    this.glerr = 0.0;
    this.sctrat = 0.0;
    this.sctotl = 0.0;
    this.scerr = 0.0;
    this.cmtrat = 0.0;
    this.cmerr = 0.0;
    this.fisher = 0.0;*/
  }

  sumatoria(datos) {
    let suma = 0;

    for(let dato of datos) {
      suma += dato;
    }

    return suma;
  }

  sumatoriaC(datos) {
    let suma = 0;

    for(let dato of datos) {
      suma += dato**2;
    }

    return suma;
  }

  getNI() {
    let v = [];
  
    for(let dato in this.datos) {
      v.push(dato.length);
    }

    return v;
  }
  
  yi() {
    let v = [];
  
    for(let dato of this.datos) {
      v.push(sumatoria(dato));
    }

    return v;
  }

  yic() {
    let v = [];
  
    for(let dato of this.datos) {
      v.push(sumatoriaC(dato));
    }

    return v;
  }

  GLtrat() { return this.k-1; }
  GLerr() { return this.N-this.k; }
  GLtot() { return this.N-1; }

  SCtrat() {
    let suma = 0;
  
    for(let valor of this.yi()) {
      suma += (valor**2)/this.ni;
    }

    return suma - ((this.y**2)/this.N);
  }

  SCtot() {
    return sumatoria(this.yic()) - (this.y**2)/this.N;
  }

  SCerr() { 
    return this.sctotl - this.sctrat;
  }

  CMtrat() {
    return this.sctrat/gltrat;
  }

  CMerr() {
    return this.scerr/this.glerr;
  }

  Fisher(CMtrat, CMerr) {
    return this.cmtrat/this.cmerr;
  }  

  DMSH() {}

  resuelve() {
    getNI();
  }
}

let datos = [
  [1,3,6,3,7],
  [1,5,7,3,4],
  [4,6,3,8,6],
  [3,5,7,4,4]
];

let tabla = new ANOVA(datos);

console.log();
