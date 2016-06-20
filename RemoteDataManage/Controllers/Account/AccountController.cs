using RemoteDataManageModel.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;


namespace RemoteDataManage.Controllers.Account
{
    public class AccountController : Controller
    {
        #region Login
        public ActionResult Login(string returnUrl)
        {
            ViewBag.Title = "Leon background System";
            return View();
        }

        [HttpPost]
        public ActionResult Login()
        {
            string errorMessage = string.Empty;

            ReturnInfoModel returnInfo = new ReturnInfoModel();
            
            if (true)
            {
                return RedirectToAction("Admin", "Main");
            }
            else
            {
                errorMessage = returnInfo.Message;

                if (string.IsNullOrEmpty(errorMessage))
                {
                    errorMessage = "发生未知错误!";
                }
            }

            ViewBag.ErrorMessage = errorMessage;

            return View();
        }

        public ActionResult Logout()
        {
            Session["CurrentUser"] = null;
            return RedirectToAction("Login", "Account");
        }
        #endregion
    }
}
