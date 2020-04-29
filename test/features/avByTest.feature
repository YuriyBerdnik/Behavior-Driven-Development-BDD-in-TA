@all
Feature: av.by base & search page testing

    @one
    Scenario: Check title start page and advanced search page url
        Given I open "Home" page
        Then Page title should be "av.by — купить, продать авто в Беларуси. Автомобили новые и с пробегом на Автомалиновке."
        When I click on Advanced search button
        Then I wait while Advanced search form appears with url "https://cars.av.by/search/extended?brand_id%5B%5D=&model_id%5B%5D=&year_from=&year_to=&currency=USD&price_from=&price_to="
