export class DataManager {
  FieldNames = [];
  data = [];
  constructor(dataJSON) {
    this.JSON = dataJSON;
    this.Titles = Object.getOwnPropertyNames(dataJSON[0]);
  }

  formatTitleToField = (str) => {
    var fieldName = str.replace(/[^a-zA-Z]/g, "");
    fieldName = fieldName.toLowerCase();
    return fieldName;
  };

  getColumns = () => {
    this.Titles.map((title) => {
      var obj = { title: title, field: this.formatTitleToField(title) };
      this.FieldNames.push(obj);
    });
    return this.FieldNames;
  };

  getData = () => {
    this.JSON.map((json) => {
      var tempData = {};
      this.Titles.map((title) => {
        tempData[this.formatTitleToField(title)] = json[title];
      });
      this.data.push(tempData);
    });

    return this.data;
  };
}
