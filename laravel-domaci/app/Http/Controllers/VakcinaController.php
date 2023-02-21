<?php

namespace App\Http\Controllers;

use App\Models\Vakcina;
use Illuminate\Http\Request;

class VakcinaController extends Controller
{
    //
    public function getAll()
    {
        $vakcine = Vakcina::all();

        return response()->json($vakcine);
    }


}