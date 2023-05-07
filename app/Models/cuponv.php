<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class cuponv extends Model
{
    public $table = "cuponv";
    public $primaryKey = 'IdCuponV';
    public $incrementing = false;
    public $timestamps = false;
    use HasFactory;
    protected $fillable = [
        'IdCuponV',
        'IdVenta',
        'IdCupon',
        'IdCliente',
        'Estado',
    ];
    protected $hidden = [];

    public function estado(){
        return $this->belongsTo(estadocupon::class,'Estado','IdEstado');
    }

    public function cliente(){
        return $this->belongsTo(cliente::class,'IdCliente','IdCliente');
    }

    public function cuponr(){
        return $this->belongsTo(cuponr::class,'IdCupon','IdCuponR');
    }
}
