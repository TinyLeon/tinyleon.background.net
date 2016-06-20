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
    public class SystemMenuInfoDataAccess
    {
        public static List<SystemMenuInfoModel> GetSystemMenuInfoList(string menuName)
        {
            return new List<SystemMenuInfoModel>();
        }

        public static SystemMenuInfoModel GetSystemMenuInfo(int menuID)
        {
           

            SystemMenuInfoModel menuInfo = new SystemMenuInfoModel();
            DataTable dt = new DataTable();

            menuInfo = EntityHelper.ToEntity<SystemMenuInfoModel>(dt) ?? new SystemMenuInfoModel();

            return menuInfo;
        }

        /// <summary>
        /// 保存
        /// </summary>
        /// <param name="account"></param>
        /// <returns></returns>
        public static bool SaveSystemMenuInfo(SystemMenuInfoModel menuInfo)
        {
            return true;
        }


        public static bool DeleteMenuInfo(int menuID)
        {
            return true;
        }

        /// <summary>
        /// 根据用户ID获取用户对应的菜单
        /// </summary>
        /// <param name="userID"></param>
        /// <returns></returns>
        public static List<SystemMenuInfoModel> GetSystemMenuInfoListByUserID(int userID)
        {
            DataTable dt = new DataTable();
            return EntityHelper.ToList<SystemMenuInfoModel>(dt) ?? new List<SystemMenuInfoModel>();
        }

        /// <summary>
        /// 根据用户ID获取用户对应的菜单
        /// </summary>
        /// <param name="userID"></param>
        /// <returns></returns>
        public static List<SystemMenuInfoModel> GetSystemMenuInfoListByAccount(string account)
        {
            DataTable dt = new DataTable();
            return EntityHelper.ToList<SystemMenuInfoModel>(dt) ?? new List<SystemMenuInfoModel>();
        }

    }
}
