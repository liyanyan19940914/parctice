function collect_same_elements(collection_a, object_b) {
  var newArray=[];
  collection_a.forEach(function (element){
	if(isExist(element,object_b.value)){
		newArray.push(element);
	}
});
  return newArray;
}
function isExist(element,collection){
  for(var i=0;i<collection.length;i++){
	if(collection[i]===element){
	  return true;
	}
  }
  return false;
}
