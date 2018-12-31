<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    //Campos para mass assignment
    protected $fillable = ['Name', 'Price', 'Image', 'retailer_id', 'Description'];


    // 1-n relationship with retailer
    public function retailer()
    {
        return $this->belongsTo(Retailer::class);
    }

}
