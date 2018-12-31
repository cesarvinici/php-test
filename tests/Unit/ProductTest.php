<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\DatabaseTransactions;

use Faker\Factory as Faker;

class ProductTest extends TestCase
{
    //use RefreshDatabase;
    use DatabaseTransactions;

    
    /**
     * Test add product to database
     * @return void
     */
    public function testCreateProduct()
    {
        $product = factory(\App\Product::class)->raw();    
        $response = $this->post('api/products', $product);
        $response->assertStatus(200)->assertJson(['message' => 'Product successfully added!', 'class' => 'success']);
    }


    /**
     * test return all the products
     * @return void
     */
    public function testGetAllProducts()
    {
        $response = $this->json("GET", '/api/products');
        $response->assertStatus(200);
    }



}
