<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class cuponr extends Model
{
    use HasFactory;
    public $table = "cuponr";
    public $primaryKey = 'IdCuponR';
    public $incrementing = false;
    public $timestamps = false;
    use HasFactory;
    
}
