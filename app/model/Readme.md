This folder contains the models

Possible values are:

auto (Default, implies no conversion)
string
int
float
boolean
date

Note that when a type is specified, any defaultValue will be passed through the convert function for the type.

This may also be specified by referencing a member of the Ext.data.Types class.

Developers may create their own application-specific data types by defining new members of the Ext.data.Types class.

id:int,name:string,description:string


page=1&start=0&limit=25

extjs rest 词汇解释
page 表示看第几页 1表示第一
start 还位置
limit 每页显示多少

spring data rest 词汇解释
size 每页显示多少
page 表示看第几页0表示第一页

rest 所有的结构 都会储存在data 然后走reader的readRecords流程
this.readRecords(data);

jsonreader
将data储存在jsonData中

getRoot 应该返回数据组

