import { Given, When, Then } from "@cucumber/cucumber"
import { expect } from "chai"
import { SwapiService } from "../../../src/services/external/swapi.service"

let starshipInfo: any

Given("que el usuario quiere obtener detalles de una nave espacial", () => {})

When("se hace una solicitud para obtener la información de la nave espacial", () => {
  starshipInfo = new SwapiService().getStarships()
})

Then("se debe recibir la información de las naves espaciales", () => {
  expect(starshipInfo).to.exist
})
