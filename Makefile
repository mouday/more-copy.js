# 申明伪目标
.PHONY: component controller edit

# 定义变量
name = ''

# 目标 make wx-component name=echo
wx-component:
	mcp template/component/component.js component/$(name).js
	mcp template/component/component.less component/$(name).less
	mcp template/component/component.wxml component/$(name).wxml

# 目标 make controller name=Index
controller:
	mcp template/controller.php controller/$(name)Controller.php

# make edit name=
edit:
	mcp DataForm.vue $(name).vue -p '{"name": "$(name)", "table": "$(name).json"}'