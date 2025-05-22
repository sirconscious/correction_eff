<?php

use App\Http\Controllers\Api\DossierController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');
Route::get('/dossier', [DossierController::class, 'index']); 
Route::post('/dossier', [DossierController::class, 'store']); 
Route::get('/dossier/{id_dossier}', [DossierController::class, 'show']);  
Route::put('/dossier/{id_dossier}', [DossierController::class, 'update']);
