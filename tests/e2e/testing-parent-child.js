module.exports = {
  'Testeo e2e entre los componentes Parent y Child': function (browser) {
    browser
      .url('http://localhost:8080/parent')
      .waitForElementVisible('#app', 5000)
      .setValue('input[type=text]', 'HOLA COMPONENTE!')
      .click('button[type=submit]')
      .waitForElementVisible('h1', 5000)
      .assert.textContains('h1', 'Contenido recibido: HOLA COMPONENTE!')
      .end();
  }
};