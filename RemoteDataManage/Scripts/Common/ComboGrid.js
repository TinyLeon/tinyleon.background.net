function ShowAccountComBox(emailId, nameId) {
    $("#" + emailId).combogrid({
        panelWidth: 450,
        striped: true,
        delay: 500,
        mode: "remote",
        fitColumns: true,
        idField: "Email",
        textField: "Email",
        url: "../Account/GetAccountList",
        columns: [[
            { field: "Account", title: "Account", width: 60 },
             { field: "Name", title: "Name", width: 60 },
             { field: "Email", title: "Email", width: 100 },
             { field: "Division", title: "Division", width: 120 }
            ]],
        onSelect: function (rowIndex, rowData) {
            $("#" + nameId).val(rowData.Name);
        },
        onChange: function (newValue, oldValue) {
            $("#" + valueId).val("");
        },
        onHidePanel: function () {
            if ($("#" + valueId).val() == "") {
                $(this).combogrid("setValue", "");
            }
        },
        pagination: true, //是否分页  
        rownumbers: true //序号        
    });

    var pagers = $("#" + emailId).combogrid("grid").datagrid("getPager");
    ShowPagerByPager(pagers);
}

function ShowHospitalComBox(nameId,valueId) {

    $("#" + nameId).combogrid({
        panelWidth: 550,
        panelHeight: 310,
        striped: true,
        delay: 500,
        mode: "remote",
        fitColumns: true,
        idField: "DMSCode",
        textField: "Name_CN",
        url: "../Main/GetHospitalList",
        hideColumn: [[
	                { field: "DMSCode", title: "DMSCode" },
				]],
        columns: [[
             { field: "Name_CN", title: "Name_CN", width: 150 },
             { field: "ShortName", title: "ShortName", width: 120 },
             { field: "Name_EN", title: "Name_EN", width: 120 }
            ]],
        onSelect: function (rowIndex, rowData) {
            $("#" + valueId).val(rowData.DMSCode);
        },
        onChange: function (newValue, oldValue) {
            $("#" + valueId).val("");
        },
        onHidePanel: function () {
            if ($("#" + valueId).val() == "") {
                $(this).combogrid("setValue", "");
            }
        },
        pagination: true, //是否分页  
        rownumbers: true//序号
    });

    var pagers = $("#" + nameId).combogrid("grid").datagrid("getPager");
    ShowPagerByPager(pagers);
}

function ShowDealerComBox(nameId, valueId) {

    $("#" + nameId).combogrid({
        panelWidth: 550,
        panelHeight: 310,
        striped: true,
        delay: 500,
        mode: "remote",
        fitColumns: true,
        idField: "Name_CN",
        textField: "Name_CN",
        url: "../Main/GetDealerList",
        hideColumn: [[
	                { field: "DealerID", title: "DealerID" },
				]],
        columns: [[
             { field: "Name_CN", title: "Name_CN", width: 200 },
             { field: "Name_EN", title: "Name_EN", width: 170 },
             { field: "DealerType", title: "DealerType", width: 70 }
            ]],
        onSelect: function (rowIndex, rowData) {
            $("#" + valueId).val(rowData.DealerID);
        },
        onChange: function (newValue, oldValue) {
            $("#" + valueId).val("");
        },
        onHidePanel: function () {
            if ($("#" + valueId).val() == "") {
                $(this).combogrid("setValue", "");
            }
        },
        pagination: true, //是否分页  
        rownumbers: true//序号
    });

    var pagers = $("#" + nameId).combogrid("grid").datagrid("getPager");
    ShowPagerByPager(pagers);
}

function ShowDivisionComBox(nameId, valueId) {
    $("#" + nameId).combogrid({
        panelWidth: 300,
        striped: true,
        //delay: 500, 
        //mode: "remote",
        fitColumns: true,
        idField: "Division",
        textField: "Division",
        url: "../Account/GetDivisionList",
        hideColumn: [[
	                { field: "DivisionID", title: "DivisionID" },
				]],
        columns: [[
             { field: "DivisionID", title: "DivisionID" },
             { field: "Division", title: "Division", width: 60 },
             { field: "Name_CN", title: "Name_CN", width: 120 },
             { field: "ShortName", title: "ShortName", width: 60 }
            ]],        
        onSelect: function (rowIndex, rowData) {
            $("#" + valueId).val(rowData.DivisionID);
        },
        onChange: function (newValue, oldValue) {
            $("#" + valueId).val("");
        },
        onHidePanel: function () {
            if ($("#" + valueId).val() == "") {
                $(this).combogrid("setValue", "");
            }
        }
    });
}

