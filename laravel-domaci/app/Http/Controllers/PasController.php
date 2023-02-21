<?php

namespace App\Http\Controllers;

use App\Http\Resources\PasJson;
use App\Models\Pas;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\User;


class PasController extends Controller
{
    public function getAll()
    {
        $psi = Pas::all();

        //return PasJson::collection($psi);
        return response()->json($psi);
    }

    public function add(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'ime' => 'required|string|max:255',
            'godine' => 'required',
            'boja' => 'required|string|max:50',
            'tezina' => 'required',
            //'img' => 'required'

            //  'vakcina_id' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors());
        }

        $requestPas = $request->only('ime', 'godine', 'boja', 'tezina', 'vakcina_id', 'img');
        $pas = Pas::create($requestPas);

        return response()->json(['message' => 'Pas je uspesno kreiran.', 'status' => 200, new PasJson($pas), 'response' => $this->getAll()]);
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

        return response()->json(['message' => 'Pas je uspesno obrisan.', 'status' => 200, 'response' => $this->getAll()]);

    }

    public function getAllUnadopted()
    {
        $psi = Pas::doesntHave('ugovor')->get();
       return response()->json($psi);
       //return response()->json(['status' => 200, 'response' => $psi]);

    }

    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'ime' => 'required|string|max:255',
            'godine' => 'required',
            'boja' => 'required|string|max:50',
            'tezina' => 'required',
            'vakcina_id' => 'required',
            'img' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors());
        }

        $pas = Pas::findOrFail($id);

        $pas->ime = $request->ime;
        $pas->godine = $request->godine;
        $pas->boja = $request->boja;
        $pas->tezina = $request->tezina;
        $pas->vakcina_id = $request->vakcina_id;
        $pas->img = $request->img;

        $pas->save();

        return response()->json(['message' => 'Pas je uspesno azuriran.', 'status' => 200, new PasJson($pas), 'response' => $this->getAll()]);
    }

    public function donation($id){
        $user=User::findOrFail($id);
        //dd($user->donation);
        foreach($user->donation as $singleDonation){
            dd($singleDonation->pivot->iznos);
        }

        return response()->json(['response'=>$user->donation()]);
    }

    public function amount(Request $request){
        $idKorisnika=$request->idKorisnika;
        $id = $request->id;
        $user=User::findorFail($idKorisnika);
        $pas=Pas::findOrFail($id);
    
        $iznos= $user->donation()->where(['user_id'=>$idKorisnika, 'pas_id'=>$id])->first();
        if($iznos){
            $iznos=$iznos->pivot->iznos+100;
        }else{
            $iznos = 100;
            
        }
        $success = $user->donation()->syncWithoutDetaching([$pas->id => ['iznos'=>$iznos]]);
        
        if($success){
            return response()->json(['id'=>$id, 'iznos'=>$iznos]);
        }
        return response()->json(['id'=>$id, 'iznos'=>0]);
    }
}