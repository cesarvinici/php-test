<?php

namespace App\Http\Controllers;

use App\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
       $products = Product::with('retailer')->orderBy('product_id', 'desc')->get();
       return response()->json(['products' => $products], 200);

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try
        {
            $product = Product::create($request->except("image"));
            if($request->hasFile('image')) 
            {
                $imagem = $request->file('image');
                $nomearquivo  = $product->product_id.".". $imagem->getClientOriginalExtension();
                $request->file('image')->move(public_path('/images/products'), $nomearquivo);
                $product->Image = $nomearquivo;  
                $product->save();           
            }          
                
            return response()->json(['message' => 'Product successfully added!', 'class' => 'success'], 200);
        }
        catch(\Exception $e)
        {
            return response()->json(['message' => 'Oops, something went wrong. Try again!'. $e], 404);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $product = Product::with('retailer')->find($id);

        if($product)
            return response()->json(['product' => $product], 200);

        return response()->json(['message' => 'Not found!'], 404);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        //
    }


    public function sendEmail(Request $request)
    {
        return response()->json(['message' => 'ok']);
    }


}
