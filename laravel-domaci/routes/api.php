<?php


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PasController;
use App\Http\Controllers\UdomiteljController;
use App\Http\Controllers\UgovorController;
use App\Http\Controllers\API\AuthController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('pas/getAll', [PasController::class, 'getAll'])->name('pas.getAll');
Route::get('pas/id/{id}', [PasController::class, 'getById'])->name('pas.getById');
Route::get('pas/getAllUnadopted', [PasController::class, 'getAllUnadopted'])->name('pas.getAllUnadopted');

Route::get('udomitelj/getAll', [UdomiteljController::class, 'getAll'])->name('udomitelj.getAll');
Route::get('udomitelj/id/{id}', [UdomiteljController::class, 'getById'])->name('udomitelj.getById');

Route::get('ugovor/getAll', [UgovorController::class, 'getAll'])->name('ugovor.getAll');
Route::get('ugovor/id/{id}', [UgovorController::class, 'getById'])->name('ugovor.getById');

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login'])->name('login');


Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('/profile', function(Request $request) {
        return auth()->user();
    });
    Route::post('pas/add', [PasController::class, 'add'])->name('pas.add');
    Route::delete('pas/delete/{id}', [PasController::class, 'delete'])->name('pas.delete');
    Route::put('pas/update/{id}', [PasController::class, 'update'])->name('pas.update');

    Route::post('udomitelj/add', [UdomiteljController::class, 'add'])->name('udomitelj.add');
    Route::delete('udomitelj/delete/{id}', [UdomiteljController::class, 'delete'])->name('udomitelj.delete');
    Route::put('udomitelj/update/{id}', [UdomiteljController::class, 'update'])->name('udomitelj.update');

    Route::post('ugovor/add', [UgovorController::class, 'add'])->name('ugovor.add');
    Route::delete('ugovor/delete/{id}', [UgovorController::class, 'delete'])->name('ugovor.delete');

    Route::post('/logout', [AuthController::class, 'logout']);
    }
);
