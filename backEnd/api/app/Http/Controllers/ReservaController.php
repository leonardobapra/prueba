<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Reserva;
use App\Models\Cliente;
use JWTAuth;
use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\Hash;



class ReservaController extends Controller
{
    public function create(Request $request){
        /* return 'hola'; */
       /*  $data = $request->all();
        $token = $request->bearerToken();
        $doc = JWTAuth::getPayload($token)->toArray()['sub'];
        $data['doc_cliente']=$doc;
        $created = Reserva::create($data);
        return $created;

    } */
        $data = $request->all();
        $token = $request->bearerToken();
        $doc = JWTAuth::getPayload($token)->toArray()['sub'];
        $data['doc_cliente']=$doc;
        try{
            $created = is_object(Reserva::create($data));
        }catch(QueryException $e){
            $created = false;
        }
        return array('created'=>$created);

    }

    public function createNR(Request $request){
        $data = $request->all();
        $data['clave'] = Hash::make($data['clave']);
        $cliente = Cliente::create($data);
        $token = JWTAuth::fromUser($cliente);

        $data['doc_cliente']=$data['doc'];

        try{
            $created = is_object(Reserva::create($data));
        }catch(QueryException $e){
            $created = false;
        }
        
        return array('token'=>$token,'created'=>$created); 
    }


    public function showByCliente(Request $request){
        $token = $request->bearerToken();
        $doc = JWTAuth::getPayload($token)->toArray()['sub'];
        /* $history = Reserva::where('doc_cliente',$doc)->get(); */
        $history = Reserva::where('doc_cliente', $doc)->with(['habitacion.hotel', 'habitacion.tipo'])->get();
 
        return $history;
    }
    public function eliminarR(Request $request)
    {
        $data = $request->all();
        $idReserva = $data['id'];
        $data['clave'] = Hash::make($data['clave']);
        $token = $request->bearerToken();
        $doc = JWTAuth::getPayload($token)->toArray()['sub'];
        $deleted = Reserva::where('id',$idReserva)->delete($data)!=0;

       return array('deleted'=>$deleted);
    }

    public function updateR(Request $request){

        $data = $request->all();
        $idReserva = $data['id'];
        /* $data['clave'] = Hash::make($data['clave']); */
        $token = $request->bearerToken();
        $doc = JWTAuth::getPayload($token)->toArray()['sub'];
        $updated = Reserva::where('id',$idReserva)->update($data)!=0; 
        return array('updated'=>$updated); 



    }
}
