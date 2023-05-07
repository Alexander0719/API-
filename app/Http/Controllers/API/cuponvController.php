<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\ActualizarEstadoCuponRequest;
use App\Models\cuponv;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Throwable;

class cuponvController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $cupones = cuponv::all();
        
        foreach($cupones as $cupon ){
            $cupon->estado;
            $cupon->cliente;
        }

        return response()->json($cupones);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(cuponv $cuponv)
    {

        $cuponv->estado;
        $cuponv->cliente;
        $cuponv->cuponr->Titulo;
        return response()->json(['res'=>true,'cuponv' => $cuponv]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ActualizarEstadoCuponRequest $request, cuponv $cuponv)
    {
        $cuponv->update($request->all());
        return  response()->json(['res'=>true,'Mensaje'=>'Cupon Actualizado Correctamente'],200);

        
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }

    
}
