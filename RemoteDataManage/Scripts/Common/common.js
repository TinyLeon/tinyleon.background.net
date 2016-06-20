
function stringToJson(stringValue) {
    eval("var theJsonValue = " + stringValue);
    return theJsonValue;
}
//获取二级目录
function getSecondCatalog() {
    return "/leon/";
}

//easyUI dialog
function dialog(options) {
    var win = window.top.document.createElement("div");
    var dfd = $.Deferred();
    options = options || {};
    options = $.extend({
        title: 'My Dialog',
        width: 750,
        height: 500,
        closed: false,
        cache: false,
        maximizable: true,
        resizable: true,
        onClose: function () {
            $(this).dialog('destroy');
        },
        modal: true
    }, options);
    var div = $(win);

    div.dialog(options);
    dfd.resolve({ target: div, module: null });
    return dfd;

}
//提示
function tip(message) {
    ZENG.msgbox.show(message, 4, 2000, null, null);
}
//错误
function error(message) {
    ZENG.msgbox.show(message, 5, 2000, null, null);
}
//弹框输入
function prompt(message, callback) {
    bootbox.prompt(message, callback);
}
//确认
function Confirm(message, callback) {
    bootbox.confirm(message, callback)
}

function GetFormValue(formId) {
    var map = {};
    $("[name]", $("#" + formId)).each(function (_i) {
        var tmpName = $(this).attr('name');
        var type = $(this).attr('type');
        if (type != null) {
            switch (type) {
                case 'radio':
                    $.each($(this), function () {
                        if ($(this).attr("checked")) {
                            map[tmpName] = $(this).val();
                        }
                    });
                    break;
                default: map[tmpName] = $(this).val();
            }
        } else {
            map[tmpName] = $(this).val();
        }
    });
    return map;
}

function openTopWindow(options) {
    //function easyui_openTopWindow(title, width, height, url, isModal, callbackFunc, obj) {

    var top = "", left = "";
    var maxHeight = window.top.document.body.clientHeight;
    var maxWidth = window.top.document.body.clientWidth;
    if (options.height > maxHeight) { top = "top:5px;"; options.height = maxHeight - 10; }
    if (options.width > maxWidth) { left = "left:5px;"; options.width = maxWidth - 10; }
    var date = new Date().pattern("yyyy-MM-dd-HH:mm:ss");
    var win = window.top.document.createElement("div");

    win.setAttribute("name", "openTopWindow" + date);
    options.url + "&name=openTopWindow" + date;
    win.setAttribute("style", top + left);

    window.top.document.body.appendChild(win);

    (function (title, width, height, url, callbackFunc) {
        return function () {
            window.top.$(win).window({
                title: "<span style='color:#333333' >&nbsp;&nbsp;&nbsp;" + title + "</span> ",
                width: width,
                modal: true,
                shadow: false,
                height: height,
                draggable: true,
                zIndex: 90000,
                // inline:true,
                collapsible: true,
                minimizable: false,
                maximizable: true,
                closable: true,
                content: "<iframe scrolling='auto'  frameborder='0' src=" + url + " style='width:100%;height:99%;'></iframe>",
                onClose: function () {
                    if (callbackFunc != null) {
                        var returnV = window.top.$("[name^='openTopWindow']:last").data("returnValue");
                        if (!returnV) {
                            returnV = "";
                        }
                        if (callbackFunc) {
                            callbackFunc(returnV);
                        }

                    }
                    window.top.$("[name^='openTopWindow']:last").window('destroy', false);
                },
                onMove: function (_left, _top) {
                    var _this = window.top.$("[name^='openTopWindow']:last");
                    if (_top < 0) {
                        _this.window('move', {
                            left: _left,
                            top: 0
                        });
                    }
                }
            });
        }
    }(options.title, options.width, options.height, options.url, options.callbackFunc))();
    window.top.$(win).window('open');
}

function closeTopWindow(returnValue) {
    if (window != top) {
        if (returnValue == null) returnValue = "";
        window.top.$("[name^='openTopWindow']:last").data("returnValue", returnValue).window('close');
    }
}

/**
* 把日期格式化成 yyyy-MM-dd HH(hh):mm:ss var date = new Date();
* window.alert(date.pattern("yyyy-MM-dd hh:mm:ss"));
* 万利 2015/4/17
* @param {}
*            fmt
* @return {}
*/
Date.prototype.pattern = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, // 月份
        "d+": this.getDate(), // 日
        "h+": this.getHours() % 12 == 0 ? 12 : this.getHours() % 12, // 小时
        "H+": this.getHours(), // 小时
        "m+": this.getMinutes(), // 分
        "s+": this.getSeconds(), // 秒
        "q+": Math.floor((this.getMonth() + 3) / 3), // 季度
        "S": this.getMilliseconds() // 毫秒
    };
    var week = {
        "0": "\u65e5",
        "1": "\u4e00",
        "2": "\u4e8c",
        "3": "\u4e09",
        "4": "\u56db",
        "5": "\u4e94",
        "6": "\u516d"
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    if (/(E+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? "\u661f\u671f" : "\u5468") : "") + week[this.getDay() + ""]);
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }
    return fmt;
}

//bootstrap Dialog
function bootWideDialog(title, url, height, isAnimate, isInsideModal) {
    if (!isAnimate)
        $("#full-width", parent.document).removeClass("fade");
    else
        $("#full-width", parent.document).addClass("fade");

    $("#full-width .modal-header .modal-title", parent.document).html(title)
    $("#full-width .modal-body", parent.document).html("<iframe frameborder='0' id='iframe' style='width:100%;height:"
        + height + "px;position:relative' src='" +
        url + "'></iframe>");
    //});
    if (isInsideModal)
        $("#full-width", parent.document).modal('toggle');
    else
        $("#modalWithFade", parent.document).click();
}

//页面加载成功后该做的事
$(function () {
    //日期控件
    //$(".WdatePicker").each(function () {
    //    $(this).bind('click focus', function () {
    //        WdatePicker();
    //    });
    //});
    $('.WdatePicker').each(function () {
        $(this).datetimepicker({
            language: 'en',
            weekStart: 1,
            todayBtn: 1,
            autoclose: 1,
            todayHighlight: 1,
            startView: 2,
            minView: 2,
            forceParse: 0,
            format: 'yyyy-mm-dd'
        });
    });


    //日期控件组合
    $('.WdatePickerRanage').each(function () {
        var inputs = $(this).children('input');

        $(inputs[0]).bind('click focus', function () {
            var maxDate = inputs[1].value;
            WdatePicker({
                maxDate: maxDate,
                onpicked: function () {
                    $(inputs[1]).focus();
                }
            });
        });
        $(inputs[1]).bind('click focus', function () {
            var minDate = inputs[0].value;
            WdatePicker({ minDate: minDate });
        });
    });
});