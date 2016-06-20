/// <reference path="../Library/jquery-1.4.4-vsdoc.js" />

//加载所有省列表
function LoadProvinceList(ddlId) {

    $("#" + ddlId).empty();
    $("<option></option>").val("0").text("请选择").appendTo($("#" + ddlId));

    var url = getSecondCatalog() + "/Hospital/GetProvinceList";
    $.getJSON(url, function (data) {

        if (data != null) {
            $.each(data, function (i, item) {
                $("<option></option>")
                .val(item.Value)
                .text(item.Name)
                .appendTo($("#" + ddlId));
            });
        }
    });
}

//根据省Id加载所有市列表
function LoadCityListByProvinceId(ddlId, provinceId) {

    $("#" + ddlId).empty();
    $("<option></option>").val("0").text("请选择").appendTo($("#" + ddlId));

    var url = getSecondCatalog() + "/Hospital/GetCityListByProvinceId";
    $.getJSON(url, { provinceId: provinceId }, function (data) {
        if (data != null) {
            $.each(data, function (i, item) {
                $("<option></option>")
                .val(item.Value)
                .text(item.Name)
                .appendTo($("#" + ddlId));
            });
        }
    });
}

//根据城市Id加载所有行政区列表
function LoadCountyListByCityId(ddlId, cityId) {

    $("#" + ddlId).empty();
    $("<option></option>").val("0").text("请选择").appendTo($("#" + ddlId));

    var url = getSecondCatalog() + "/Hospital/GetCountyListByCityId";
    $.getJSON(url, { cityId: cityId }, function (data) {
        if (data != null) {
            $.each(data, function (i, item) {
                $("<option></option>")
                .val(item.Value)
                .text(item.Name)
                .appendTo($("#" + ddlId));
            });
        }
    });
}


