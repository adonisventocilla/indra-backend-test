import { formatJSONResponse, ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway"
import { middyfy } from "@libs/lambda"
import { ISwapiStarshipsResponse } from "src/common/interfaces/swapi-starships-response.interface"
import { container } from "src/config/inversify.config"
import { SwapiService } from "src/services/external/swapi.service"

import schema from "./get-swapi-starships.schema"

const handler: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async () => {
  const swapiService = container.get(SwapiService)

  const response: ISwapiStarshipsResponse = await swapiService.getTranslatedStarships()

  return formatJSONResponse({
    data: response
  })
}

export const main = middyfy(handler)
