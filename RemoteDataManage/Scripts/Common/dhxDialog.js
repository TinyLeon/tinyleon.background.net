
var dhxWins;

function ShowDialog(title, Url, width, height) {    
    dhxWins = new dhtmlXWindows();
    //dhxWins.keepInViewport(true);
    //dhxWins.enableAutoViewport(true);
    //dhxWins.setImagePath("../Scripts/Library/dhtmlx/dhtmlxWindows/imgs/");
    //dhxWins.setSkin("dhx_skyblue");

    dhxWins = dhxWins.createWindow("w1", 0, 0, width, height);
    dhxWins.progressOn();
    dhxWins.center();
    //dhxWins.centerOnScreen();
    dhxWins.bringToTop();
    dhxWins.setText(title);
    dhxWins.setModal(true);
    dhxWins.button("park").hide();
    dhxWins.button("minmax1").hide();
    dhxWins.attachURL(Url);

    // global events
    dhxWins.attachEvent("onContentLoaded", function (win) {
        win.progressOff();
    });
}

function CloseDialogAndRefreshParent() {
    parent.LoadData();
    parent.dhxWins.close();
}

function CloseDialog() {
    parent.dhxWins.close();
}

function dhtmlxMessage(message)
{
    dhtmlx.message({
        text: message,
        expire: 1000
    });
}