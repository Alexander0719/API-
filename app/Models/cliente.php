<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class cliente extends Model
{
    public $table = "cliente";
    public $primaryKey = 'IdCliente';
    public $incrementing = false;
    public $timestamps = false;
    use HasFactory;
    protected $hidden = [

        'Clave',
        'Estado',
        'Token',
    ];
}
