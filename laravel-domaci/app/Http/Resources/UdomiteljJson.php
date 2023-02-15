<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UdomiteljJson extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return[
            'id' => $this->id,
            'ime' => $this->ime,
            'prezime' => $this->prezime,
            'datum_rodjenja' => $this->datum_rodjenja,
            'email' => $this->email
        ];
    }
}
