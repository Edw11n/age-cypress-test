const casosDePrueba = [
    { nombre: 'Ana',   apellido: 'Gomez',   sexo: 'F', fecha: '1995-05-20' },
    { nombre: 'Luis',  apellido: 'Martínez',sexo: 'M', fecha: '1980-12-01' },
    { nombre: 'María', apellido: 'López',   sexo: 'F', fecha: '2001-07-15' },
    { nombre: 'Carlos',apellido: 'Ruiz',    sexo: 'M', fecha: '1990-03-30' },
    { nombre: 'Laura', apellido: 'Santos',  sexo: 'F', fecha: '1975-11-11' },
    { nombre: 'Pedro', apellido: 'Pérez',   sexo: 'M', fecha: '1988-09-09' },
    { nombre: 'Sofía', apellido: 'Ramírez', sexo: 'F', fecha: '2005-01-25' },
    { nombre: 'Jorge', apellido: 'Castro',  sexo: 'M', fecha: '1992-04-04' },
    { nombre: 'Elena', apellido: 'Morales', sexo: 'F', fecha: '1985-06-06' },
    { nombre: 'Diego', apellido: 'Flores',  sexo: 'M', fecha: '2000-10-10' }
  ];
  
  describe('Formulario de edad (Cypress) - 10 casos', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    casosDePrueba.forEach((caso, idx) => {
      it(`Caso ${idx + 1}: ${caso.nombre} ${caso.apellido}`, () => {
        cy.get('input[name=nombre]').clear().type(caso.nombre);
        cy.get('input[name=apellido]').clear().type(caso.apellido);
        cy.get('select[name=sexo]').select(caso.sexo);
        cy.get('input[name=fecha]').clear().type(caso.fecha);
        cy.get('#btnCalcular').click();
  
        cy.get('#resultado-js', { timeout: 10000 })
          .should('contain', `Nombre: ${caso.nombre} ${caso.apellido}`)
          .and('contain', `Sexo: ${caso.sexo}`);
  
        cy.get('#resultado-js', { timeout: 10000 })
          .invoke('text')
          .should(text => {
            const normalized = text.replace(/\s+/g, ' ');
            expect(normalized).to.match(/Edad: \d+ años, \d+ meses y \d+ días/);
          });
      });
    });
  });
  