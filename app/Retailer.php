<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Retailer extends Model
{
    protected $primaryKey = 'retailer_id';

    //fields to mass assignment
    protected $fillable = ['name', 'logo', 'description', 'site'];

    public function products()
    {
        return $this->hasMany(Product::class, 'retailer_id', 'retailer_id');
    }


}
