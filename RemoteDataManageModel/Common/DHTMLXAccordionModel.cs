using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RemoteDataManageModel.Common
{
    public class DHTMLXAccordionModel
    {
        public string skin { get; set; }

        public bool multi_model { get; set; }

        public string icons_path { get; set; }

        private List<AccordionModel> _items = new List<AccordionModel>();
        public List<AccordionModel> items { get { return _items; } set { _items = value; } }
    }

    public class AccordionModel
    {
        public int id { get; set; }

        public string text { get; set; }

        public int height { get; set; }

        public string icon { get; set; }
    }
}
