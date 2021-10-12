<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Hotel;

class HotelController extends Controller
{
    
    public function filter(Request $request){
        $filter = $request->input('filter');
        switch($filter){
            
            case 'estrellas':
                $hoteles = Hotel::where('estrellas',$request->input('value'))->get();
                break;
            case 'piscina':
                $hoteles = Hotel::where('piscina',$request->input('value'))->get();
                break;
            case 'gimnasio':
                $hoteles = Hotel::where('gimnasio',$request->input('value'))->get();
                break;
            case 'spa':
                $hoteles = Hotel::where('spa',$request->input('value'))->get();
                break;
            case 'restaurante':
                $hoteles = Hotel::where('restaurante',$request->input('value'))->get();
                break;
        }
    return $hoteles;
    }
}
