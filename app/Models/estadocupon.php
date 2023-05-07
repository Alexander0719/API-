<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class estadocupon extends Model
{
    public $table = "estadocupon";
    public $primaryKey = 'IdEstado';
    public $incrementing = false;
    public $timestamps = false;
    use HasFactory;
}
