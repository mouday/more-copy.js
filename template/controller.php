<?php

namespace {{parsed_output.dir | replace("/", "\\")}};

use app\BaseController;

class {{parsed_output.name}} extends BaseController
{
    /**
     * 首页
     */
    public function index()
    {
        return view('index');
    }

    public function articleDetail($id)
    {

        return view('mini/article-detail', ['id'  => $id, 'name'=> 'Tom']);
    }
}
