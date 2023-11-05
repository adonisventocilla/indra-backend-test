Feature: Starship Module - Obtener información de una nave espacial

  Scenario: Obtener detalles de una nave espacial sin usar parámetros
    Given que el usuario quiere obtener detalles de una nave espacial
    When se hace una solicitud para obtener la información de la nave espacial
    Then se debe recibir la información de las naves espaciales
