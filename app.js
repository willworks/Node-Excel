/*
 * list[] 表示sheet1 sheet2
 * list[].data[] 表示行
 * list[].data[][] 表示列
 * 可以根据log出来的data来调整输出的格式
 */
var xlsx = require("node-xlsx");
var list = xlsx.parse("excel/1201.xlsx");
console.log(list);
var row = list[0].data.length;
console.log(row);
var col = list[0].data[1].length;
console.log(col);
var s = '';
for (var i = 1; i < col; i++) {
	for (var j = 0; j < row; j++){
		s = s + list[0].data[j][i] + ',';
	}
	console.log(s);
	s = '';
}
