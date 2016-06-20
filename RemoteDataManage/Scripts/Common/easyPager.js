
function ShowPagerByGrid(grid) {

    var pager = grid.datagrid("getPager");
    $(pager).pagination({
        pageSize: 10, //每页显示的记录条数，默认为10 
        pageList: [10, 15, 20], //可以设置每页记录条数的列表 
        beforePageText: "第", //页数文本框前显示的汉字 
        afterPageText: "页    共 {pages} 页",
        displayMsg: "当前显示 {from} - {to} 条记录   共 {total} 条记录"
    });
}

function ShowPagerById(id) {

    var pager = $("#" + id).datagrid().datagrid("getPager");
    $(pager).pagination({
        pageSize: 10, //每页显示的记录条数，默认为10 
        pageList: [10,15,20], //可以设置每页记录条数的列表 
        beforePageText: "第", //页数文本框前显示的汉字 
        afterPageText: "页    共 {pages} 页",
        displayMsg: "当前显示 {from} - {to} 条记录   共 {total} 条记录"
    });
}

function ShowPagerByPager(pager) {
    $(pager).pagination({
        pageSize: 10, //每页显示的记录条数，默认为10 
        pageList: [10,15,20], //可以设置每页记录条数的列表 
        beforePageText: "第", //页数文本框前显示的汉字 
        afterPageText: "页    共 {pages} 页",
        displayMsg: "共 {total} 条记录"
    });
}

function LoadPagerByClientData(id, data) {
    $("#" + id).datagrid({ loadFilter: pagerFilter }).datagrid("loadData", data);
}

function pagerFilter(data) {
    if (typeof data.length == "number" && typeof data.splice == "function") { // is array
        data = {
            total: data.length,
            rows: data
        }
    }
    var dg = $(this);
    var opts = dg.datagrid("options");
    var pager = dg.datagrid("getPager");
    pager.pagination({

        pageSize: 10, //每页显示的记录条数，默认为10 
        pageList: [10, 15, 20], //可以设置每页记录条数的列表 
        beforePageText: "第", //页数文本框前显示的汉字 
        afterPageText: "页    共 {pages} 页",
        displayMsg: "当前显示 {from} - {to} 条记录   共 {total} 条记录",

        onSelectPage: function (pageNum, pageSize) {
            opts.pageNumber = pageNum;
            opts.pageSize = pageSize;
            pager.pagination("refresh", {
                pageNumber: pageNum,
                pageSize: pageSize
            });
            dg.datagrid("loadData", data);
        }
    });
    if (!data.originalRows) {
        data.originalRows = (data.rows);
    }
    var start = (opts.pageNumber - 1) * parseInt(opts.pageSize);
    var end = start + parseInt(opts.pageSize);
    data.rows = (data.originalRows.slice(start, end));
    return data;
}