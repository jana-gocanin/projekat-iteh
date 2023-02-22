<?php

namespace App\Http\Controllers;

use App\Http\Resources\PasJson;
use App\Models\Pas;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\User;
use Illuminate\Support\Facades\DB;


class PasController extends Controller
{
    public function getAll($userId)
    {
        //$psi = Pas::all();
        //$psi = Pas::all();
        // $psi = Pas::whereHas('donation', function($q) use ($userId) {
        //     $q->where('user_id', $userId)
        //     ->orWhereNull('user_id');
        // })->get();
        // dd($psi->donation()->first());
        //  $psi = DB::table('pas as p')
        //  ->select('p.id', 'p.ime', 'p.godine', 'p.boja', 'p.tezina', 'up.iznos', 'u.id as userId')
        //  ->leftJoin('user_pas as up', 'up.pas_id', '=', 'p.id')
        //  ->leftJoin('users as u', 'up.user_id', '=', 'u.id')
        //  ->where('u.id', '=', $userId)
        //  ->orWhereNull('u.id')
        //  ->get();
        // return response()->json($psi);

        if($userId == null){
            $psi = Pas::all();
            return response()->json($psi);
        } else{
        $psi = DB::table('pas as p')
    ->select('p.id', 'p.ime', 'p.godine','p.img', 'p.boja', 'p.tezina','p.vakcina_id', 'up.iznos', 'u.id as userId')
    ->leftJoin('user_pas as up', function($join) use ($userId) {
        $join->on('up.pas_id', '=', 'p.id')
            ->where('up.user_id', '=', $userId)
            ->orWhereNull('up.user_id');
    })
    ->leftJoin('users as u', 'up.user_id', '=', 'u.id')
    ->groupBy('p.id', 'p.ime', 'p.godine', 'p.boja','p.vakcina_id', 'p.tezina','p.img', 'up.iznos', 'u.id')
    ->get();
return response()->json($psi);}



        //return PasJson::collection($psi);
        
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

        return response()->json(['message' => 'Pas je uspesno kreiran.', 'status' => 200, new PasJson($pas), 'response' => $this->getAll(null)]);
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

        return response()->json(['message' => 'Pas je uspesno obrisan.', 'status' => 200, 'response' => $this->getAll(null)]);

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

        return response()->json(['message' => 'Pas je uspesno azuriran.', 'status' => 200, new PasJson($pas), 'response' => $this->getAll(null)]);
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
    //dd($idKorisnika);
        $iznos= $user->donation()->where(['user_id'=>$idKorisnika, 'pas_id'=>$id])->first();
        //dd($iznos);
        if($iznos){
            $iznos = $iznos->pivot->iznos + 100;
        }else{
            $iznos = 100;
            
        }
        $success = $user->donation()->syncWithoutDetaching([$pas->id => ['iznos'=>$iznos]]);
        
        if($success){
            return response()->json(['id'=>$id, 'iznos'=>$iznos, 'idKorisnika'=>$idKorisnika]);
        }
        return response()->json(['id'=>$id, 'iznos'=>0, 'idKorisnika'=>$idKorisnika]);
    }

    public function remove(Request $request){
        $idKorisnika=$request->idKorisnika;
        $id = $request->id;
        $user=User::findorFail($idKorisnika);
        $pas=Pas::findOrFail($id);
        $iznos= $user->donation()->where(['user_id'=>$idKorisnika, 'pas_id'=>$id])->first();
        if($iznos){
            $iznos = $iznos->pivot->iznos - 100;
        }else{
            $iznos = 0;
            
        }
        $success = $user->donation()->syncWithoutDetaching([$pas->id => ['iznos'=>$iznos]]);
        
        if($success){
            return response()->json(['id'=>$id, 'iznos'=>$iznos, 'idKorisnika'=>$idKorisnika]);
        }
        return response()->json(['id'=>$id, 'iznos'=>0, 'idKorisnika'=>$idKorisnika]);
    }

    public function join()
    {
        $psi = DB::table('pas')
            ->join('pas', 'user_pas.pas_id', '=', 'pas.id')
            ->select('pas.*',  'user_pas.iznos')
            ->get();
        return response()->json($psi);
    }
}