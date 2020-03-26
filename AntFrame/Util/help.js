window.myhelp = {
    getField:function(obj, name){
        return obj[name];
    },

    clone:function(dst, src){
        for(var k in src){
            dst[k] = src[k]
        }
    },
}