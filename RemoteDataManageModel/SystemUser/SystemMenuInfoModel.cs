using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using TonyCommon.Helpers;

namespace RemoteDataManageModel.SystemUser
{
    [Serializable]
    public class SystemMenuInfoModel
    {       
        public int MenuID { get; set; }

        public int ParentMenuID { get; set; }

        public string MenuName { get; set; }

        public string MenuURL { get; set; }

        public string MenuImage { get; set; }

        public int MenuType { get; set; }
        public int MenuLevel { get; set; }

        public int Sorting { get; set; }

        public string Remark { get; set; }

        public DateTime ModifyTime { get; set; }
        public string ModifyTimeFormat
        {
            get
            {
                return DataTimeFormatHelper.FormatDateTimeToString(ModifyTime);
            }
        }

        /// <summary>
        /// 角色是否有该菜单的权限
        /// </summary>
        public int IsChecked { get; set; }

        /// <summary>
        /// 树形表格使用
        /// </summary>
        public int id { get; set; }
        public int _parentId { get; set; }
    }
}
