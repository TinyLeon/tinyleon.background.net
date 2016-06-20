using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using TonyCommon.Helpers;

namespace RemoteDataManageModel.SystemUser
{
    public class SystemUserInfoModel
    {
        public int UserID { get; set; }

        public string UserName { get; set; }

        public string Password { get; set; }

        public string Email { get; set; }

        public string Mobile { get; set; }

        public string RealName { get; set; }

        public int UserType { get; set; }

        public DateTime RegistrationTime { get; set; }

        public int IsActivated { get; set; }
        public string IsActivatedStr
        {
            get
            {
                return IsActivated == 0 ? "否" : "是";
            }
        }

        public DateTime LastLoginTime { get; set; }
        public string LastLoginTimeFormat
        {
            get
            {
                return DataTimeFormatHelper.FormatDateTimeToString(LastLoginTime);
            }
        }
    }

    public class SystemUserRoleRelationModel
    {
        public int UserRoleRelationID { get; set; }

        public int UserID { get; set; }

        public int RoleID { get; set; }

        public int RoleName { get; set; }

        public DateTime ModifyTime { get; set; }
    }
}
