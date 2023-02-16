<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pas extends Model
{
    use HasFactory;

    protected $fillable = [
        'ime',
        'godine',
        'boja',
        'tezina'
    ];

    public function ugovor()
    {
        return $this->hasOne(Ugovor::class);
    }
    public function vakcina()
    {
        return $this->hasOne(Vakcina::class);
    }

    public function adopted()
    {
        if ($this->ugovor()) {
            return true;
        }

        return false;
    }

}