<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Posting;
class PostingController extends Controller
{
    public function index()
    {
        $postings = auth()->user()->postings;

        return response()->json([
            'success' => true,
            'data' => $postings
        ]);
    }
    public function showAll()
    {
        $postings = Posting::with('user')->orderBy('id', 'DESC')->get();

        return response()->json([
            'success' => true,
            'data' => $postings
        ]);
    }
    public function show($id)
    {
        $posting = auth()->user()->postings()->find($id);

        if (!$posting) {
            return response()->json([
                'success' => false,
                'message' => 'Posting with id ' . $id . ' not found'
            ], 400);
        }

        return response()->json([
            'success' => true,
            'data' => $posting->toArray()
        ]);
    }
    public function store(Request $request)
    {
        $this->validate($request, [
            'header_post' => 'required|string',
            'isi_post' => 'required|string'
        ]);

        $posting = new Posting();
        $posting->header_post = $request->header_post;
        $posting->isi_post = $request->isi_post;

	if ($request->hasfile('image'))
	{
		$file = $request->file('image');
		$extension = 'jpg';
		//$extension = $file->getClientOriginalExtension();
		$filename = time().".".$extension;
		$file->move('uploads/posting/',$filename);
		$posting->image = $filename;
	} else {
		$posting->image = '';
	}
        if (auth()->user()->postings()->save($posting))
            return response()->json([
                'success' => true,
                'data' => $posting->toArray()
            ]);
        else
            return response()->json([
                'success' => false,
                'message' => 'Posting could not be added'
            ], 500);
    }
    public function update(Request $request, $id)
    {
        $posting = auth()->user()->postings()->find($id);
 	    $this->validate($request, [
            'header_post' => 'required|string',
            'isi_post' => 'required|string'
        ]);
        if (!$posting) {
            return response()->json([
                'success' => false,
                'message' => 'Posting with id ' . $id . ' not found'
            ], 400);
        }
 	$header_post =$request->header_post;
	$isi_post =$request->isi_post;
	if ($request->hasfile('image'))
	{
		$file = $request->file('image');
		$extension = 'jpg';
		$filename = time().".".$extension;
		$file->move('uploads/posting/',$filename);
	}
	else
	{
		$filename = $posting->image;
	}
        $updated = Posting::where('id',$id)->update(['header_post'=>$header_post,'isi_post'=>$isi_post,'image'=>$filename]);

        if ($updated)
            return response()->json([
                'success' => true,
		        'data' => $posting->toArray()
            ]);
        else
            return response()->json([
                'success' => false,
                'message' => 'Posting could not be updated'
            ], 500);
    }
    public function destroy($id)
    {
        $posting = auth()->user()->postings()->find($id);

        if (!$posting) {
            return response()->json([
                'success' => false,
                'message' => 'Posting with id ' . $id . ' not found'
            ], 400);
        }

        if ($posting->delete()) {
            return response()->json([
                'success' => true
            ]);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Post could not be deleted'
            ], 500);
        }
    }
}
