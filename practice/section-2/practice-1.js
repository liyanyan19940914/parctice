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
