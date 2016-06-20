$(document).ready(function () {
    //菜单Json对象绑定html标签
    var _menu_json = null;

    var url = getSecondCatalog() + "/SystemMenuInfo/GetAllMenu";
    $.ajax({
        url: url,
        type: "post",
        async: false,
        success: function (data) {
            if (data)
                _menu_json = data;
        }
    });

    //递归加载菜单项
    var _menu_str = "";
    function menu(_pid, sub_menu_json) {
        $.each(sub_menu_json, function (index1, item1) {
            _menu_str += "<li><a class='dropdown-toggle' menuid='"
                + item1.id + "' href='#'><i class='iconN-folder-close '></i><span class='menu-text'>"
                + item1.text + "</span><b class='arrow icon-angle-down ui-icon ui-icon-carat-1-s'></b></a>";
            _menu_str += "<ul class='submenu'>";
            //绑定第二级菜单
            if (item1.item && item1.item.length > 0) {
                $.each(item1.item, function (index2, item2) {
                    if (item2.userdata && item2.userdata.length > 0 && item2.userdata[0].content != 0) {//如果有菜单链接,即为最后一级
                        _menu_str += "<li><a class='' menuid='"
                            + item2.id + "' id='' href='"
                            + getSecondCatalog() + item2.userdata[0].content + "'><i class='iconN-th '></i><span class='menu-text'>"
                            + item2.text + "</span></a></li>";
                    }
                    else {//如果没有链接，即为父级菜单
                        if (item2.item && item2.item.length > 0) {//绑定第三级菜单
                            _menu_str += "<li><a class='dropdown-toggle' menuid='"
                                + item2.id + "' id='' href='#'><i class='iconN-folder-close '></i><span class='menu-text'>"
                                + item2.text + "</span></a>";
                            _menu_str += "<ul class='submenu' style='display: none;'>";
                            $.each(item2.item, function (index3, item3) {
                                _menu_str += "<li><a class='' menuid='"
                                    + item3.id + "' id='' href='"
                                    + ((item3.userdata != null && item3.userdata.length > 0 && item3.userdata[0].content != 0)
                                    ? getSecondCatalog() + item3.userdata[0].content : "") + "'><i class='iconN-th '></i><span class='menu-text'>"
                                    + item3.text + "</span></a></li>";

                            });
                            _menu_str += "</ul></li>";
                        }
                    }
                });
            }//第二级菜单
            _menu_str += "</ul></li>";
        });
    }

    //绑定菜单的所有事件
    function menuSelected() {
        $("ul.submenu>li>a").click(function (e) {
            e.preventDefault();
            var self = $(this);
            var _href = $(this).attr("href");
            if (_href == "#" || !_href)
                return;
            $("#tabName").val(self.find("span").html());
            $("#tabUrl").val(_href)
            $("#btnAddTab").click();
        });
    }

    //绑定菜单选取事件
    $("#parentMenu").find("li").click(function () {
        var $this = $(this);
        $this.addClass("parent-menu-active").siblings().removeClass("parent-menu-active");//调整选中的样式

        //修改菜单描述
        $("#menuIntroduction").find("img").attr("src", $this.find("img").attr("src"));
        $("#menuIntroduction").find("label").text($this.find("label").text());

        _menu_str = "";
        if (!$this.attr("data-menuid")) {
            $("ul.nav-list").html(_menu_str);
            return;
        }
        $.each(_menu_json, function (index, item) {
            if (item.id == $this.attr("data-menuid")) {
                //绑定数据到HTML上
                menu(null, item.item);
                if (_menu_str && _menu_str != "") {
                    $("ul.nav-list").html(_menu_str);
                    menuSelected();
                }
            }
        });
    });

    $("#parentMenu").find("li").first().click();

    var divContentHeight = $("#divMain").height();
    $("#tabMain").height(divContentHeight);

    //删除tab中不好看的样式
    $("#tabMain").find(".tabs-header").css("border-style", "none");

    //加载菜单，从parentid为NULL开始检索
    //menu(null);

    //点击添加页签
    $("#btnAddTab").click(function () {
        AddTab()
    });

    //添加页签
    function AddTab() {
        var tabs = $("#tabMain");

        var tabName = $("#tabName").val();
        var tabUrl = $("#tabUrl").val();

        if ($("#tabMain").tabs("exists", tabName)) {
            $("#tabMain").tabs("select", tabName);
        }
        else {
            $("#tabMain").tabs("add", {
                title: tabName,
                content: "<iframe frameborder='0' src='" + tabUrl + "' style='height:" + (divContentHeight + 2) + "px;width:100%' ></iframe>",
                closable: true,
                loadingMessage: "正在努力加载...."
            });
        }
    }

    //登出
    $("#logout").click(function () {
        Confirm("确认要退出吗？", function (result) {
            if (result) {
                $.post(getSecondCatalog() + "/Account/Logout", function (data) {
                    window.location.href = getSecondCatalog();
                });
            }
        });
    });

    //bootstrap shown event
    $("#full-width").bind("shown.bs.modal", function () {
        //alert("bootDialog shown  success!");
    });

    //bootstrap hide event
    $("#full-width").bind("hide.bs.modal", function () {
        $("#full-width .modal-header .modal-title").html("");
        $("#full-width .modal-body").html("");
    });

    //各种dialog范例
    //$("#modalWithFade").click(function () {
    //    $("#full-width").addClass("fade");
    //});

    $("#modalWithNoFade").click(function () {
        $("#full-width").removeClass("fade");
    });

    $("#dhxDialog").click(function () {
        ShowDialog("test", "", 600, 400);
    });

    $("#easyUIDialogModal").click(function () {
        dialog({
            url: "",
            modal: true
        });
    });

    $("#easyUIDialogNoModal").click(function () {
        dialog({
            url: "",
            modal: false
        });
    });
});


