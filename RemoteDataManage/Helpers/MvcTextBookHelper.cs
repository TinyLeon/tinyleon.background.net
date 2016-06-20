using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Text;
using System.Reflection;

namespace RemoteDataManage.Helpers
{
    public static class MvcTextBookHelper
    {
        /// <summary>
        /// 文本框 只能输入整数
        /// </summary>
        /// <param name="helper"></param>
        /// <param name="id"></param>
        /// <param name="value"></param>
        /// <returns></returns>
        public static MvcHtmlString IntTextBook(this HtmlHelper helper, string id, object value, object htmlAttributes)
        {
            StringBuilder str = new StringBuilder();
            str.AppendFormat("<input type='text' class='easyui-numberbox' id='{0}' name='{0}' style='width:200px;' ", id);
            str.AppendFormat(" value='{0}' ", value);
            if (htmlAttributes != null)
            {
                string t = htmlAttributes.GetType().ToString();
                foreach (PropertyInfo pi in htmlAttributes.GetType().GetProperties())
                {
                    str.AppendFormat(" {0}='{1}'", pi.Name, pi.GetValue(htmlAttributes, null));
                }
            }           
            str.Append("  />");
            return new MvcHtmlString(str.ToString());
        }

        /// <summary>
        /// 文本框 只能输入整数
        /// </summary>
        /// <param name="helper"></param>
        /// <param name="id"></param>
        /// <param name="value"></param>
        /// <returns></returns>
        public static MvcHtmlString IntTextBook(this HtmlHelper helper, string id, object value)
        {
            return IntTextBook(helper, id, value, null);
        }

        /// <summary>
        /// 文本框 只能输入整数
        /// </summary>
        /// <param name="helper"></param>
        /// <param name="id"></param>
        /// <param name="value"></param>
        /// <returns></returns>
        public static MvcHtmlString DecimalTextBook(this HtmlHelper helper, string id, object value, object htmlAttributes)
        {
            StringBuilder str = new StringBuilder();
            str.AppendFormat("<input type='text' class='easyui-numberbox' id='{0}' name='{0}' style='width:200px;' ", id);
            str.AppendFormat(" precision='2' ");
            str.AppendFormat(" value='{0}' ", value);
            if (htmlAttributes != null)
            {
                string t = htmlAttributes.GetType().ToString();
                foreach (PropertyInfo pi in htmlAttributes.GetType().GetProperties())
                {
                    str.AppendFormat(" {0}='{1}'", pi.Name, pi.GetValue(htmlAttributes, null));
                }
            }
            str.Append("  />");
            return new MvcHtmlString(str.ToString());
        }

        /// <summary>
        /// 文本框  
        /// </summary>
        /// <param name="helper"></param>
        /// <param name="id"></param>
        /// <param name="value"></param>
        /// <returns></returns>
        public static MvcHtmlString DecimalTextBook(this HtmlHelper helper, string id, object value)
        {
            return DecimalTextBook(helper, id, value, null);
        }

        /// <summary>
        /// 日历文本框
        /// </summary>
        /// <param name="dateId">开始时间</param>        
        /// <param name="toDateId">结束时间</param>        
        /// <returns>结果</returns>
        public static MvcHtmlString DateTextBook(this HtmlHelper helper, string dateId)
        {
            return DateTextBook(helper, dateId, null);
        }

        /// <summary>
        /// 日历文本框
        /// </summary>
        /// <param name="fromDateId">开始时间</param>
        /// <param name="fromDateValue">开始时间值</param>
        /// <param name="dateId">结束时间</param>
        /// <param name="datevalue">结束时间值</param>
        /// <param name="dateFmt">日期格式 </param>
        /// <returns>结果</returns>
        public static MvcHtmlString DateTextBook(this HtmlHelper helper, string dateId, object datevalue)
        {
            StringBuilder str = new StringBuilder();            

            if (!string.IsNullOrEmpty(dateId))
            {
                str.AppendFormat("<input type='text' id='{0}' name='{0}' class='Wdate'", dateId);
                if (datevalue != null && !string.IsNullOrEmpty(datevalue.ToString()))
                {
                    str.AppendFormat(" value='{0}' ", datevalue);
                }                

                str.Append(" onfocus=\"WdatePicker({})\" />");
            }

            return new MvcHtmlString(str.ToString());
        }

