<?php
namespace App;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Passport\HasApiTokens;
use Illuminate\Database\Eloquent\SoftDeletes;
use Storage;
class User extends Authenticatable
{
    use Notifiable, HasApiTokens, SoftDeletes;
	
    protected $fillable = [
        'name', 'email', 'password', 'active', 'activation_token', 'avatar', 'nowa', 'jurusan'
    ];
   
    protected $hidden = [
        'password', 'remember_token','activation_token'
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    protected $dates = ['deleted_at'];

    public function postings()
	{
    	  return $this->hasMany(Posting::class);
	}
    
    protected $appends = ['avatar_url'];    
    public function getAvatarUrlAttribute()
    {
        return Storage::url('avatars/'.$this->id.'/'.$this->avatar);
    }
}
