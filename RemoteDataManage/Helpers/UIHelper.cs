using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Configuration;

namespace RemoteDataManage.Helpers
{
    public class UIHelper
    {
        /// <summary>
        /// 获取目录地址
        /// </summary>
        /// <returns>目录地址</returns>
        public static string Catalog
        {
            set;
            get;
        }
        /// <summary>
        /// JS版本号
        /// </summary>
        public static string JSVersion
        {
            get
            {
                if (ConfigurationManager.AppSettings["JSVersion"] == null)
                {
                    return "1.0";
                }
                return ConfigurationManager.AppSettings["JSVersion"];
            }
        }



        #region Image

        private static readonly string imagePath = Catalog + "/Content/images/";

        /// <summary>
        /// 新增Image
        /// </summary>
        public static readonly string btnAddImage = imagePath + "add.gif";

        /// <summary>
        /// 查询Image
        /// </summary>
        public static readonly string btnSearchImage = imagePath + "search.gif";

        /// <summary>
        /// 保存Image
        /// </summary>
        public static readonly string btnSaveImage = imagePath + "submit.gif";

        /// <summary>
        /// 文件Image
        /// </summary>
        public static readonly string btnDocsImage = imagePath + "mydocs.gif";

        /// <summary>
        /// 打印Image
        /// </summary>
        public static readonly string btnPrintImage = imagePath + "print.gif";

        /// <summary>
        /// 邮箱Image
        /// </summary>
        public static readonly string btnMailImage = imagePath + "email.gif";

        /// <summary>
        /// 删除Image
        /// </summary>
        public static readonly string btnDelImage = imagePath + "del.gif";

        /// <summary>
        /// 刷新Image
        /// </summary>
        public static readonly string btnRefreshImage = imagePath + "cache_resetall.gif";

        #endregion

        /// <summary>
        /// 等待Image
        /// </summary>
        public static readonly string loadingImage = imagePath + "spinner.gif";

        /// <summary>
        /// 弹出式提示信息框
        /// </summary>
        /// <param name="page">当前页面</param>
        /// <param name="msg">提示信息</param>
        public static void DisplayMessage(Controller currentController, string msg)
        {
            //currentController.Response.Write(String.Format("<script>alert('{0}')</script>", msg));
        }

        /// <summary>
        /// 对过长的字符串在页面上截取显示       
        /// </summary>
        /// <param name="strVal">原字符串</param>
        /// <param name="len">截取长度</param>
        /// <returns>返回显示结果</returns>
        public static string StringRestric(string strVal, int len)
        {
            string result = "";

            string strDecode = strVal;
            if (strDecode != null && strDecode.Length > len)
            {
                result = "<span title=\"" + strVal + "\">" + strDecode.Substring(0, len) + "..</span>";
            }
            else
            {
                result = strDecode;
            }

            return result;
        }
    }
}