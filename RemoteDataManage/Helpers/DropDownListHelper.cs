using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using RemoteDataManageModel.Common;

namespace RemoteDataManage.Helpers
{
    public class DropDownListHelper
    {
        public static List<SelectListItem> GetSelectList(List<DropDownModel> dropDownList,bool isDefault=true)
        {
            List<SelectListItem> selectList = new List<SelectListItem>();

            SelectListItem select = new SelectListItem { Text = "全部", Value = "-1" };
            if (isDefault)
            {
                selectList.Add(select);
            }
            if (dropDownList != null)
            {
                foreach (var dropDown in dropDownList)
                {
                    select = new SelectListItem { Text = dropDown.Name, Value = dropDown.Value, Selected = dropDown.Selected };
                    selectList.Add(select);
                }
            }
            return selectList;
        }

        public static List<SelectListItem> GetBoolSelectList()
        {
            List<SelectListItem> selectList = new List<SelectListItem>();

            SelectListItem select1 = new SelectListItem { Text = "True", Value = "True" };
            SelectListItem select2 = new SelectListItem { Text = "False", Value = "False" };            
            selectList.Add(select1);
            selectList.Add(select2);

            return selectList;
        }
    }
}