function ShowHospitalComBoxForHospital(nameId, valueId) {

    $("#" + nameId).combogrid({
        panelWidth: 410,
        panelHeight: 300,
        striped: true,
        delay: 500,
        mode: "remote",
        fitColumns: true,
        idField: "DMSCode",
        textField: "DMSCode",
        url: "../Hospital/GetHospitalMasterList",
        columns: [[
             { field: "DMSCode", title: "医院编号", width: 80 },
             { field: "NameCN", title: "中文名称", width: 220 }
            ]],
        onSelect: function (rowIndex, rowData) {
            $("#" + valueId).val(rowData.NameCN);
        },
        onChange: function (newValue, oldValue) {
            $("#" + valueId).val("");
        },
        onHidePanel: function () {
            if ($("#" + valueId).val() == "") {
                $(this).combogrid("setValue", "");
            }
        },
        pagination: true, //是否分页  
        rownumbers: true//序号
    });

    var pagers = $("#" + nameId).combogrid("grid").datagrid("getPager");
    ShowPagerByPager(pagers);
}


function ShowCompetitorComBox(nameId, valueId) {

    $("#" + nameId).combogrid({
        panelWidth: 550,
        panelHeight: 310,
        striped: true,
        delay: 500,
        mode: "remote",
        fitColumns: true,
        idField: "CompanyID",
        textField: "NameCN",
        url: "../HospitalOthers/GetCompetitorListForComboGrid",        
        frozenColumns: [[
	                { field: "NameCN", title: "NameCN", width: 150 },
				]],
        columns: [[
					{ field: "NameEN", title: "NameEN", width: 100 },
                    { field: "Memo1", title: "Memo1", width: 90 },
                    { field: "Memo2", title: "Memo2", width: 90 },
				]],
        onSelect: function (rowIndex, rowData) {
            $("#" + valueId).val(rowData.CompanyID);
        },
        onChange: function (newValue, oldValue) {
            $("#" + valueId).val("");
        },
        onHidePanel: function () {
            if ($("#" + valueId).val() == "") {
                $(this).combogrid("setValue", "");
            }
        },
        pagination: true, //是否分页  
        rownumbers: true//序号
    });

    var pagers = $("#" + nameId).combogrid("grid").datagrid("getPager");
    ShowPagerByPager(pagers);
}

function ShowCompetitorProductComBox(nameId, valueId) {
    $("#" + nameId).combogrid({
        panelWidth: 550,
        panelHeight: 310,
        striped: true,
        delay: 500,
        mode: "remote",
        fitColumns: true,
        idField: "ProductLineID",
        textField: "CompetitorProductName",
        url: "../HospitalOthers/GetCompetitorProductListForComboGrid",        
        frozenColumns: [[
	                { field: "CompetitorProductName", title: "CompetitorProductName", width: 150 },
				]],
        columns: [[
					{ field: "CompetitorProductRef", title: "CompetitorProductRef", width: 150 },
                    { field: "CompanyName", title: "CompanyName", width: 100 },
                    { field: "Memo1", title: "Memo1", width: 90 },
                    { field: "Memo2", title: "Memo2", width: 90 },
				]],
        onSelect: function (rowIndex, rowData) {
            $("#" + valueId).val(rowData.ProductLineID);
        },
        onChange: function (newValue, oldValue) {
            $("#" + valueId).val("");
        },
        onHidePanel: function () {
            if ($("#" + valueId).val() == "") {
                $(this).combogrid("setValue", "");
            }
        },
        pagination: true, //是否分页  
        rownumbers: true//序号
    });

    var pagers = $("#" + nameId).combogrid("grid").datagrid("getPager");
    ShowPagerByPager(pagers);
}

function ShowUPNComBox(nameId, textId1, textId2) {
    $("#" + nameId).combogrid({
        panelWidth: 550,
        panelHeight: 310,
        striped: true,
        delay: 500,
        mode: "remote",
        fitColumns: true,
        idField: "UPN",
        textField: "UPN",
        url: "../SampleModule/GetUPNInfoPageList",
        frozenColumns: [[
	                { field: "UPN", title: "UPN", width: 150 },
				]],
        columns: [[
					{ field: "UPN_Description", title: "UPN Description", width: 250 },
                    { field: "Division", title: "Division", width: 100 },
				]],
        onSelect: function (rowIndex, rowData) {
            $("#" + textId1).text(rowData.UPN_Description);
            $("#" + textId2).text(rowData.Division);
        },
        onChange: function (newValue, oldValue) {
            $("#" + valueId).val("");
        },
        onHidePanel: function () {
            if ($("#" + valueId).val() == "") {
                $(this).combogrid("setValue", "");
            }
        },
        pagination: true, //是否分页  
        rownumbers: true//序号
    });

    var pagers = $("#" + nameId).combogrid("grid").datagrid("getPager");
    ShowPagerByPager(pagers);
}