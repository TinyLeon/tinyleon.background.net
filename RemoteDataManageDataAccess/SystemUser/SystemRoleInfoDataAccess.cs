using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using RemoteDataManageModel.Common;
using RemoteDataManageModel.SystemUser;
using System.Data;
using TonyCommon.Helpers;

namespace RemoteDataManageDataAccess.SystemUser
{
    public class SystemRoleInfoDataAccess
    {
        #region RoleInfo
        public static DataGridPageList<SystemRoleInfoModel> GetSystemRoleInfoPageList(string roleName, int pageSize, int currentPage)
        {

            return new DataGridPageList<SystemRoleInfoModel>();
        }

        public static SystemRoleInfoModel GetSystemRoleInfo(int roleID)
        {
            DataTable dt = new DataTable();
            return EntityHelper.ToEntity<SystemRoleInfoModel>(dt) ?? new SystemRoleInfoModel();
        }

        /// <summary>
        /// 保存
        /// </summary>
        /// <param name="account"></param>
        /// <returns></returns>
        public static bool SaveSystemRoleInfo(SystemRoleInfoModel roleInfo)
        {
            return true;
        }


        public static bool DeleteRoleInfo(int roleID)
        {

            return true;
        }

        /// <summary>
        /// 根据用户ID获取用户的角色
        /// </summary>
        /// <param name="userID"></param>
        /// <returns></returns>
        public static List<SystemRoleInfoModel> GetSystemRoleInfoListByUserID(int userID)
        {

            return new List<SystemRoleInfoModel>();
        }
        #endregion
    }

    public class SystemRoleMenuRelationDataAccess
    {
        #region RoleMenuRelation

        /// <summary>
        /// 根据角色ID获取角色对应的菜单
        /// </summary>
        /// <param name="roleID"></param>
        /// <returns></returns>
        public static List<SystemMenuInfoModel> GetSystemMenuInfoListByRoleID(int roleID)
        {

            return new List<SystemMenuInfoModel>();
        }

        /// <summary>
        /// 保存
        /// </summary>
        /// <param name="account"></param>
        /// <returns></returns>
        public static bool DeleteRoleMenuRelationByRoleID(int roleID)
        {
            return true;
        }

        /// <summary>
        /// 保存
        /// </summary>
        /// <param name="account"></param>
        /// <returns></returns>
        public static bool SaveRoleMenuRelation(int roleID, int menuID)
        {
            return true;
        }


        #endregion
    }
}
