// Modify JSON.stringify to allow recursive and single-level arrays
(function(){
    // Convert array to object
    var convArrToObj = function(array){
        var thisEleObj = new Object();
        if(typeof array == "object"){
            for(var i in array){
                var thisEle = convArrToObj(array[i]);
                thisEleObj[i] = thisEle;
            }
        }else {
            thisEleObj = array;
        }
        return thisEleObj;
    };
    var oldJSONStringify = JSON.stringify;
    JSON.stringify = function(input){
        return oldJSONStringify(convArrToObj(input));
    };
})();

(function(root){

  function NestedSetterAndGetter(){
    function setValueByArray(obj, parts, value){

      if(!parts){
        throw 'No parts array passed in';
      }

      if(parts.length === 0){
        throw 'parts should never have a length of 0';
      }

      if(parts.length === 1){
        obj[parts[0]] = value;
      } else {
        var next = parts.shift();

        if(!obj[next]){
          obj[next] = {};
        }
        setValueByArray(obj[next], parts, value);
      }
    }

    function getValueByArray(obj, parts, value){

      if(!parts) {
        return null;
      }

      if(parts.length === 1){
        return obj[parts[0]];
      } else {
        var next = parts.shift();

        if(!obj[next]){
          return null;
        }
        return getValueByArray(obj[next], parts, value);
      }
    }
	
	function removeValueByArray(obj, parts, value){

      if(!parts) {
        return null;
      }

      if(parts.length === 1){
        delete obj[parts[0]];
      } else {
        var next = parts.shift();

        if(!obj[next]){
          return null;
        }
        return removeValueByArray(obj[next], parts, value);
      }
    }

    this.set = function(obj, path, value) {
      setValueByArray(obj, path.split('.'), value);
    };

    this.get = function(obj, path){
      return getValueByArray(obj, path.split('.'));
    };
	
	this.remove = function(obj, path){
      removeValueByArray(obj, path.split('.'));
    };

  }
  root.NestedSetterAndGetter = NestedSetterAndGetter;

})(this);

function objectIsEmpty(value){
    return Boolean(value && typeof value == 'object') && !Object.keys(value).length;
};

function in_array(needle, haystack){
    var found = 0;
    for (var i=0, len=haystack.length;i<len;i++) {
        if (haystack[i] == needle) return i;
            found++;
    }
    return -1;
}