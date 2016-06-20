using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using TonyCommon.Helpers;
using System.Web.Mvc;
using RemoteDataManageBusiness.SystemUser;
using RemoteDataManageModel.SystemUser;
using RemoteDataManageModel.Common;
using Newtonsoft.Json;

namespace RemoteDataManage.Controllers.SystemUser
{
    public partial class SystemUserController : ControllerBase
    {
        #region RoleInfo
        public ActionResult RoleInfoManage()
        {
            return View();
        }

        public ActionResult RoleInfoManageSearch()
        {
            string roleName = WebRequestHelper.GetStringFromParameters("RoleName");
            int pageSize = WebRequestHelper.GetIntFromParameters("rows");
            int currentPage = WebRequestHelper.GetIntFromParameters("page");

            DataGridPageList<SystemRoleInfoModel> roleInfoPageList = SystemRoleInfoBusiness.GetSystemRoleInfoPageList(roleName,pageSize,currentPage);

            return Json(roleInfoPageList);
        }

        public ActionResult RoleInfoEdit()
        {
            int roleID = WebRequestHelper.GetIntFromParameters("RoleID");

            SystemRoleInfoModel roleInfo = new SystemRoleInfoModel();
            roleInfo = SystemRoleInfoBusiness.GetSystemRoleInfo(roleID);

            return View(roleInfo);
        }

        [HttpPost]
        public ActionResult RoleInfoEdit(SystemRoleInfoModel roleInfo)
        {
            bool isSuccess = SystemRoleInfoBusiness.SaveSystemRoleInfo(roleInfo);

            ViewBag.Message = isSuccess ? "保存成功" : "保存失败";
            ViewBag.IsSuccess = isSuccess;

            return View(roleInfo);
        }


        public ActionResult DeleteRoleInfo()
        {
            int roleID = WebRequestHelper.GetIntFromParameters("RoleID");
            bool isSuccess = SystemRoleInfoBusiness.DeleteRoleInfo(roleID);

            ReturnInfoModel returnInfo = new ReturnInfoModel();
            returnInfo.IsSuccess = isSuccess;
            returnInfo.Message = isSuccess ? "删除成功" : "删除失败";

            return Json(returnInfo);
        }


        public ActionResult GetUserRoleRelation()
        {
            int userID = WebRequestHelper.GetIntFromParameters("UserID");

            List<SystemRoleInfoModel> roleList = SystemRoleInfoBusiness.GetSystemRoleInfoListByUserID(userID);
            return Json(roleList);
        }

        #endregion

        #region RoleMenuRelation
        public ActionResult RoleMenuRelationManage()
        {
            int roleId = WebRequestHelper.GetIntFromParameters("RoleID");

            SystemRoleInfoModel roleInfo = new SystemRoleInfoModel();
            roleInfo = SystemRoleInfoBusiness.GetSystemRoleInfo(roleId);

            return View(roleInfo);
        }

        public ActionResult GetRoleMenuRelation()
        {
            int roleID = WebRequestHelper.GetIntFromParameters("RoleID");

            DHTMLXTreeModel menuTree = SystemRoleMenuRelationBusiness.GetMenuTree(roleID);
            string f = JsonConvert.SerializeObject(menuTree).Replace("Checked","checked");
            return Json(f);
        }

        public ActionResult RoleMenuRelationSave()
        {
            int roleID = WebRequestHelper.GetIntFromParameters("RoleID");
            string menuIDs = WebRequestHelper.GetStringFromParameters("MenuIDs");

            string[] menuIDArray = menuIDs.Split(',');

            List<int> menuIDList = new List<int>();
            for (int i = 0; i < menuIDArray.Length; i++)
            {
                menuIDList.Add(Convert.ToInt32(menuIDArray[i]));
            }

            ReturnInfoModel returnInfo = new ReturnInfoModel();

            returnInfo.IsSuccess = SystemRoleMenuRelationBusiness.SaveRoleMenuRelation(roleID, menuIDList);
            returnInfo.Message = returnInfo.IsSuccess ? "保存成功！" : "保存失败！";
            return Json(returnInfo);
        }

        public ActionResult RoleUserRelationManage()
        {
            int roleID = WebRequestHelper.GetIntFromParameters("RoleID");
            List<SystemUserInfoModel> userInfoList = SystemUserInfoBusiness.GetSystemUserInfoListByRoleID(roleID);

            return View(userInfoList);
        }
        #endregion
    }
}