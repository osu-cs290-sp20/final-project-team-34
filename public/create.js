var logContainer = document.getElementById("log-container");
var logNumber = document.getElementById("log-number");
var fields = document.getElementsByClassName("log-field");
var submit = document.getElementById("btn-submit");

submit.addEventListener("click", function() {
  console.log(getFieldValues(fields));
  console.log(getFieldNames(fields));

  var json = getLogJSON(fields);
  submit.insertAdjacentHTML('afterEnd', Handlebars.templates.default(json));
  addToDB(json);
});

function addToDB(logObject) {
  str = JSON.stringify(logObject)
  console.log(str);

  var options = {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    data: str,
    url: '/api/logs/add'
  };
  axios(options)
    .then( (res) => {
      window.location.href="/logs";
    });
}

function getLogJSON(fields) {
  var fieldNames = getFieldNames(fields);
  var fieldValues = getFieldValues(fields);

  var log = "{\n";
  var log = log + '"logNumber":' + logNumber.textContent.split(" ")[1];
  for (var i=0; i < fields.length; i++) {
    log = log + ",\n"
    log = log + '"' + fieldNames[i] + '":"' + fieldValues[i] + '"';
  }
  log = log + "\n}";

  var json = JSON.parse(log);
  console.log(json);
  return json;
}

function getFieldNames(fields) {
  var fieldNames = [];
  for (var i=0; i < fields.length; i++) {
    var parent = fields.item(i).parentNode;
    var fieldName = parent.textContent;
    fieldName = fieldName.toLowerCase().trim();
    fieldName = fieldName.split(" ")[0].replace(':','');
    fieldNames.push(fieldName);
  }
  return fieldNames;
}

function getFieldValues(fields) {
  var fieldValues = [];
  for (var i=0; i < fields.length; i++) {
    fieldValues.push(fields.item(i).value);
  }
  return fieldValues;
}
