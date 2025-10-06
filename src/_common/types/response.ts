export namespace ApiResponseTypes {
  export type BaseResponseBody = {
    success: boolean;
    statusCode: number;
  };

  export type SuccessResponseBody = BaseResponseBody & {
    data: any;
    message?: string;
    meta?: ResponseMeta | null;
  };

  export type ErrorResponseBody = BaseResponseBody & {
    errorCode?: string;
    error?: string | any[];
  };

  export type ResponseMeta = {
    requestId?: string;
    pagination?: ResponseMetaPagination;
  };

  export type ResponseMetaPagination = {
    page?: number;
    pageSize?: number;
    totalItems?: number;
    totalPages?: number;
  };
}
