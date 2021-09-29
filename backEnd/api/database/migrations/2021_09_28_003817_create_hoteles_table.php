<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHotelesTable extends Migration
{
    
    public function up()
    {
        Schema::create('hoteles', function (Blueprint $table) {
            $table->id();
            $table->string('nombre',50);
            $table->string('ciudad',50);
            $table->string('telefono',14);
            $table->string('direccion',50)->unique();
            $table->tinyinteger('estrellas');
            $table->boolean('piscina');
            $table->boolean('gimnasio');
            $table->boolean('spa');
            $table->boolean('restaurante');
        });
    }

    
    public function down()
    {
        Schema::dropIfExists('hoteles');
    }
}
