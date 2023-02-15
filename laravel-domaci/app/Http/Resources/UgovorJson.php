<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UgovorJson extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return 
        [
            'id' => $this->id,
            'potpisano' => $this->potpisano,
            'datum_potpisa' => $this->datum,
            'pas_id' => $this->pas_id,
            'udomitelj_id' => $this->udomitelj_id
        ];
    }
}
