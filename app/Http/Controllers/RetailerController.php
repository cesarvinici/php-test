<?php

namespace App\Http\Controllers;

use App\Retailer;
use Illuminate\Http\Request;

class RetailerController extends Controller
{

    protected $data;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $this->data['retailers'] = Retailer::get();
        return response()->json(['retailers' => $this->data['retailers']], 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        
        try{
           Retailer::create($request->all());
           return response()->json(['message' => 'Retailer added.', 'class' => 'success'], 200);
        }
        catch (\Exception $e){
            return response()->json(['message' => 'Oops, something went wrong. Try again later.', 'class' => 'danger'], 400);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Retailer  $retailer
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
            $retailer = Retailer::with('products')->find($id);
       
            if(isset($retailer->id))
                return response()->json(['retailer' => $retailer], 200);
        
            return response()->json(['message' => 'Retailer not found!'], 404);
        
       
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Retailer  $retailer
     * @return \Illuminate\Http\Response
     */
    public function edit(Retailer $retailer)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Retailer  $retailer
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Retailer $retailer)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Retailer  $retailer
     * @return \Illuminate\Http\Response
     */
    public function destroy(Retailer $retailer)
    {
        //
    }
}
