using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using RemoteDataManageModel.Common;
using RemoteDataManageModel.SystemUser;
using RemoteDataManageDataAccess.SystemUser;
using System.Collections;

namespace RemoteDataManageBusiness.SystemUser
{
    public class SystemUserInfoBusiness
    {
        public static DataGridPageList<SystemUserInfoModel> GetSystemUserInfoPageList(string userName, string realName, int pageSize, int currentPage)
        {
            return SystemUserInfoDataAccess.GetSystemUserInfoPageList(userName, realName, pageSize, currentPage);
        }

        public static SystemUserInfoModel GetSystemUserInfo(int userID)
        {
            return SystemUserInfoDataAccess.GetSystemUserInfo(userID);
        }

        /// <summary>
        /// 保存
        /// </summary>
        /// <param name="account"></param>
        /// <returns></returns>
        public static bool SaveSystemUserInfo(SystemUserInfoModel userInfo)
        {
            return SystemUserInfoDataAccess.SaveSystemUserInfo(userInfo);
        }

        public static bool DeleteUserInfo(int userID)
        {
            return SystemUserInfoDataAccess.DeleteUserInfo(userID);
        }

        /// <summary>
        /// 根据角色ID获取角色下的用户
        /// </summary>
        /// <param name="roleID"></param>
        /// <returns></returns>
        public static List<SystemUserInfoModel> GetSystemUserInfoListByRoleID(int roleID)
        {
            return SystemUserInfoDataAccess.GetSystemUserInfoListByRoleID(roleID);
        }
    }

    public class SystemUserRoleRelationBusiness
    {
        /// <summary>
        /// 保存
        /// </summary>
        /// <param name="account"></param>
        /// <returns></returns>
        public static bool SaveUserRoleRelation(int userID, List<int> roleIDList)
        {
            SystemUserRoleRelationDataAccess.DeleteUserRoleRelationByUserID(userID);
            foreach (int roleID in roleIDList)
            {
                SystemUserRoleRelationDataAccess.SaveUserRoleRelation(userID, roleID);
            }
            return true;
        }

        
    }
}
