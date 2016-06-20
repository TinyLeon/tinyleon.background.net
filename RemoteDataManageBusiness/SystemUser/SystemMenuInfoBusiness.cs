using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using RemoteDataManageModel.SystemUser;
using RemoteDataManageDataAccess.SystemUser;
using RemoteDataManageModel.Common;

namespace RemoteDataManageBusiness.SystemUser
{
    public class SystemMenuInfoBusiness
    {
        public static List<SystemMenuInfoModel> GetSystemMenuInfoList(string menuName)
        {
            return SystemMenuInfoDataAccess.GetSystemMenuInfoList(menuName);
        }

        public static SystemMenuInfoModel GetSystemMenuInfo(int menuID)
        {
            return SystemMenuInfoDataAccess.GetSystemMenuInfo(menuID);
        }

        /// <summary>
        /// 保存
        /// </summary>
        /// <param name="account"></param>
        /// <returns></returns>
        public static bool SaveSystemMenuInfo(SystemMenuInfoModel menuInfo)
        {
            return SystemMenuInfoDataAccess.SaveSystemMenuInfo(menuInfo);
        }

        public static bool DeleteMenuInfo(int menuID)
        {
            return SystemMenuInfoDataAccess.DeleteMenuInfo(menuID);
        }


        public static List<SystemMenuInfoModel> GetAccordionMenu(string account)
        {
            List<SystemMenuInfoModel> menuInfoList = SystemMenuInfoDataAccess.GetSystemMenuInfoListByAccount(account);
            return menuInfoList;
        }

        public static DHTMLXTreeModel GetTreeSencondMenu(string account, int parentMenuID)
        {
            List<SystemMenuInfoModel> menuInfoList = SystemMenuInfoDataAccess.GetSystemMenuInfoListByAccount(account);
            menuInfoList = menuInfoList.Where(m => m.ParentMenuID == parentMenuID).ToList();

            DHTMLXTreeModel treeSencondMenu = SystemRoleMenuRelationBusiness.GetTreeMenu(menuInfoList, parentMenuID);

            return treeSencondMenu;
        }

        //public static DHTMLXTreeModel GetTreeMenuByAccount(string account)
        //{
        //    List<SystemMenuInfoModel> menuInfoList = SystemUserRoleRelationDataAccess.GetSystemMenuInfoListByAccount(account);

        //    DHTMLXTreeModel treeMenu = SystemRoleMenuRelationBusiness.GetTreeMenu(menuInfoList);

        //    return treeMenu;
        //}

        //public static List<SystemMenuInfoModel> GetAccordionSencondMenu(string account, int parentMenuID)
        //{
        //    List<SystemMenuInfoModel> menuInfoList = SystemUserRoleRelationDataAccess.GetSystemMenuInfoListByAccount(account);
        //    menuInfoList = menuInfoList.Where(m => m.ParentMenuID == parentMenuID).ToList();
        //    return menuInfoList;
        //}
    }
}
