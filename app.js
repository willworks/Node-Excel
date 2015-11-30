/*
 * list[] 表示sheet1 sheet2
 * list[].data[] 表示行
 * list[].data[][] 表示列
 */
var xlsx = require("node-xlsx");
var list = xlsx.parse("excel/1201.xlsx");
var row = list[1].data.length;
var col = list[1].data[1].length;
console.log(row);
console.log(col);
var s = '';
for (var i = 1; i < col; i++) {
	for (var j = 0; j < row; j++){
		s = s + list[1].data[j][i] + ',';
	}
	console.log(s);
	s = '';
}
