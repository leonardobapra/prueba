<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateReservasTable extends Migration
{
   
    public function up()
    {
        Schema::create('reservas', function (Blueprint $table) {
            $table->id();
            $table->string('doc_cliente',10);
            $table->foreignId('habitacion_id');
            $table->tinyInteger('cant_adultos');
            $table->tinyInteger('cant_ninos');
            $table->boolean('mascota');
            $table->boolean('recogida');
            $table->date('fecha_ingreso');
            $table->date('fecha_salida');
            $table->string('com_ingreso',200);
            $table->tinyInteger('calificacion');
            $table->string('com_salida',200);

            $table->foreign('doc_cliente')->references('doc')->on('clientes');
            $table->foreign('habitacion_id')->references('id')->on('habitaciones');
        });
    }

    
    public function down()
    {
        Schema::dropIfExists('reservas');
    }
}
