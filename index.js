var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, object[key] = value);
}

function destructivelyUpdateObjetWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

