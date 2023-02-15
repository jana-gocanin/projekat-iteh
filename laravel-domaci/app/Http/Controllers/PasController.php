<?php

namespace App\Http\Controllers;

use App\Http\Resources\PasJson;
use App\Models\Pas;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PasController extends Controller
{
    public function getAll()
    {
        $psi = Pas::all();

        return PasJson::collection($psi);
    }

    public function add(Request $request)
    {

        $validator = Validator::make($request->all(),[
            'ime'=>'required|string|max:255',
            'godine'=>'required',
            'boja'=>'required|string|max:50',
            'tezina'=>'required'
        ]);

        if($validator->fails())
        {
            return response()->json($validator->errors());
        }

        $requestPas = $request->only('ime', 'godine', 'boja', 'tezina');
        $pas = Pas::create($requestPas);

        return response()->json(['Pas je uspesno kreiran.', new PasJson($pas)]);
    }

    public function getById($id)
    {
        $pas = Pas::findOrFail($id);

        //dd($pas->ugovor()->first());

        return new PasJson($pas);

    }

    public function delete($id)
    {
        $pas = Pas::destroy($id);

        return response()->json('Pas je uspesno obrisan');

    }

    public function getAllUnadopted()
    {
        $psi = Pas::doesntHave('ugovor')->get();

        return PasJson::collection($psi);
    }

    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(),[
            'ime'=>'required|string|max:255',
            'godine'=>'required',
            'boja'=>'required|string|max:50',
            'tezina'=>'required'
        ]);

        if($validator->fails())
        {
            return response()->json($validator->errors());
        }

        $pas = Pas::findOrFail($id);

        $pas->ime = $request->ime;
        $pas->godine = $request->godine;
        $pas->boja = $request->boja;
        $pas->tezina = $request->tezina;

        $pas->save();

        return response()->json(['Pas je uspesno azuriran.', new PasJson($pas)]);
    }
}
