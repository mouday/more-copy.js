<?php

namespace controller;

use app\BaseController;

class IndexController extends BaseController
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
