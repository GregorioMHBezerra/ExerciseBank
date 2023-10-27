const PACKAGE_NOT_FOUND = 'PACKAGE_NOT_FOUND';
const UNAUTHORIZED = 'UNAUTHORIZED';
const INVALID_DATA = 'INVALID_DATA';
const UNPROCESSABLE = 'UNPROCESSABLE';

const errorMap: Record <string, number> = {
  [PACKAGE_NOT_FOUND]: 404,
  [UNAUTHORIZED]: 401,
  [INVALID_DATA]: 400,
  [UNPROCESSABLE]: 422,
};

const mapError = (type: string): number => errorMap[type] || 500;

export {
  errorMap,
  mapError,
};
