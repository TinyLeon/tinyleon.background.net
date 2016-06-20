using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace RemoteDataManageDataAccess
{
    public class DBConfig
    {
        public const string DB_DataBase = "";


        #region System

        public const string SP_SystemMenuInfo_GetList = DB_DataBase + "[dbo].[SP_SystemMenuInfo_GetList]";
        public const string SP_SystemMenuInfo_Get = DB_DataBase + "[dbo].[SP_SystemMenuInfo_Get]";
        public const string SP_SystemMenuInfo_Save = DB_DataBase + "[dbo].[SP_SystemMenuInfo_Save]";
        public const string SP_SystemMenuInfo_Delete = DB_DataBase + "[dbo].[SP_SystemMenuInfo_Delete]";
        public const string SP_SystemMenuInfo_GetMenuListByRoleID = DB_DataBase + "[dbo].[SP_SystemMenuInfo_GetMenuListByRoleID]";
        public const string SP_SystemMenuInfo_GetMenuListByUserID = DB_DataBase + "[dbo].[SP_SystemMenuInfo_GetMenuListByUserID]";
        public const string SP_SystemMenuInfo_GetMenuListByAccount = DB_DataBase + "[dbo].[SP_SystemMenuInfo_GetMenuListByAccount]";

        public const string SP_SystemRoleInfo_GetPageList = DB_DataBase + "[dbo].[SP_SystemRoleInfo_GetPageList]";
        public const string SP_SystemRoleInfo_Get = DB_DataBase + "[dbo].[SP_SystemRoleInfo_Get]";
        public const string SP_SystemRoleInfo_Save = DB_DataBase + "[dbo].[SP_SystemRoleInfo_Save]";
        public const string SP_SystemRoleInfo_Delete = DB_DataBase + "[dbo].[SP_SystemRoleInfo_Delete]";
        public const string SP_SystemRoleInfo_GetRoleListByUserID = DB_DataBase + "[dbo].[SP_SystemRoleInfo_GetRoleListByUserID]";
        
        public const string SP_SystemUserInfo_GetPageList = DB_DataBase + "[dbo].[SP_SystemUserInfo_GetPageList]";
        public const string SP_SystemUserInfo_Get = DB_DataBase + "[dbo].[SP_SystemUserInfo_Get]";
        public const string SP_SystemUserInfo_Save = DB_DataBase + "[dbo].[SP_SystemUserInfo_Save]";
        public const string SP_SystemUserInfo_Delete = DB_DataBase + "[dbo].[SP_SystemUserInfo_Delete]";
        public const string SP_SystemUserInfo_GetUserListByRoleID = DB_DataBase + "[dbo].[SP_SystemUserInfo_GetUserListByRoleID]";

        public const string SP_SystemRoleMenuRelation_DeleteByRoleID = DB_DataBase + "[dbo].[SP_SystemRoleMenuRelation_DeleteByRoleID]";
        public const string SP_SystemRoleMenuRelation_Save = DB_DataBase + "[dbo].[SP_SystemRoleMenuRelation_Save]";

        public const string SP_SystemUserRoleRelation_DeleteByUserID = DB_DataBase + "[dbo].[SP_SystemUserRoleRelation_DeleteByUserID]";
        public const string SP_SystemUserRoleRelation_Save = DB_DataBase + "[dbo].[SP_SystemUserRoleRelation_Save]";        

        
        #endregion

    }
}
