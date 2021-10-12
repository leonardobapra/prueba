<?php

namespace App\Models;
use App\Models\Reserva;
use App\Models\Hotel;


use Illuminate\Database\Eloquent\Model;

class Habitacion extends Model
{
    protected $table = 'habitaciones';

    public function reservas(){
        return $this->hasMany(Reserva::class);
    }

    public function hotel(){
        return $this->belongsTo(Hotel::class);
    }
    public function tipo(){
        return $this->belongsTo(TipoHabitacion::class);
    }
}
