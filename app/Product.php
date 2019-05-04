<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    // change default id for product
    protected $primaryKey = 'product_id';

    //fields to mass assignment
    protected $fillable = ['name', 'price', 'image', 'retailer_id', 'description'];


    // 1-n relationship with retailer
    public function retailer()
    {
        return $this->belongsTo(Retailer::class, 'retailer_id', 'retailer_id');
    }

}
