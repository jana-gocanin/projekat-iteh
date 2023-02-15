<?php

namespace App\Http\Controllers;

use App\Http\Resources\UgovorJson;
use App\Models\Ugovor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UgovorController extends Controller
{
    public function getAll()
    {
        $ugovori = Ugovor::all();

        return UgovorJson::collection($ugovori);
    }

    public function add(Request $request)
    {
        $requestUgovor = $request->only('potpisano', 'datum_potpisa', 'pas_id', 'udomitelj_id');

        $validator = Validator::make($requestUgovor, [
            'pas_id' => 'unique:ugovors,pas_id'
        ]);

        if ($validator->fails()) {
            return "Pas je vec udomljen";
        }

        $ugovor = Ugovor::create($requestUgovor);

        return new UgovorJson($ugovor);
    }

    public function getById($id)
    {
        $ugovor = Ugovor::findOrFail($id);

        return new UgovorJson($ugovor);

    }

    public function delete($id)
    {
        $ugovor = Ugovor::destroy($id);

        return response()->json('Ugovor je uspesno obrisan');

    }
    
}
