const Ajv = require('ajv');

const ajv = new Ajv();
const accountSchema = {
  "type": "object",
  "properties": {
    "Firstname": {
        "type": "string"
    },
    "Lastname": { "type": "string" }
  },
  "required": [ "Firstname", "Lastname" ]
}

function isAccountValid(accountToTest) {
  const validate = ajv.compile(accountSchema);

  return validate(accountToTest);
}

module.exports = { isAccountValid };