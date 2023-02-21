<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vakcina extends Model
{
    use HasFactory;
    protected $table = 'vakcinas';

    protected $fillable = [
        'id',
        'naziv'
    ];



    public function pas()
    {
        return $this->belongsTo(Pas::class);
    }

}