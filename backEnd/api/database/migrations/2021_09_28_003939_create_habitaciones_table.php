<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHabitacionesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('habitaciones', function (Blueprint $table) {
            $table->id();
            $table->foreignId('hotel_id');
            $table->foreignId('tipo_id');
            $table->tinyInteger('piso');
            $table->tinyInteger('numero');
            $table->tinyInteger('capacidad');
            $table->boolean('minibar');
            $table->boolean('jacuzzi');
            $table->boolean('balcon');
            $table->bigInteger('precio');
            

            $table->foreign('hotel_id')->references('id')->on('hoteles');
            $table->foreign('tipo_id')->references('id')->on('tipo_habitaciones');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('habitaciones');
    }
}
