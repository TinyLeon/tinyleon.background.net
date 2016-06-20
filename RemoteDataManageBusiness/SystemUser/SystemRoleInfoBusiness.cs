using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using RemoteDataManageModel.Common;
using RemoteDataManageDataAccess.SystemUser;
using RemoteDataManageModel.SystemUser;
using System.Collections;

namespace RemoteDataManageBusiness.SystemUser
{
    public class SystemRoleInfoBusiness
    {
        #region RoleInfo
        public static DataGridPageList<SystemRoleInfoModel> GetSystemRoleInfoPageList(string roleName, int pageSize, int currentPage)
        {
            return SystemRoleInfoDataAccess.GetSystemRoleInfoPageList(roleName, pageSize, currentPage);
        }

        public static SystemRoleInfoModel GetSystemRoleInfo(int roleID)
        {
            return SystemRoleInfoDataAccess.GetSystemRoleInfo(roleID);
        }

        /// <summary>
        /// 保存
        /// </summary>
        /// <param name="account"></param>
        /// <returns></returns>
        public static bool SaveSystemRoleInfo(SystemRoleInfoModel roleInfo)
        {
            return SystemRoleInfoDataAccess.SaveSystemRoleInfo(roleInfo);
        }


        public static bool DeleteRoleInfo(int roleID)
        {
            return SystemRoleInfoDataAccess.DeleteRoleInfo(roleID);
        }

        /// <summary>
        /// 根据用户ID获取用户的角色
        /// </summary>
        /// <param name="userID"></param>
        /// <returns></returns>
        public static List<SystemRoleInfoModel> GetSystemRoleInfoListByUserID(int userID)
        {
            return SystemRoleInfoDataAccess.GetSystemRoleInfoListByUserID(userID);
        }

        #endregion
    }

    public class SystemRoleMenuRelationBusiness
    {
        #region
        /// <summary>
        /// 根据角色ID获取角色对应的菜单
        /// </summary>
        /// <param name="roleID"></param>
        /// <returns></returns>
        public static List<SystemMenuInfoModel> GetSystemMenuInfoListByRoleID(int roleID)
        {
            return SystemRoleMenuRelationDataAccess.GetSystemMenuInfoListByRoleID(roleID);
        }

        /// <summary>
        /// 保存
        /// </summary>
        /// <param name="account"></param>
        /// <returns></returns>
        public static bool SaveRoleMenuRelation(int roleID, List<int> menuIDList)
        {
            bool result = true;
            SystemRoleMenuRelationDataAccess.DeleteRoleMenuRelationByRoleID(roleID);
            foreach (int menuID in menuIDList)
            {
                result = result && SystemRoleMenuRelationDataAccess.SaveRoleMenuRelation(roleID, menuID);
            }
            return result;
        }

        #endregion
        

        #region MenuTree
        /// <summary>
        /// 获取Tree菜单
        /// </summary>
        /// <param name="roleID"></param>
        /// <returns></returns>
        public static DHTMLXTreeModel GetMenuTree(int roleID)
        {
            List<SystemMenuInfoModel> menuInfoList = new List<SystemMenuInfoModel>();
            menuInfoList = SystemRoleMenuRelationDataAccess.GetSystemMenuInfoListByRoleID(roleID);

            return GetTreeMenu(menuInfoList, 0);
        }

        public static DHTMLXTreeModel GetTreeMenu(List<SystemMenuInfoModel> menuInfoList, int parentMenuID)
        {
            //验证菜单是否已经添加
            Hashtable htMenuID = new Hashtable();
            
            DHTMLXTreeModel treeMenu = new DHTMLXTreeModel();
            CreateTreeMenu(htMenuID, treeMenu, menuInfoList, parentMenuID, true);

            return treeMenu;
        }

        private static void CreateTreeMenu(Hashtable htMenuID, DHTMLXTreeModel treeMenu, List<SystemMenuInfoModel> menuInfoListTemp, int parentMenuID, bool isFirst)
        {
            List<SystemMenuInfoModel> menuInfoList = new List<SystemMenuInfoModel>();
            //第一级菜单(如果真，只循环ParentMentID对应的菜单)
            if (isFirst)
            {
                menuInfoList = menuInfoListTemp.Where(m => m.ParentMenuID == parentMenuID).ToList<SystemMenuInfoModel>();
            }
            else
            {
                menuInfoList = menuInfoListTemp;
            }

            foreach (var menuInfo in menuInfoList)
            {
                if (!htMenuID.ContainsKey(menuInfo.MenuID))
                {
                    htMenuID.Add(menuInfo.MenuID, menuInfo.MenuID);

                    DHTMLXTreeModel subTreeMenu = new DHTMLXTreeModel();
                    subTreeMenu.id = menuInfo.MenuID;
                    subTreeMenu.text = menuInfo.MenuName;
                    subTreeMenu.im0 = menuInfo.MenuImage;
                    subTreeMenu.im1 = string.Empty;
                    subTreeMenu.im2 = string.Empty;
                    subTreeMenu.Checked = menuInfo.IsChecked;

                    subTreeMenu.userdata.Add(new UserData() { name = "URL", content = menuInfo.MenuURL });
                    subTreeMenu.PID = menuInfo.ParentMenuID;
                    treeMenu.item.Add(subTreeMenu);

                    List<SystemMenuInfoModel> subMenuInfoList = menuInfoListTemp.Where(m => m.ParentMenuID == menuInfo.MenuID).ToList<SystemMenuInfoModel>();
                    if (subMenuInfoList.Count > 0)
                    {
                        CreateTreeMenu(htMenuID, subTreeMenu, subMenuInfoList,menuInfo.ParentMenuID, false);
                    }
                }
            }
        }
        #endregion

        
    }
}
