<?php

namespace App\Http\Controllers;

use App\Http\Resources\UdomiteljJson;
use App\Models\Udomitelj;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UdomiteljController extends Controller
{

    public function getAll()
    {
        $udomitelji = Udomitelj::all();

        return UdomiteljJson::collection($udomitelji);
    }

    public function add(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'ime'=>'required|string|max:255',
            'prezime'=>'required|string|max:255',
            'datum_rodjenja'=>'required|date',
            'email'=>'required|email'
        ]);

        if($validator->fails())
        {
            return response()->json($validator->errors());
        }
        
        $requestUdomitelj = $request->only('ime', 'prezime', 'datum_rodjenja', 'email');
        $udomitelj = Udomitelj::create($requestUdomitelj);

        return new UdomiteljJson($udomitelj);
    }

    public function getById($id)
    {
        $udomitelj = Udomitelj::findOrFail($id);

        return new UdomiteljJson($udomitelj);

    }

    public function delete($id)
    {
        $udomitelj = Udomitelj::destroy($id);

        return response()->json('Udomitelj je uspesno obrisan');

    }
    
    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(),[
            'ime'=>'required|string|max:255',
            'prezime'=>'required|string|max:255',
            'datum_rodjenja'=>'required|date',
            'email'=>'required|email'
        ]);

        if($validator->fails())
        {
            return response()->json($validator->errors());
        }

        $udomitelj = Udomitelj::findOrFail($id);

        $udomitelj->ime = $request->ime;
        $udomitelj->prezime = $request->prezime;
        $udomitelj->datum_rodjenja = $request->datum_rodjenja;
        $udomitelj->email = $request->email;

        $udomitelj->save();
        
        return response()->json(['Udomitelj je uspesno azuriran.', new UdomiteljJson($udomitelj)]);
    }
}
