import AntLog from "../../AntFrame/Log/AntLog";

var URL = 'http://10.0.9.89:9000';

export default class HttpMgr {
    private static httpRetry : number = 0;
    
    // public static sendRequest(path, data, handler, extraUrl, method, isClose) {
    //     var xhr = cc.loader.getXMLHttpRequest();
    //     xhr.timeout = 5000;
    //     var str = '?';
    //     if (!data.dataStr){
    //         for (var k in data) {
    //             if (str != '?') {
    //                 str += '&';
    //             }
    //             str += k + '=' + data[k];
    //         }
    //     }else{
    //         str = data.dataStr;
    //     }
        
    //     if (extraUrl == null) {
    //         extraUrl = URL;
    //     }
    //     var requestURL = extraUrl + path + encodeURI(str);
    //     AntLog.Debug('sendRequest! RequestURL:' + requestURL);
    //     xhr.open((method ? method :'POST'), requestURL, true);
    //     if (cc.sys.isNative) {
    //         xhr.setRequestHeader('Accept-Encoding', 'gzip,deflate');
    //     }else{
    //         xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    //     }

    //     xhr.onreadystatechange = function () {
    //         AntLog.Debug("xhr.status:", xhr.status, ",xhr.readyState:", xhr.readyState)
    //         if (xhr.readyState === 4 && (xhr.status >= 200 && xhr.status < 300)) {
    //             AntLog.Info('http res(' + xhr.responseText.length + '):' + xhr.responseText);
    //             try {
    //                 var ret = JSON.parse(xhr.responseText);
    //                 if (handler !== null) {
    //                     handler(ret);
    //                 }
    //             } catch (e) {
    //                 AntLog.Info('err:' + e);
    //             } finally {
    //                 //hide loading
    //             }
    //         }
    //     };

    //     xhr.onerror = function () {
    //         AntLog.Debug("sendRequest onerror! retry");
    //         this.sendRequest(path, data, handler, extraUrl,method,isClose);
    //     }.bind(this);

    //     if (isClose) {
    //         //loading
    //     }
    //     xhr.send();
    //     return xhr;
    // }

