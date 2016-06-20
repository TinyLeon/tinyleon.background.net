using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RemoteDataManageModel.SystemUser
{
    [Serializable]
    public class DHTMLXTreeModel
    {
        public int id { get; set; }

        public string text { get; set; }

        public string im0 { get; set; }

        public string im1 { get; set; }

        public string im2 { get; set; }

        /// <summary>
        /// 0 未选中 1 选中 -1 半选中
        /// </summary>
        public int Checked { get; set; }

        private List<DHTMLXTreeModel> _item = new List<DHTMLXTreeModel>();
        public List<DHTMLXTreeModel> item { get { return _item; } set { _item = value; } }

        private List<UserData> _userdata = new List<UserData>();
        public List<UserData> userdata { get { return _userdata; } set { _userdata = value; } }

        /// <summary>
        /// 父ID
        /// </summary>
        public int PID { get; set; }
    }

    public class UserData
    {
        //附加信息
        public string name { get; set; }
        public string content { get; set; }

       
    }

}
