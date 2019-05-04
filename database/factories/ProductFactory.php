<?php

use Faker\Generator as Faker;

$factory->define(App\Product::class, function (Faker $faker) {
    return [
        'name' => str_random(20),
        'image' => $this->faker->image('public\images\products',400,300, null, false),
        'price' => $this->faker->randomNumber(2),
        'description' => $this->faker->text($maxNbChars = 200),
        'retailer_id' => $faker->NumberBetween($min = 1, $max = 30),
    ];
});
