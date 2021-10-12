<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Model;
use App\Models\Habitacion;
use App\Models\Cliente;

class Reserva extends Model
{
    public $timestamps = false;
    protected $table = 'reservas';
    protected $fillable = ['habitacion_id','cant_adultos','cant_ninos','mascota','recogida', 'fecha_ingreso', 'fecha_salida','com_ingreso','calificacion','com_salida','doc_cliente'];

    public function cliente(){
        return $this->belongsTo(Cliente::class);
    }

    public function habitacion(){
        return $this->belongsTo(Habitacion::class);
    }
}
