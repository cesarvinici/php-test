<?php

use Faker\Generator as Faker;

$factory->define(App\Product::class, function (Faker $faker) {
    return [
        'Name' => str_random(20),
        'Image' => $this->faker->image('images',400,300),
        'Price' => $this->faker->randomNumber(2),
        'Description' => $this->faker->text($maxNbChars = 200),
        'retailer_id' => $faker->NumberBetween($min = 1, $max = 30),
    ];
});
