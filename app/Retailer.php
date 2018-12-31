<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Retailer extends Model
{
    // Informa ao laravel que dentro de um array estes campos serão adicionados diretamente à base de dados.
    protected $fillable = ['Name', 'Logo', 'Description', 'WebSite'];

    public function products()
    {
        return $this->hasMany(Product::class);
    }


}
