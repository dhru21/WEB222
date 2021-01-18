/* global  ui, util */

window.onload = function () {
  /**
   * Register click handlers for every menu item in the page.  Use the objects
   * and functions defined in the other JavaScript files to update/populate
   * the #table-rows table body with the appropriate set of countries, based on the
   * menu item clicked, specifically:
   *
   *  - countriesData array of country data Objects
   *  - util methods for working with the country data
   *  - ui methods for working with the DOM
   *
   * Make sure you also update the #subtitle heading to properly reflect what
   * is in the table after you populate it.
   *
   * For example: "List of Countries and Dependencies - Population between 1 and 2 million"
   * or "List of Countries and Dependencies - All countries in Asia" etc.
   */
  document.querySelector('#menu_english').addEventListener('click', function () {
    ui.countriesToTable(util.countriesByLanguage('English'), 'English');
    document.querySelector('#subtitle').textContent =
      'List of Countries and Dependencies in English';
  });
  document.querySelector('#menu_arabic').addEventListener('click', function () {
    ui.countriesToTable(util.countriesByLanguage('Arabic'), 'Arabic');
    document.querySelector('#subtitle').textContent =
      'List of Countries and Dependencies in Arabic';
  });
  document.querySelector('#menu_chinese').addEventListener('click', function () {
    ui.countriesToTable(util.countriesByLanguage('Chinese'), 'Chinese');
    document.querySelector('#subtitle').textContent =
      'List of Countries and Dependencies in Chinese';
  });
  document.querySelector('#menu_french').addEventListener('click', function () {
    ui.countriesToTable(util.countriesByLanguage('French'), 'French');
    document.querySelector('#subtitle').textContent =
      'List of Countries and Dependencies in French';
  });
  document.querySelector('#menu_hindi').addEventListener('click', function () {
    ui.countriesToTable(util.countriesByLanguage('Hindi'), 'Hindi');
    document.querySelector('#subtitle').textContent = 'List of Countries and Dependencies in Hindi';
  });
  document.querySelector('#menu_korean').addEventListener('click', function () {
    ui.countriesToTable(util.countriesByLanguage('Korean'), 'Korean');
    document.querySelector('#subtitle').textContent =
      'List of Countries and Dependencies in Korean';
  });
  document.querySelector('#menu_japanese').addEventListener('click', function () {
    ui.countriesToTable(util.countriesByLanguage('Japanese'), 'Japanese');
    document.querySelector('#subtitle').textContent =
      'List of Countries and Dependencies in Japanese';
  });
  document.querySelector('#menu_russian').addEventListener('click', function () {
    ui.countriesToTable(util.countriesByLanguage('Russian'), 'Russian');
    document.querySelector('#subtitle').textContent =
      'List of Countries and Dependencies in Russian';
  });

  document.querySelector('#menu_population_100_000_000m').addEventListener('click', function () {
    ui.countriesToTable(util.countriesByPopulation(100000000));
    document.querySelector('#subtitle').textContent =
      'List of Countries and Dependencies - Population greater than 100 million';
  });
  document.querySelector('#menu_population_1m_2m').addEventListener('click', function () {
    ui.countriesToTable(util.countriesByPopulation(1000000, 2000000));
    document.querySelector('#subtitle').textContent =
      'List of Countries and Dependencies - Population between 1 and 2 million';
  });
  document.querySelector('#menu_americas_1mkm').addEventListener('click', function () {
    ui.countriesToTable(util.countriesByAreaAndContinent('Americas', 1000000));
    document.querySelector('#subtitle').innerHTML =
      'List of Countries and Dependencies - All countries in Americas with area greater than 1 million km<sup>2</sup';
  });
  document.querySelector('#menu_asia_all').addEventListener('click', function () {
    ui.countriesToTable(util.countriesByAreaAndContinent('Asia', 0));
    document.querySelector('#subtitle').textContent =
      'List of Countries and Dependencies - All countries in Asia';
  });
};
