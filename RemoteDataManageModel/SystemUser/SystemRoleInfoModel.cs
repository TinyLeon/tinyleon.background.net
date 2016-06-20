using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace RemoteDataManageModel.SystemUser
{
    public class SystemRoleInfoModel
    {
        public int RoleID { get; set; }

        public string RoleName { get; set; }

        public string Remark { get; set; }

        public int IsValid { get; set; }

        public string IsValidStr
        {
            get
            {
                return IsValid == 0 ? "否" : "是";
            }
        }
        public int IsChecked { get; set; }

        public DateTime ModifyTime { get; set; }
    }

    public class SystemRoleMenuRelationModel
    {
        public int RoleMenuRelationID { get; set; }

        public int RoleID { get; set; }

        public int MenuID { get; set; }

        public string MenuName { get; set; }

        public DateTime ModifyTime { get; set; }
    }
}
