/*---------------------------------------------
屏幕尺寸
    这不是一个通用函数（依赖cocos2d引擎）
    现在这套实现是有问题，只是在麻将项目上的修改
---------------------------------------------*/
var MyWinSize = MyWinSize || {};
cc.MyWinSize = module.exports = MyWinSize;

// 初始化方法放到这里，不用之前init方法。
MyWinSize._winWidth = function(){
    var isChangeFlag = cc.MySys.isNeedChangeWinSize();
    return isChangeFlag ? cc.winSize.height : cc.winSize.width;
};

MyWinSize._winHeight = function(){
    var isChangeFlag = cc.MySys.isNeedChangeWinSize();
   return isChangeFlag ? cc.winSize.width : cc.winSize.height;
};
//2.0.8修改getViewPortRect 改为getViewportRect
MyWinSize._viewPortWidth = cc.view.getViewportRect().width;
MyWinSize._viewPortHeight = cc.view.getViewportRect().height;

///////////////////////////////////////////////////////////////////////
// screenRatio
// 屏幕宽高比
MyWinSize._screenRatio = function(){
    return MyWinSize._winWidth() / MyWinSize._winHeight();
};
MyWinSize.getScreenRatio = function(){
    return this._screenRatio();
};

///////////////////////////////////////////////////////////////////////
// fitType
// 适配类型，现在的设计，每种屏幕都只有一个适配方法。所以，做成全局变量。
// 首次调用MyCpntFit后，有效值。
// 180822：改成预先执行，不在MyCpntFit调用之后
MyWinSize._fitType = null;
MyWinSize.setFitType = function(fitType){
    this._fitType = fitType;
    this._calFitScale();
    // 返回fitType，外部用到索性就返回了。
    return this._fitType;
};
MyWinSize.getFitType = function(){
    return this._fitType;
};

///////////////////////////////////////////////////////////////////////
// fitScale
// 同fitType, 调用setFitType之后有值。
MyWinSize._fitScale = {scaleX:1,scaleY:1};

// 内部方法，只在本文件中被使用
// 适配宽和高之后，得到的缩放比
// 现在适配策略都是两边留黑（宽或者高），所以，适配之后的缩放都是针对留黑的补全
// 设计分辨率去适配屏幕分辨率，得到最终分辨率，就是显示区域。
// 我的设计分辨率去适配屏幕的分辨率，
// 所以，最直接的逻辑是 finalWidth = (designWidth * scale = winWidth). 得到缩放的比列。
// finalHeight = scale * designWidth 
MyWinSize._calFitScale = function(){
    var fitType = this.getFitType();

    var winWidth = this._winWidth();
    var winHeight = this._winHeight();
    var designWidth = cc.MyConst.DESIGNRESOLUTION.width;
    var designHeight = cc.MyConst.DESIGNRESOLUTION.height;

    var finalWidth = 0;
    var finalHeight = 0;
    var actualWidth = 0;
    var actualHeight = 0;
    var scale;
    var scale2;
    if(fitType == cc.MyConst.FITWIDTH){
        finalWidth = winWidth;        
        scale = winWidth / designWidth;
        finalHeight = scale * designHeight;

        scale2 = designWidth / winWidth;
        actualHeight = winHeight * scale2;
        actualWidth = designWidth;
    }
    else if(fitType == cc.MyConst.FITHEIGHT){
        finalHeight = winHeight;        
        scale = winHeight / designHeight;
        finalWidth = scale * designWidth;


        scale2 = designHeight / winHeight;
        actualWidth = winWidth * scale2;
        actualHeight = designHeight;
    }
    
    // 最终得到屏占比
    var scaleX = finalWidth / winWidth;
    var scaleY = finalHeight / winHeight;
    var fitScale = {scaleX:scaleX, scaleY:scaleY};
    this._setFitScale(fitScale);

    // 计算黑边具体大小
    var whiteScaleX = (1 - scaleX) / 2;
    var whiteScaleY = (1 - scaleY) / 2;
    var fitBlackSize = {width: whiteScaleX * actualWidth, height: whiteScaleY * actualHeight};
    this._setFitBlackSize(fitBlackSize);
};
MyWinSize._setFitScale = function(fitScale){
    this._fitScale = fitScale;
    console.log("xltest MyWinSize._setFitScale: %s", JSON.stringify(fitScale));
};
MyWinSize.getFitScale = function(){
    return this._fitScale;
};

///////////////////////////////////////////////////////////////////////
// fitBlackSize
// 适配后的留白（两侧黑边）, 计算适配缩放后有值（_calFitScale）
MyWinSize._fitBlackSize = null;
MyWinSize._setFitBlackSize = function(fitBlackSize){
    this._fitBlackSize = fitBlackSize;
    console.log("xltest MyWinSize._setFitBlackSize: %s", JSON.stringify(fitBlackSize));
};
MyWinSize.getFitBlackSize = function(){
    return this._fitBlackSize;
};

