const { expect } = require('chai');
const { calcularEdad } = require('../routes/form');

describe('Calcular Edad (lógica)', () => {
  it('debe calcular edad correctamente', () => {
    const result = calcularEdad('2000-01-01');
    expect(result).to.have.keys(['años','meses','dias']);
    expect(result.años).to.be.a('number');
  });
});
