using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TonyCommon.Helpers;
using RemoteDataManageModel.Common;
using RemoteDataManageModel.SystemUser;
using RemoteDataManageBusiness.SystemUser;
using Newtonsoft.Json;

namespace RemoteDataManage.Controllers.SystemUser
{
    public partial class SystemUserController
    {
        #region UserInfo
        public ActionResult UserInfoManage()
        {
            return View();
        }

        public ActionResult UserInfoManageSearch()
        {
            string userName = WebRequestHelper.GetStringFromParameters("UserName");
            string realName = WebRequestHelper.GetStringFromParameters("RealName");
            int pageSize = WebRequestHelper.GetIntFromParameters("rows");
            int currentPage = WebRequestHelper.GetIntFromParameters("page");

            DataGridPageList<SystemUserInfoModel> userInfoPageList = SystemUserInfoBusiness.GetSystemUserInfoPageList(userName, realName, pageSize, currentPage);

            return Json(userInfoPageList);
        }

        public ActionResult UserInfoEdit()
        {
            int userID = WebRequestHelper.GetIntFromParameters("UserID");

            SystemUserInfoModel userInfo = new SystemUserInfoModel();
            userInfo = SystemUserInfoBusiness.GetSystemUserInfo(userID);
            return View(userInfo);
        }

        [HttpPost]
        public ActionResult UserInfoEdit(SystemUserInfoModel userInfo)
        {
            bool isSuccess = SystemUserInfoBusiness.SaveSystemUserInfo(userInfo);

            ViewBag.Message = isSuccess ? "保存成功" : "保存失败";
            ViewBag.IsSuccess = isSuccess;

            return View(userInfo);
        }

        public ActionResult DeleteUserInfo()
        {
            int userID = WebRequestHelper.GetIntFromParameters("UserID");
            bool isSuccess = SystemUserInfoBusiness.DeleteUserInfo(userID);

            ReturnInfoModel returnInfo = new ReturnInfoModel();
            returnInfo.IsSuccess = isSuccess;
            returnInfo.Message = isSuccess ? "删除成功" : "删除失败";

            return Json(returnInfo);
        }

        public ActionResult UserRoleRelationUserList()
        {
            ViewBag.RoleID = WebRequestHelper.GetIntFromParameters("RoleID");

            return View();
        }

        public ActionResult GetUserRoleRelationUserList()
        {
            int roleID = WebRequestHelper.GetIntFromParameters("RoleID");

            List<SystemUserInfoModel> userList = SystemUserInfoBusiness.GetSystemUserInfoListByRoleID(roleID);
            return Json(userList);
        }

        #endregion

        #region
        public ActionResult UserRoleRelationManage()
        {
            int userID = WebRequestHelper.GetIntFromParameters("UserID");
            SystemUserInfoModel userInfo = new SystemUserInfoModel();
            userInfo = SystemUserInfoBusiness.GetSystemUserInfo(userID);
            return View(userInfo);
        }

        public ActionResult UserRoleRelationSave()
        {
            int userID = WebRequestHelper.GetIntFromParameters("UserID");
            string roleIDs = WebRequestHelper.GetStringFromParameters("RoleIDs");

            string[] roleIDArray = roleIDs.Split(',');

            List<int> roleIDList = new List<int>();
            for (int i = 0; i < roleIDArray.Length; i++)
            {
                roleIDList.Add(Convert.ToInt32(roleIDArray[i]));
            }

            ReturnInfoModel returnInfo = new ReturnInfoModel();

            returnInfo.IsSuccess = SystemUserRoleRelationBusiness.SaveUserRoleRelation(userID, roleIDList);

            return Json(returnInfo);
        }


        #endregion
    }
}