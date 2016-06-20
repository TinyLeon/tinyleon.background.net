using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace RemoteDataManageModel.Common
{
    public class DataGridPageList<T>
    {
        public int total { get; set; }

        public List<T> rows { get; set; }
    }
}