        /// <summary>
        /// 日历文本框
        /// </summary>
        /// <param name="fromDateId">开始时间</param>        
        /// <param name="toDateId">结束时间</param>        
        /// <returns>结果</returns>
        public static MvcHtmlString DateTextBookForSearch(this HtmlHelper helper, string fromDateId, string toDateId)
        {
            return DateTextBookForSearch(helper, fromDateId, null, toDateId, null);
        }

        /// <summary>
        /// 日历文本框
        /// </summary>
        /// <param name="fromDateId">开始时间</param>
        /// <param name="fromDateValue">开始时间值</param>
        /// <param name="toDateId">结束时间</param>
        /// <param name="toDatevalue">结束时间值</param>
        /// <returns>结果</returns>
        public static MvcHtmlString DateTextBookForSearch(this HtmlHelper helper, string fromDateId, object fromDateValue, string toDateId, object toDatevalue)
        {
            return DateTextBookForSearch(helper, fromDateId, fromDateValue, toDateId, toDatevalue, string.Empty);
        }

        /// <summary>
        /// 日历文本框
        /// </summary>
        /// <param name="fromDateId">开始时间</param>        
        /// <param name="toDateId">结束时间</param>
        /// <param name="dateFmt">日期格式 </param>
        /// <returns>结果</returns>
        public static MvcHtmlString DateTextBookForSearch(this HtmlHelper helper, string fromDateId, string toDateId, string dateFmt)
        {
            return DateTextBookForSearch(helper, fromDateId, null, toDateId, null, dateFmt);
        }

        /// <summary>
        /// 日历文本框
        /// </summary>
        /// <param name="fromDateId">开始时间</param>
        /// <param name="fromDateValue">开始时间值</param>
        /// <param name="toDateId">结束时间</param>
        /// <param name="toDatevalue">结束时间值</param>
        /// <param name="dateFmt">日期格式 </param>
        /// <returns>结果</returns>
        public static MvcHtmlString DateTextBookForSearch(this HtmlHelper helper, string fromDateId, object fromDateValue, string toDateId, object toDatevalue, string dateFmt)
        {
            StringBuilder str = new StringBuilder();
            if (!string.IsNullOrEmpty(fromDateId))
            {
                str.AppendFormat("<input type='text' id='{0}' name='{0}' class='Wdate'", fromDateId);
                if (fromDateValue != null)
                {
                    str.AppendFormat(" value='{0}' ", fromDateValue);
                }
                if (!string.IsNullOrEmpty(dateFmt))
                {
                    dateFmt = ",dateFmt:'" + dateFmt + "'";
                    str.AppendFormat(" style='width:120px;' ");
                }                

                str.Append(" onfocus=\"var eDate=$dp.$('" + toDateId + "');WdatePicker({onpicked:function(){eDate.focus();},maxDate:'#F{$dp.$D(\\'" + toDateId + "\\')}'" + dateFmt + "})\" />");
            }

            if (!string.IsNullOrEmpty(toDateId))
            {
                str.AppendFormat("至 <input type='text' id='{0}' name='{0}' class='Wdate'", toDateId);
                if (toDatevalue != null)
                {
                    str.AppendFormat(" value='{0}' ", toDatevalue);
                }
                if (!string.IsNullOrEmpty(dateFmt))
                {
                    str.AppendFormat(" style='width:120px;' ");
                }

                str.Append(" onfocus=\"WdatePicker({minDate:'#F{$dp.$D(\\'" + fromDateId + "\\')'" + dateFmt + ")}\" />");
            }

            return new MvcHtmlString(str.ToString());
        }
    }
}