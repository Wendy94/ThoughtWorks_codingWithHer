
var    top=['._.','...','._.','._.','...','._.','._.','._.','._.','._.'];
var middle=['|.|','..|','._|','._|','|_|','|_.','|_.','..|','|_|','|_|'];
var bottom=['|_|','..|','|_.','._|','..|','._|','|_|','..|','|_|','..|'];
var input='910';
function transform(){
	var number=input.split('');
	var res1=number.map(function(num){
		return top[parseInt(num)];
	}).join(' ');
	var res2=number.map(function(num){
		return middle[parseInt(num)];
	}).join(' ');
	var res3=number.map(function(num){
		return bottom[parseInt(num)];
	}).join(' ');
	res=res1+'\n'+res2+'\n'+res3+'\n';
	return res;
}
exports.setInput=function(num){
	input=""+num;
}
exports.getRes=function(){
	console.log(transform());
}
