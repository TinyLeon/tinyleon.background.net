using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using RemoteDataManageModel.SystemUser;
using RemoteDataManageBusiness.SystemUser;
using TonyCommon.Helpers;
using RemoteDataManageModel.Common;
using Newtonsoft.Json;

namespace RemoteDataManage.Controllers.SystemUser
{
    public partial class SystemUserController : ControllerBase
    {
        #region Menu
        public ActionResult MenuInfoManage()
        {
            return View();
        }

        public ActionResult MenuInfoManageSearch()
        {
            string menuName = WebRequestHelper.GetStringFromParameters("MenuName");
            List<SystemMenuInfoModel> menuInfoList = SystemMenuInfoBusiness.GetSystemMenuInfoList(menuName);

            DataGridPageList<SystemMenuInfoModel> menuInfoPageList = new DataGridPageList<SystemMenuInfoModel>();
            menuInfoPageList.rows = menuInfoList;

            return Json(menuInfoPageList);
        }


        public ActionResult MenuInfoEdit()
        {
            int menuID = WebRequestHelper.GetIntFromParameters("MenuID");
            int parentMenuID = WebRequestHelper.GetIntFromParameters("ParentMenuID");

            SystemMenuInfoModel menuInfo = new SystemMenuInfoModel();
            menuInfo = SystemMenuInfoBusiness.GetSystemMenuInfo(menuID);

            //添加子菜单
            if(menuID==0 && parentMenuID!=0)
            {
                //层级
                SystemMenuInfoModel parentMenuInfo = SystemMenuInfoBusiness.GetSystemMenuInfo(menuID);
                menuInfo.MenuLevel = parentMenuInfo.MenuLevel + 1;
                menuInfo.ParentMenuID = parentMenuID;
            }

            //默认层级为 1
            if (menuInfo.MenuLevel == 0)
            {
                menuInfo.MenuLevel = 1;
            }
            
            return View(menuInfo);
        }

        [HttpPost]
        public ActionResult MenuInfoEdit(SystemMenuInfoModel menuInfo)
        {
            bool isSuccess = SystemMenuInfoBusiness.SaveSystemMenuInfo(menuInfo);

            ViewBag.Message = isSuccess ? "保存成功" : "保存失败";
            ViewBag.IsSuccess = isSuccess;

            return View(menuInfo);
        }


        public ActionResult DeleteMenuInfo()
        {
            int menuID = WebRequestHelper.GetIntFromParameters("MenuID");
            bool isSuccess = SystemMenuInfoBusiness.DeleteMenuInfo(menuID);

            ReturnInfoModel returnInfo = new ReturnInfoModel();
            returnInfo.IsSuccess = isSuccess;
            returnInfo.Message = isSuccess ? "删除成功" : "删除失败";

            return Json(returnInfo);
        }
        #endregion


        public ActionResult GetAccordionMenu()
        {
            List<SystemMenuInfoModel> accordionMenu = SystemMenuInfoBusiness.GetAccordionMenu(this.CurrentUser.Account);
            //一级菜单只需要ParentMenuID = 0 的
            accordionMenu = accordionMenu.Where(m => m.ParentMenuID == 0).ToList();

            return Json(accordionMenu);
        }


        public ActionResult GetTreeSencondMenu()
        {
            int parentMenuID = WebRequestHelper.GetIntFromParameters("ParentMenuID");
            DHTMLXTreeModel treeSecondMenu = SystemMenuInfoBusiness.GetTreeSencondMenu(this.CurrentUser.Account, parentMenuID);

            string f = JsonConvert.SerializeObject(treeSecondMenu);
            return Json(f);
        }

        #region 暂时不用
        //public ActionResult GetTreeMenu()
        //{
        //    DHTMLXTreeModel treeMenu = SystemUserRoleRelationBusiness.GetTreeMenuByAccount(this.CurrentUser.Account);

        //    string f = JsonConvert.SerializeObject(treeMenu);
        //    return Json(f);
        //}

        //public ActionResult GetAccordionSencondMenu()
        //{
        //    int parentMenuID = WebRequestHelper.GetIntFromParameters("ParentMenuID");
        //    List<SystemMenuInfoModel> accordionMenu = SystemUserRoleRelationBusiness.GetAccordionSencondMenu(this.CurrentUser.Account, parentMenuID);

        //    return Json(accordionMenu);
        //}
        #endregion

    }
}