<?php

namespace App\Http\Controllers;

use App\Http\Resources\UgovorJson;
use App\Models\Ugovor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;

class UgovorController extends Controller
{
    public function getAll()
    {
        $ugovori = Ugovor::all();

        return response()->json($ugovori);
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

        return response()->json(['message' => 'Ugovor je uspesno kreiran.', 'status' => 200, new UgovorJson($ugovor), 'response' => $this->getAll()]);
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

    public function join()
    {
        $ugovori = DB::table('ugovors')
            ->join('udomiteljs', 'ugovors.udomitelj_id', '=', 'udomiteljs.id')
            ->join('pas', 'ugovors.pas_id', '=', 'pas.id')
            ->select('ugovors.*', DB::raw('concat(udomiteljs.ime, " ", udomiteljs.prezime) as udomitelj'), 'pas.ime')
            ->get();
        return response()->json($ugovori);
    }

}