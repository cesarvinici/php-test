<?php

use Faker\Generator as Faker;

$factory->define(App\Retailer::class, function (Faker $faker) {
    return [
        'Name' => $this->faker->company,
        'Logo' => $this->faker->image('images',400,300),
        'Description' => $this->faker->text($maxNbChars = 200),
        'WebSite' => $this->faker->url 
    ];
});
