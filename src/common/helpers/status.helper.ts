import { IHttpResponse } from "src/common/interfaces/http-response.interface"

export class StatusHelper {
  static responseIsSuccess(response: IHttpResponse) {
    return [200, 201].includes(response.status)
  }
}
