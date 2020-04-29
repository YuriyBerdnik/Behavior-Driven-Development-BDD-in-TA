@all
Feature: av.by brand car title testing

    @two
    Scenario Outline: Title a car with name <name>
        Given I open "<url>" url
        Then Page title should be "<title>"

        Examples:
            | name  | url                      | title                                                                                                                                                                                                            |
            | BMW   | https://cars.av.by/bmw   | BMW (БМВ) купить в Беларуси - цены, отзывы, характеристики, фото. Объявления о продаже BMW (БМВ) на Автомалиновке.             |
            | Kia   | https://cars.av.by/kia   | Kia (Киа) купить в Беларуси - цены, отзывы, характеристики, фото. Объявления о продаже Kia (Киа) на Автомалиновке.             |
            | Skoda | https://cars.av.by/skoda | Skoda (Шкода) купить в Беларуси - цены, отзывы, характеристики, фото. Объявления о продаже Skoda (Шкода) на Автомалиновке. |
