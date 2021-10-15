<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cliente;
use App\Models\Reserva;
use Illuminate\Support\Facades\Hash;
use JWTAuth;


class ClienteController extends Controller
{
   
    public function signup(Request $request){
        /* Cliente::create($request->all()); */
        $data = $request->all();
        $data['clave'] = Hash::make($data['clave']);
        $cliente = Cliente::create($data);
        $token = JWTAuth::fromUser($cliente);
        return array('token'=>$token);
    }

    public function login(Request $request){
         /* $correo=$request->input('correo');
        $clave=$request->input('clave');

        $cliente=Cliente::select('clave')->where('correo',$correo)->first(); */

        /* return $cliente->clave == $clave; */
         /* $res=array(

            "validado"=>$cliente->clave==$clave

        );

        return $res;  */
         /*  $credentials = $request->all();
        $cliente = Cliente::where('correo', $credentials['correo'])->first();

        if(Hash::check($credentials['clave'], $cliente['clave'])){
            $token = JWTAuth::fromUser($cliente);
        }else{
            returnresponse()->json(['error' => 'Credenciales Inválidas!!'], 400);
        }
        return array('token' => $token); */
        $credentials = $request->all();
        $cliente = Cliente::where('correo', $credentials['correo'])->first();
        if(Hash::check($credentials['clave'], $cliente['clave'])){
            $token = JWTAuth::fromUser($cliente);
            
        }else{
            returnresponse()->json(['error' => 'Credenciales Inválidas!!'], 400);
           
        }
        return array('token' => $token);


    }

    public function update(Request $request){
        /* $data = $request->all();
        return Cliente::where('doc','987654')->update($data); */

        /* $data = $request->all();
        $update = Cliente::where('doc','987654')->update($data)!=0; 
        return array('update'=>update); */

       /*  return ($request->bearerToken());
        $data = $request->all();
        $updated = Cliente::where('doc','987654')->update($data)!=0; 
        $token=JWTAuth::getToken();
        return array('updated'=>$updated,'token'=>$token);  */

        $data = $request->all();
        $data['clave'] = Hash::make($data['clave']);
        $token = $request->bearerToken();
        $doc = JWTAuth::getPayload($token)->toArray()['sub'];
        $updated = Cliente::where('doc',$doc)->update($data)!=0; 
        return array('updated'=>$updated); 



    }
    public function eliminar(Request $request)
    {
        $data = $request->all();
        /* $data['clave'] = Hash::make($data['clave']); */
        $token = $request->bearerToken();
        $doc = JWTAuth::getPayload($token)->toArray()['sub'];
      
        $deleted = Reserva::where('doc_cliente',$doc)->delete($data)!=0;
        $deleted = Cliente::where('doc',$doc)->delete($data)!=0;
      
        
       return array('deleted'=>$deleted);
    }


    /*  public function showAll(){
         return Cliente::all();
     } */
}
