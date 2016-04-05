function create_updated_collection(collection_a, object_b) {
  var newArray = count_same_elements(collection_a);
  return change(newArray, object_b);
}
function count_same_elements(collection) {
  var temp="";
  var count=0;
  var newArray=[];
  for(var i=0;i<collection.length;i++){
	if(collection[i]!=-1){
		temp=collection[i];
		for(var j=0;j<collection.length;j++){
			if(temp===collection[j]){
				count++;
				collection[j]=-1;
			}
		}
		newArray.push({key: temp,count: count});
		count=0;
	}
  }
  return newArray;
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
