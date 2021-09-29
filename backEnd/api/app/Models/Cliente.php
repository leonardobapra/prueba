<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Tymon\JWTAuth\Contracts\JWTSubject;

class Cliente extends Authenticatable implements JWTSubject
{
    use Notifiable;
    public $timestamps = false;

    protected $table = 'clientes';
    protected $primaryKey = 'doc';
    protected $fillable = ['doc', 'nombres', 'apellidos','celular','correo','genero', 'clave', 'f_registro'];

    public function reservas(){
        return $this->hasMany(Reserva::class);
    }

    
    public function getJWTIdentifier(){
        return $this->getKey();
    }
    public function getJWTCustomClaims(){
        return[];
    }
    public function getJWTAuthPassword(){
        return $this->clave;
    }
}
