using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace RemoteDataManageModel.Account
{
    [Serializable]
    public class AccountModel
    {
        public string Account { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public int Disabled { get; set; }

        public bool IsRemember { get; set; }
    }

}