    //path, data, handler, extraUrl, method, isClose
    public static sendRequest(params: any) {
        var method = params.method ? params.method : "GET";
        var url = params.url ? params.url : URL;
        var data = params.data ? params.data : {};
        var successCb = params.onSuccess ? params.onSuccess : null;
        var failCb = params.onFail ? params.onFail : null;
        var errorCb = params.onError ? params.onError : null;

        var xhr = cc.loader.getXMLHttpRequest();
        xhr.timeout = 5000;
        var str = '?';
        if (!data.dataStr) {
            for (var k in data) {
                if (str != '?') {
                    str += '&';
                }
                str += k + '=' + data[k];
            }
        } else {
            str = data.dataStr;
        }

        var requestURL = url + params.path + encodeURI(str);
        AntLog.Debug('sendRequest! RequestURL:' + requestURL);
        xhr.open((method ? method : 'POST'), requestURL, true);
        if (cc.sys.isNative) {
            xhr.setRequestHeader('Accept-Encoding', 'gzip,deflate');
        } else {
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        }

        xhr.onreadystatechange = function () {
            AntLog.Debug("xhr.status:", xhr.status, ",xhr.readyState:", xhr.readyState)
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && xhr.status < 300) {
                    AntLog.Info('http res(' + xhr.responseText.length + '):' + xhr.responseText);
                    try {
                        var ret = JSON.parse(xhr.responseText);
                        successCb && successCb(ret);
                    } catch (e) {
                        AntLog.Info('err:' + e);
                        failCb && failCb({
                            readyState: xhr.readyState,
                            status: xhr.status,
                            responseText: xhr.responseText,
                            error: e,
                        });
                    } finally {
                        //hide loading
                        // failCb && failCb({
                        //     readyState: xhr.readyState,
                        //     status: xhr.status,
                        //     responseText: xhr.responseText,
                        // });
                    }
                } else {
                    failCb && failCb({
                        readyState: xhr.readyState,
                        status: xhr.status,
                        responseText: xhr.responseText,
                    });
                }
            }
        };

        xhr.onerror = function () {
            AntLog.Debug("sendRequest onerror! retry");
            if (errorCb) {
                errorCb && errorCb();
            } else {
                this.sendRequest(params);
            }
        }.bind(this);

        if (params.isClose) {
            //loading
        }
        xhr.send();
        return xhr;
    }

    private static httpAuth(method, uri, params, ext) {
        var ext = ext || "";
        var signStr = this.httpSignatrueStr(params);
        var str = method + uri + signStr;
        if (typeof (ext) == "string") {
            str += ext;
        }
        str += "13(*&@()9skkfs";
        AntLog.Info("signstr:", str)
        // return Md5(str);
    }

    private static httpAuthProxy(method, uri, params, ext) {
        var ext = ext || "";
        var signStr = this.httpSignatrueStr(params);
        var str = method + uri + signStr;
        if (typeof (ext) == "string") {
            str += ext;
        }
        str += "His7m$#4uO2(~rP9Yu^9N";
        AntLog.Info("signstr:", str)
        // return Md5(str);
    }

    private static httpSignatrueStr(params) {
        if (typeof (params) == "string") {
            return params;
        }
        if (typeof (params) !== "object") {
            return "";
        }
        var keys = Object.keys(params);
        keys.sort();
        var str = "";
        for (var i = 0; i < keys.length; i++) {
            str += keys[i] + params[keys[i]];
        }
        return str;
    }

    private static httpParamsStr(params:any) {
        if (typeof (params) == "string") {
            return params;
        }
        if (typeof (params) !== "object") {
            return "";
        }
        var keys = Object.keys(params);
        keys.sort(function (a, b) {
            return a.length - b.length;
        });

        var str = "";
        for (var i = 0; i < keys.length; i++) {
            str += keys[i] + "=" + params[keys[i]];
            if (i !== keys.length - 1) {
                str += "&";
            }
        }
        return str;
    }

    public static httpRequest(method, url, handler, isClose) {
        var xhr = cc.loader.getXMLHttpRequest();
        xhr.timeout = 50000;
        AntLog.Debug('httpRequest! RequestURL:' + url);
        xhr.open((method ? method : 'POST'), url, true);
        if (cc.sys.isNative) {
            xhr.setRequestHeader('Accept-Encoding', 'gzip,deflate');
        }else{
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        }

        var retry = 0
        xhr.onreadystatechange = function () {
            AntLog.Debug("xhr.status:", xhr.status, ",xhr.readyState:", xhr.readyState)
            if (xhr.readyState === 4 && (xhr.status >= 200 && xhr.status < 300)) {
                AntLog.Debug("length:%s\ndata:%s", xhr.responseText.length, xhr.responseText);
                try {
                    var ret = JSON.parse(xhr.responseText);
                    if (handler !== null) {
                        handler(ret);
                    }
                } catch (e) {
                    AntLog.Info('err:' + e);
                } finally {
                    //隐藏loading
                }
            } else {
                if (xhr.status == 0) {
                    if (this.httpRetry > 0 && this.httpRetry < 3) {
                        //抛出重连事件,3次之后，直接显示登录授权按钮
                        this.httpRetry++
                        //隐藏loading
                    }
                }
            }
        }.bind(this);

        xhr.onerror = function () {
            AntLog.Debug("httpRequest onerror! retry");
            this.httpRequest(method, url, handler, isClose);
        }.bind(this);

        if (isClose) {
            //隐藏loading
        }
        xhr.send();
        return xhr;
    }

    private static httpRequestImg(method, url, handler, isClose) {
        var xhr = cc.loader.getXMLHttpRequest();
        xhr.timeout = 50000;
        AntLog.Debug('httpRequest! RequestURL:' + url);
        xhr.responseType = 'arraybuffer';
        xhr.open((method ? method : 'POST'), url, true);
        if (cc.sys.isNative) {
            xhr.setRequestHeader('Accept-Encoding', 'gzip,deflate');
        }else{
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        }

        var retry = 0
        xhr.onreadystatechange = function () {
            AntLog.Debug("xhr.status:", xhr.status, ",xhr.readyState:", xhr.readyState)
            if (xhr.readyState === 4 && xhr.status >= 200) {
                AntLog.Debug("length:%s\ndata:%s", xhr.responseText.length, xhr.responseText);
                try {
                    if (handler !== null) {
                        handler(xhr.response);
                    }
                } catch (e) {
                    AntLog.Info('err:' + e);
                } finally {
                    //隐藏loading
                }
            } else {
                if (xhr.status == 0) {
                    if (this.httpRetry > 0 && this.httpRetry < 3) {
                        //抛出重连事件,3次之后，直接显示登录授权按钮
                        this.httpRetry++
                        //隐藏loading
                    }
                }
            }
        }.bind(this);

        xhr.onerror = function () {
            AntLog.Debug("httpRequest onerror! retry");
            this.httpRequest(method, url, handler, isClose);
        }.bind(this);

        if (isClose) {
            //隐藏loading
        }
        xhr.send();
        return xhr;
    }

    public static httpRequestWithBody(params: any) {
        var method = params.method ? params.method : "GET";
        var url = params.url ? params.url : URL;
        var data = params.data ? params.data : {};
        var successCb = params.onSuccess ? params.onSuccess : null;
        var failCb = params.onFail ? params.onFail : null;
        var errorCb = params.onError ? params.onError : null;
        
        var xhr = cc.loader.getXMLHttpRequest();
        xhr.timeout = 5000;
        AntLog.Debug('httpRequestWithBody! RequestURL:' + url, "data:", data);
        xhr.open((method ? method : 'POST'), url, true);
        if (cc.sys.isNative) {
            xhr.setRequestHeader('Accept-Encoding', 'gzip,deflate');
        }else{
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        }

        var retry = 0
        xhr.onreadystatechange = function () {
            AntLog.Debug("xhr.status:", xhr.status, ",xhr.readyState:", xhr.readyState)
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && xhr.status < 300) {
                    AntLog.Info('http res(' + xhr.responseText.length + '):' + xhr.responseText);
                    try {
                        var ret = JSON.parse(xhr.responseText);
                        successCb && successCb(ret);
                    } catch (e) {
                        AntLog.Info('err:' + e);
                        failCb && failCb({
                            readyState: xhr.readyState,
                            status: xhr.status,
                            responseText: xhr.responseText,
                            error: e,
                        });
                    } finally {
                    }
                }
            }
        }.bind(this);

        xhr.onerror = function () {
            AntLog.Debug("sendRequest onerror! retry");
            if (errorCb) {
                errorCb && errorCb();
            }
        }.bind(this);

        if (params.isClose) {
            //loading
        }
        let p = this.httpParamsStr(data);
        AntLog.Info("Http send with body! params:", p, ",data:", data)
        xhr.send(p);
        return xhr;
    }

    private static httpRequestJson(method, url, jsonData, handler) {
        var xhr = cc.loader.getXMLHttpRequest();
        xhr.timeout = 50000;
        AntLog.Debug('RequestJsonURL:' + url);
        xhr.open((method ? method : 'POST'), url, true);
        xhr.setRequestHeader("Content-Type", "application/json;charset=utf-8");
        // xhr.setRequestHeader('Accept-Encoding', 'gzip,deflate');
        if (cc.sys.isNative) {
            xhr.setRequestHeader('Accept-Encoding', 'gzip,deflate');
        }else{
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        }

        var retry = 0
        xhr.onreadystatechange = function () {
            AntLog.Debug("json~~~~~~~~~~~~~~~~onreadystatechange:", xhr.status)
            if (xhr.readyState === 4 && (xhr.status >= 200 && xhr.status < 300)) {
                AntLog.Debug("length:%s\ndata:%s", xhr.responseText.length, xhr.responseText);
                try {
                    var ret = JSON.parse(xhr.responseText);
                    if (handler !== null) {
                        handler(ret);
                    }
                } catch (e) {
                    AntLog.Info('err:' + e);
                } finally {
                }
            }
        };
        if (jsonData != null) {
            AntLog.Debug("jsonData:", jsonData, ",typeof:", typeof(jsonData))
            xhr.send(jsonData)
        } else {
            xhr.send();
        }
        return xhr;
    }

    public static httpCreateJellyPlayer(unionid:string, openid:string, handler:any) {
        // var url = "https://s1000.ddz.uqeetest.uqeegame.cn:9000/v1/jelly/users";
        // var method = "POST";

        // var params = {
        //     unionid: unionid,
        //     openid: openid,
        // };

        // var paramStr = encodeURI(this.httpParamsStr(params));
        // this.httpRequestWithBody(method, url, paramStr, handler, false);


        this.httpRequestWithBody({
            url: "https://s1000.ddz.uqeetest.uqeegame.cn:9000/v1/jelly/users",
            method: "POST",
            data: {
                unionid: unionid,
                openid: openid,
            },
            success: handler,
        });
    }

    public static httpSendJellyData(unionid:string, starNum:number, height:number, costumes:string, step:number, handler:any) {
        if(!unionid || unionid == ""){
            return;
        }
        
        // var url = "https://s1000.ddz.uqeetest.uqeegame.cn:9000/v1/jelly/users";
        // var method = "PUT";

        // var params = {
        //     unionid: unionid,
        //     star: starNum,
        //     height : height,
        //     costumes : costumes,
        //     step : step
        // };
        // var paramStr = encodeURI(this.httpParamsStr(params));
        // this.httpRequestWithBody(method, url, paramStr, handler, false);

        this.httpRequestWithBody({
            url: "https://s1000.ddz.uqeetest.uqeegame.cn:9000/v1/jelly/users",
            method: "PUT",
            data: {
                unionid: unionid,
                star: starNum,
                height: height,
                costumes: costumes,
                step: step
            },
            success: handler,
        });
    }

    public static httpGetJellyData(unionid: string, handler:any) {
        if(!unionid || unionid == ""){
            return;
        }

        var url = "https://s1000.ddz.uqeetest.uqeegame.cn:9000/v1/jelly/users";
        var method = "GET";

        url+= cc.js.formatStr("?unionid=%s", unionid);
        this.httpRequest(method, url, handler, false);
    }
};
