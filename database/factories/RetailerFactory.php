<?php

use Faker\Generator as Faker;

$factory->define(App\Retailer::class, function (Faker $faker) {
    return [
        'name' => $this->faker->company,
        'logo' => $this->faker->image('public\images\retailers',400,300, null, false),
        'description' => $this->faker->text($maxNbChars = 200),
        'site' => $this->faker->url 
    ];
});
