class DateUtils {
  static getDate(string) {
    try {
      const regExp = /\d{2}(\D)\d{2}\1\d{4}/g;

      const datesArray = string.match(regExp);

      const search = /\/|-/g;

      const resultString = datesArray.map((el) => el.replaceAll(search, '/')).join(', ');

      return resultString;
    } catch (error) {
      return '';
    }
  }

  static getFormattedNowDate() {
    const now = new Date();

    const dataFormat = new Intl.DateTimeFormat('en-UK');

    return dataFormat.format(now);
  }
}

export default DateUtils;
