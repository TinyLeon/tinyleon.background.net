using System.Collections.Generic;
using System.Web.Mvc;
using RemoteDataManageModel.Common;
using TonyCommon.Helpers;
using System.Web;
using System;
using System.IO;
using System.Data;
using System.Text;

using RemoteDataManageModel.Account;

namespace RemoteDataManage.Controllers.Main
{
    public partial class MainController : ControllerBase
    {
        public ActionResult Admin()
        {
            ViewBag.UserName = this.CurrentUser.Account;
            return View();
        }
    }
}