<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ClienteController;
use App\Http\Controllers\ReservaController;
use App\Http\Controllers\HabitacionController;
use App\Http\Controllers\HotelController;
use App\Http\Controllers\TipoHabitacionController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/* Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user(); 
});*/
/* Route::get('/Cliente',[ClienteController::class,'showAll']); */
Route::group(['middleware' => ['cors']], function(){
Route::post('/Cliente/signup', [ClienteController::class, 'signup']);
Route::post('/Cliente/login', [ClienteController::class, 'login']);
Route::get('/Habitacion/search', [HabitacionController::class, 'search']);
Route::post('/Habitacion/filter', [HabitacionController::class, 'filter']);
Route::get('/Hotel/filter', [HotelController::class, 'filter']);
// Route::get('/TipoHabitacion/filter', [TipoHabitacionController::class, 'filter']);
Route::post('/Reservacion/createNR', [ReservaController::class, 'createNR']);
/* Route::delete('/Cliente/eliminar', [ClienteController::class, 'eliminar']); */

Route::group(['middleware' =>['jwt.verify']], function(){
    // Route::get('/Cliente',[ClienteController::class,'showAll']);
    Route::post('/Cliente/update', [ClienteController::class, 'update']);
    Route::post('/Reservacion/create', [ReservaController::class, 'create']);
    Route::get('/Reservacion/history', [ReservaController::class, 'showByCliente']);
    Route::delete('/Cliente/eliminar', [ClienteController::class, 'eliminar']);
    Route::delete('/Reserva/eliminarR', [ReservaController::class, 'eliminarR']);
    Route::post('/Reservacion/updateR', [ReservaController::class, 'updateR']);
});
});