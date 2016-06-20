using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using RemoteDataManageModel.Account;
using System.Web.Routing;
using System.Web.UI;
using TonyCommon.Helpers;

namespace RemoteDataManage.Controllers
{
    public class ControllerBase : Controller
    {
        public AccountModel CurrentUser
        {
            get
            {
                AccountModel currentUser = new AccountModel();
                string name = System.Web.HttpContext.Current.User.Identity.Name;
                currentUser.Account = name.Substring(name.LastIndexOf('\\')+1);
                if (currentUser.Account == "ssj2868")
                {
                    currentUser.Account = "";
                }
                return currentUser;
            }
        }

        public ActionResult Index()
        {
            return View();
        }

        protected override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            if (this.CurrentUser == null)
            {
                //当前请求的url
                string returnUrl = filterContext.RequestContext.HttpContext.Request.Url.ToString();

                filterContext.Result = new RedirectToRouteResult("Default", new
                RouteValueDictionary(new
                {
                    controller = "Account",
                    action = "Login",
                    //当前请求的url
                    returnurl = returnUrl
                }));
            }
        }

        protected override void OnActionExecuted(ActionExecutedContext filterContext)
        {
            //base.OnActionExecuted(filterContext);
            //if (this.CurrentUser == null)
            //{
            //    this.Redirect("www.baidu.com");
            //}
        }
    }
}
