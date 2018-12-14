function isObject(obj) {
  if (typeof obj === 'object' && obj !== null && !Array.isArray(obj)) {
    return true;
  }

  return false;
}

function get(obj, selector, defaultValue = null) {
  const path = !Array.isArray(selector) ? selector.split('.').filter(p => p) : selector;

  if (!path.length) {
    return obj === undefined ? defaultValue : obj;
  }

  return get(obj[path.shift()], path, defaultValue);
}

/**
 * Map object from one key to another
 *
 * @param {object} obj
 * @param {object} mapping
 */
export default function map(obj, mapping) {
  if (!isObject(obj)) {
    throw new Error(`Unsupported type '${obj !== null ? typeof obj : null}' passed as an input.`);
  }

  if (!isObject(mapping)) {
    throw new Error(`Unsupported type '${obj !== null ? typeof obj : null}'  passed as a mapping.`);
  }

  let mappedObject = {};

  for (let [key, value] of Object.entries(mapping)) {
    mappedObject[key] = get(obj, value);
  }

  return mappedObject;
}
