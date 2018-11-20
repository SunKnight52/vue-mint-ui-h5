const owner = {}
    owner.heads = function () {
        var language;
        if (!plus.storage.getItem('isLanguage') || plus.storage.getItem('isLanguage') == "ch") {
            language = "1"
        } else {
            language = "2"
        }
        var heads = {
            'v': plus.runtime.version,  //app客户端版号
            'device_type': "1",			//设备类型
            'device_id': plus.device.uuid,	//手机设备id,唯一性
            'app_version': plus.runtime.version,	//app客户端版号
            'Authorization': plus.storage.getItem('token'), //通过键(key)检索获取应用存储的值
            'Accept': 'application/json',
            "language": language		//语言
        };
        return heads;
    };
    owner.closePage = function (name) {    //h5
        var nowpage;
        if (name) {
            var wvs = plus.webview.all();
            for (var i = 0; i < wvs.length; i++) {
                if (wvs[i].id == name) {
                    plus.webview.hide(wvs[i]);
                    plus.webview.close(wvs[i]);
                }
            }
            plus.webview.hide(nowpage);
        } else {
            nowpage = plus.webview.currentWebview();
        }
        if (nowpage != null)
            plus.webview.close(nowpage);
    };
    owner.closeApp = function (name) {		//关闭app  h5 name??
        var h = plus.webview.getWebviewById(plus.runtime.appid);
        //		console.log(h.id + "启动页");
        var wvs = plus.webview.all();
        for (var i = 0; i < wvs.length; i++) {
            var isbread = false;
            if (name) {
                for (var k = 0; k < name.length; k++) {
                    if (name[k] == wvs[i].id) {
                        isbread = true;
                        break;
                    }
                }
            }
            if (isbread) {
                break;
            }
            console.log(h)
            
            if (wvs[i].id != h.id) {
                console.log(2)
                plus.webview.hide(wvs[i]);
                plus.webview.close(wvs[i]);
            }
        }
        plus.webview.hide(wvs[i]);
        plus.webview.close(wvs[i]);
    };
    owner.hideApp = function (name) {		//隐藏app   h5   name???
        var h = plus.webview.getWebviewById(plus.runtime.appid);
        h.reload();
        var wvs = plus.webview.all();
        for (var i = 0; i < wvs.length; i++) {
            var isbread = false;
            if (name) {
                for (var k = 0; k < name.length; k++) {
                    if (name[k] == wvs[i].id) {
                        isbread = true;
                        break;
                    }
                }
            }
            if (isbread) {
                break;
            }
            if (wvs[i].id != h.id) {
                plus.webview.hide(wvs[i]);
                //				plus.webview.close(wvs[i]);
            }
        }
    };

    owner.myTrim = function (x) {           //删除空白行
        return x.replace(/^\s+|\s+$/gm, '');
    };

export default owner;