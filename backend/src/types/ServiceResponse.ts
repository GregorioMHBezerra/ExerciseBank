export type ServiceResponseError = {
  type: string,
  data: { message: string }
};

export type ServiceResponseSuccess<T> = {
  type: null,
  data: T
};

export type ServiceResponse<T> = ServiceResponseError | ServiceResponseSuccess<T>;
