<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\DatabaseTransactions;

use Faker\Factory as Faker;

class RetailerTest extends TestCase
{
    //use RefreshDatabase;
    use DatabaseTransactions;

    protected $faker;
    protected $retailer;

    /**
     * return all retailers
     * 
     * @return void
     */

    public function testGetRetailers()
    {
        $response = $this->json('GET', '/api/retailers');
        $response->assertStatus(200);
    }

    /**
     * test add retailer
     * @return void
     */
    public function testCreateRetailer()
    {
        $retailer = factory(\App\Retailer::class)->raw();
        $response = $this->post('api/retailers', $retailer);
        $response->assertStatus(200);
    }

    /**
     * test get one retailer
     * @return void
     */
    public function testGetRetailer()
    {
        $response = $this->json('GET', 'api/retailers/10');
        $response->assertStatus(200);
    }


    public function testRetailerNotFound()
    {
        $response = $this->json('GET', 'api/retailers/1000');
        $response->assertStatus(404)->assertJson(['message' => 'Retailer not found!']);
    }


}
