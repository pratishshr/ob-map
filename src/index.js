function isObject(obj) {
  if (typeof obj === 'object' && obj !== null && !Array.isArray(obj)) {
    return true;
  }

  return false;
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
    mappedObject[key] = obj[value] || null;
  }

  return mappedObject;
}
