import { ApiResponseTypes } from '_common/types/response';

export class ApiResponse {
  /**
   * Generates standard api response body on success,
   *  by autofilling some of the unspecified fields
   *
   * @static
   * @param {(any[] | object | null)} [data=null]
   * @param {*} [meta={}]
   * @param {(string | null)} [message=null]
   * @param {boolean} [success=true]
   * @param {number} [statusCode=200]
   * @return {IApiSuccessResponseBody}  IApiSuccessResponseBody
   * @memberof ApiResponse
   */
  static success(
    data: any[] | object | null = null,
    meta: object | null = null,
    message: string | null = null,
    statusCode: number = 200
  ): ApiResponseTypes.SuccessResponseBody {
    return {
      success: true,
      statusCode,
      ...(message && { message }),
      data,
      meta,
    };
  }

  /**
   * Generates standard error body response
   *
   * @static
   * @param {(string | any[])} [errors=[]]
   * @param {number} [statusCode=500]
   * @param {string} errorCode
   * @return {*}
   * @memberof ApiResponse
   */
  static error(
    error: string,
    statusCode: number = 500,
    errorCode: string
  ): ApiResponseTypes.ErrorResponseBody {
    return {
      success: false,
      statusCode,
      errorCode,
      error,
    };
  }
}
