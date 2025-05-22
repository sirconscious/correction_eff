<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DossierTerrain extends Model
{
    protected $fillable = [
        "id_dossier",
        "Driots_en",
        "Consevation",
        "Date",
        "total", 
        'status'
    ];
}
