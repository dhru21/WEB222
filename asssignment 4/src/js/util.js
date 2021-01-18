/*global countriesData*/
/**
 * Helper object for working with countries data and extracting information.
 * See countries-data.js for format of the countries data set.
 */

// eslint-disable-next-line no-unused-vars
const util = {
  /**
   * Given a language name, returns the 2-letter language code for this language.
   * Supports all of the following languages:
   *
   *  - English: "en"
   *  - Arabic: "ar"
   *  - Chinese: "zh"
   *  - French: "fr"
   *  - Hindi: "hi"
   *  - Korean: "ko"
   *  - Japanese: "ja"
   *  - Russian: "ru"
   *
   * If any other language is passed, return null
   *
   * For example:
   *
   * util.langCodeForLanguage('Korean') returns "ko"
   * util.langCodeForLanguage('German') returns null (i.e., not one of the supported languages)
   *
   * @param {String} language - the full language name
   */
  langCodeForLanguage(language) {
    if (language === 'English') {
      return 'en';
    } else if (language === 'Arabic') {
      return 'ar';
    } else if (language === 'Chinese') {
      return 'zh';
    } else if (language === 'French') {
      return 'fr';
    } else if (language === 'Hindi') {
      return 'hi';
    } else if (language === 'Korean') {
      return 'ko';
    } else if (language === 'Japanese') {
      return 'ja';
    } else if (language === 'Russian') {
      return 'ru';
    }
    return null;
  },

  /**
   * Formats a given number for display using the specified language.
   *
   * For example, given a number 652230 and language "Russian", return
   * the string:
   *
   * '652 230'
   *
   * Or if the language is "Hindi", return the string:
   *
   * '6,52,230'
   *
   * Your function should use util.langCodeForLanguage to map the language name to a language code.
   *
   * Use Intl.NumberFormat to generate the formatted numbers for each locale, see:
   *
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
   *
   * @param {Number} number - the number to format
   * @param {String} language - the language name to use
   */
  formatNumberForLanguage(number, language) {
    if (this.langCodeForLanguage(language)) {
      if (language === 'English') {
        return new Intl.NumberFormat('en-CA').format(number);
      } else if (language === 'Arabic') {
        return new Intl.NumberFormat('ar-EG').format(number);
      } else if (language === 'Chinese') {
        return new Intl.NumberFormat('zh-CN').format(number);
      } else if (language === 'French') {
        return new Intl.NumberFormat('fr-CA').format(number);
      } else if (language === 'Hindi') {
        return new Intl.NumberFormat('hi-IN').format(number);
      } else if (language === 'Korean') {
        return new Intl.NumberFormat('ko-KR').format(number);
      } else if (language === 'Japanese') {
        return new Intl.NumberFormat('ja-JP').format(number);
      } else if (language === 'Russian') {
        return new Intl.NumberFormat('ru-RU').format(number);
      }
    }
  },

  /**
   * Returns a copy of the given country Object with the name property switched
   * to the specified language, and numbers formatted for this language. For example,
   * if the following country object is passed:
   *
   * {
   *   code: 'AF',
   *   continent: 'Asia',
   *   areaInKm2: 652230,
   *   population: 35530081,
   *   capital: 'Kabul',
   *   name: {
   *     English: 'Afghanistan',
   *     Arabic: 'أفغانستان',
   *     Chinese: '阿富汗',
   *     French: 'Afghanistan',
   *     Hindi: 'अफ़ग़ानिस्तान',
   *     Korean: '아프가니스탄',
   *     Japanese: 'アフガニスタン',
   *     Russian: 'Афганистан'
   *   }
   * }
   *
   * And if the language parameter is "Korean", return the following new object:
   *
   * {
   *   code: 'AF',
   *   continent: 'Asia',
   *   areaInKm2: '652,230',
   *   population: '35,530,081'
   *   capital: 'Kabul',
   *   name: '아프가니스탄',
   * }
   *
   * NOTE: do not modify the original object.  Create and return a new one.
   *
   * You should support the following languages:
   *
   * English, Arabic, Chinese, French, Hindi, Korean, Japanese, Russian
   *
   * If any other language is passed, throw an error indicating that an unrecognized
   * language name was used.
   *
   * NOTE: you should call `util.formatNumberForLanguage` to format the areaInKm2
   * and population values for the given language.
   *
   * @param {Object} country - the country object to use
   * @param {String} language - the language name to use
   */
  countryForLanguage: function (country, language) {
    if (this.langCodeForLanguage(language)) {
      let newArr = {};

      newArr.code = country.code;
      newArr.continent = country.continent;
      newArr.areaInKm2 = country.areaInKm2;
      newArr.areaInKm2Formatted = util.formatNumberForLanguage(country.areaInKm2, language);
      newArr.population = country.population;
      newArr.populationFormatted = util.formatNumberForLanguage(country.population, language);
      newArr.capital = country.capital;

      for (let key in country.name) {
        if (key === language) {
          newArr.name = country.name[language];
        }
      }
      return newArr;
    }
    throw new Error('an unrecognized language name was used');
  },

  /**
   * Return an array of all countries, with the `name` property replaced by the
   * appropriate translation, or English if not specified (or unknown).  For
   * example, when language="English", you would process the Object for Canada into:
   *
   * {
   *     code: "CA",
   *     continent: "Americas",
   *     areaInKm2: "9,984,670",
   *     population: "36,624,199",
   *     capital: "Ottawa",
   *     name: "Canada"
   * }
   *
   * Supported languages include:
   *
   * English, Arabic, Chinese, French, Hindi, Korean, Japanese, Russian
   *
   * Uses `countriesData` as the underlying array of countries to be processed
   * and `util.countryForLanguage`.
   *
   * @param {String} language - the language name to use
   */
  countriesByLanguage: function (language) {
    let translated = [];
    for (let i = 0; i < countriesData.length; i++) {
      translated.push(Object.assign({}, countriesData[i]));
      if (language) {
        translated[i].name = countriesData[i].name[language];
        this.countryForLanguage(translated[i].name, language);
      } else translated[i].name = countriesData[i].name['English'];
    }
    return translated;
  },

  /**
   * Return an array of countries with a population greater than or equal to
   * `minPopulation`, and possibly less than equal to `maxPopulation` (if defined)
   * otherwise allow any number greater than `minPopulation`.
   *
   * Use `util.countriesByLanguage('English')` to get English names for countries
   * by default (i.e., you don't need to support multiple languages for population)
   *
   * @param {Number} minPopulation - (Required) minimum population value
   * @param {Number} maxPopulation - (Optional) maximum population value
   */
  countriesByPopulation: function (minPopulation, maxPopulation) {
    var newArr = [];
    var country = this.countriesByLanguage('English');
    for (var i = 0; i < country.length; i++) {
      if (maxPopulation) {
        if (country[i].population <= maxPopulation && country[i].population >= minPopulation)
          newArr.unshift(country[i]);
      } else {
        if (country[i].population >= minPopulation) newArr.unshift(country[i]);
      }
    }
    return newArr;
  },

  /**
   * Return an array of countries for the given `continent` with an area
   * greater than or equal to the given `area` in square KM.
   *
   * Use `util.countriesByLanguage('English')` to get English names for countries
   * by default (i.e., you don't need to support multiple languages for area)
   *
   * @param {String} continent - (Required) name of the continent (e.g., Europe)
   * @param {Number} minArea - (Required) minimum number of KM2 area
   */
  countriesByAreaAndContinent: function (continent, minArea) {
    var newArr = [];
    var country = this.countriesByLanguage('English');
    for (var i = 0; i < country.length; i++) {
      if (country[i].continent === continent) {
        if (country[i].areaInKm2 >= minArea) newArr.unshift(country[i]);
      }
    }
    return newArr;
  }
};
