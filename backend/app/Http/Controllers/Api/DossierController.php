<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\DossierTerrain;
use Illuminate\Http\Request;

class DossierController extends Controller
{
    public function index(){
        $dossier = DossierTerrain::all();
        return response()->json($dossier);
    } 
    public function store(Request $request){
        $crenditals = $request->validate(
            [
                'id_dossier' => 'required',
                'Driots_en' => 'required',
                'Consevation' => 'required',
                'Date' => 'required',
                'total' => 'required',
            ]
        ) ; 
        $dossier = DossierTerrain::create($crenditals);
        return response()->json([
            'dossier' => $dossier ,
            'message' => 'dossier created successfully'
        ]);
    } 
    public function show(Request $request){
        $dossier = DossierTerrain::where("id_dossier", $request->id_dossier)->first(); 
        return response()->json($dossier);
    }
      public function update(Request $request){
        $dossier = DossierTerrain::where("id_dossier", $request->id_dossier)->first(); 
        $dossier->update([ "status" => "valide" ]);
        return response()->json($dossier);
    }
}