///////////////////////////////////////////////////////////////////////
// 屏幕适配（这里只是适配的一部分）
// 这里的node是跟节点
// node类型：左边栏 右边栏 上边栏 下边栏
// 左边排列，需要考虑流海屏
// 右边排列，不需要考虑流海屏，靠边就行
// 上边排列
// 下边排列
MyWinSize.alignNode = function(node, alignType){
    console.log("xltest MyWinSize.alignNode");
    var fitBlackSize = this.getFitBlackSize();
    if (!fitBlackSize){
        return;
    }
    var x = 0;
    var y = 0;
    if(alignType == cc.MyConst.ALIGN_LEFT){
        x = -fitBlackSize.width;
        if(this._hasLiuHai()){
            x += cc.MyConst.IPHONEX_LIUHAI_WIDTH;
        }
    }
    else if(alignType == cc.MyConst.ALIGN_RIGHT){
        x = fitBlackSize.width;
    }
    else if(alignType == cc.MyConst.ALIGN_TOP){
        y = fitBlackSize.height;
    }
    else if(alignType == cc.MyConst.ALIGN_BOTTOM){
        y = -fitBlackSize.height;
    }
    else if(alignType == cc.MyConst.ALIGN_TOP_LEFT){
        x = -fitBlackSize.width;
        y = -fitBlackSize.height;
    }
    node.x += x;
    node.y += y;
};

// todo: 暂时没这个需求
// 如果是流海屏，判定是否重置位置
MyWinSize._isResetPosWhenHaiLiu = function(node){
    // 判定位置
    return true;
};

// 是否有流海
MyWinSize._hasLiuHai = function(){
    if(this._isIPhoneX() || this._isOtherPhone()){
        return true;
    }
    return false;
};

// 是否是iphonex的简单判断
MyWinSize._isIPhoneX = function(){
    console.log("xltest MyWinSize._isIPhoneX");
    var x = this._viewPortWidth % 812;
    var y = this._viewPortHeight % 375;
    console.log("xltest MyWinSize._isIPhoneX x:%s, y:%s", x, y);
    if(x == 0 && y == 0){
        return true;
    }
    return false;
}

// 是否是iphonex的简单判断
MyWinSize._isIPhoneXS = function(){
    console.log("xltest MyWinSize._isIPhoneXS");
    var x = this._viewPortWidth % 896;
    var y = this._viewPortHeight % 414;
    console.log("xltest MyWinSize._isIPhoneXS x:%s, y:%s", x, y);
    if(x == 0 && y == 0 && cc.MySys.isIOS()){
        return true;
    }
    return false;
}

// todo：占位符方法，等待其他流海屏补充
MyWinSize._isOtherPhone = function(){
    return false;
};

///////////////////////////////////////////////////////////////////////
// 预先执行（计算出 fitType fitScale fitBlackSize）
MyWinSize.preExcute = function(){
    var ratio = cc.MyWinSize.getScreenRatio();
    if(ratio < cc.MyConst.SCREENRATIO){
        // 适配宽
        cc.MyWinSize.setFitType(cc.MyConst.FITWIDTH);
    }
    else{
        // 适配高
        cc.MyWinSize.setFitType(cc.MyConst.FITHEIGHT);
    }
};


/*---------------------------------------------
分配位置
---------------------------------------------*/
// width: 宽度
// startPos: 起始点位置 为了通用，这里使用map {x:xVal, y:yVal}
// colNum: 每行数量
// rowHeight: 行高
// allocNum: 位置数量
// rowMargin: 行间隔
// cc.MyWinSize.allocPosArr(750, 60, 5, 200, 7);
MyWinSize.allocPosArr = function(width, startPosY, colNum, rowHeight, allocNum, rowMargin){
    rowMargin = rowMargin || 0;
    var startPosX = cc.MyWinSize.getFirstPosX(width, colNum);
    var retPosArr = [];
    var perWidth = width / colNum;
    for(var i=1;i<=allocNum;i++){
        var row = Math.ceil(i / colNum);
        var col = i % colNum;
        if(col == 0){
            col = colNum;
        }
        var xVal = startPosX + (col-1)*perWidth;
        var yVal = startPosY - (row-1)*(rowHeight+rowMargin);
        retPosArr.push({x:xVal, y:yVal});
    }
    return retPosArr;
}

// 默认中间点对其
MyWinSize.getFirstPosX = function(width, colNum){
    var perWidth = width/colNum;
    var x = width/2 - perWidth/2;
    return -x;
}

MyWinSize.dump = function() {
    //console.log("xltest MyWinSize.isChangeFlag:", isChangeFlag);
    console.log("xltest cc.winSize.width:", cc.winSize.width);
    console.log("xltest cc.winSize.height:", cc.winSize.height);
    console.log("xltest MyWinSize._winWidth：", MyWinSize._winWidth());
    console.log("xltest MyWinSize._winHeight：", MyWinSize._winHeight());
    console.log("xltest MyWinSize._viewPortWidth：", MyWinSize._viewPortWidth);
    console.log("xltest MyWinSize._viewPortHeight：", MyWinSize._viewPortHeight);
}

window["MyWinSize"] = MyWinSize;