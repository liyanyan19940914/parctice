function create_updated_collection(collection_a, object_b) {
  var newarray=count_same_elements(collection_a);
  return change(newarray, object_b);
}
function count_same_elements(collection) {
 var temp=collection[0];
 var newarray=[{key:temp,count:1}];
 var j=0;
 for(var i=1;i<collection.length;i++){
	if(collection[i].length===1){
		if(collection[i]===temp){
			newarray[j].count++;
		}
		else{
			temp=collection[i];
			j++;
			newarray.push({key:temp,count:1});
		}
	}
	else{
		var element=collection[i].split("-");
		var num=parseInt(element[1]);
		newarray.push({key:element[0],count:num});
		j++;
	}
 }
 return newarray;
}
function change(newArray, object) {
 for(var i=0;i<newArray.length;i++){
	for(var j=0;j<object.value.length;j++){
		if(newArray[i].key===object.value[j] ){
			newArray[i].count=newArray[i].count-parseInt(newArray[i].count/3);
		}
	}
  }
  return newArray;
}
