<?php

use Illuminate\Database\Seeder;

class RetailerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(\App\Retailer::class, 30)->create();
    }
}
