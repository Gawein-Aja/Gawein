<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class posting extends Model
{
    protected $fillable = [
        'header_post', 'isi_post'
    ];
}
