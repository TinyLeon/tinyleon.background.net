using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using RemoteDataManageModel.Common;
using System.Data;
using RemoteDataManageModel.SystemUser;
using TonyCommon.Helpers;

namespace RemoteDataManageDataAccess.SystemUser
{
    public class SystemUserInfoDataAccess
    {
        #region UserInfo
        public static DataGridPageList<SystemUserInfoModel> GetSystemUserInfoPageList(string userName, string realName, int pageSize, int currentPage)
        {
            return new DataGridPageList<SystemUserInfoModel>();
        }

        public static SystemUserInfoModel GetSystemUserInfo(int userID)
        {
            DataTable dt = new DataTable();

            return EntityHelper.ToEntity<SystemUserInfoModel>(dt) ?? new SystemUserInfoModel();

        }

        /// <summary>
        /// 保存
        /// </summary>
        /// <param name="account"></param>
        /// <returns></returns>
        public static bool SaveSystemUserInfo(SystemUserInfoModel userInfo)
        {
            return true;
        }

        public static bool DeleteUserInfo(int userID)
        {
            return true;
        }
        #endregion

        /// <summary>
        /// 根据角色ID获取角色下的用户
        /// </summary>
        /// <param name="roleID"></param>
        /// <returns></returns>
        public static List<SystemUserInfoModel> GetSystemUserInfoListByRoleID(int roleID)
        {
            return new List<SystemUserInfoModel>();
        }


    }

    public class SystemUserRoleRelationDataAccess
    {
        #region UserRoleRelation



        /// <summary>
        /// 保存
        /// </summary>
        /// <param name="account"></param>
        /// <returns></returns>
        public static bool DeleteUserRoleRelationByUserID(int userID)
        {
            return true;
        }

        /// <summary>
        /// 保存
        /// </summary>
        /// <param name="account"></param>
        /// <returns></returns>
        public static bool SaveUserRoleRelation(int userID, int roleID)
        {
            return true;
        }



        #endregion
    }
}
