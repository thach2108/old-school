using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.OleDb;
using Dapper;
using System.Configuration;
using System.Data;
using System.IO;


namespace readExcel.readExcel
{
    class ReadExl_ChangePass
    {
        public List<dataChangePass> data_change { get; set; }
        public static string path { get; set; }

        public ReadExl_ChangePass(string _path)
        {
            data_change = new List<dataChangePass>();
            path = _path;
        }
        /**
         * khởi tạo chuỗi kết nối
         * */
        public static string DataFileConection()
        {
            var fileName = ConfigurationSettings.AppSettings[path];
            var connectionString = string.Format("Provider=Microsoft.ACE.OLEDB.12.0; data source={0}; Extended Properties=Excel 12.0;", fileName);
            return connectionString;
        }
        /**
         * lấy ra 1 hàng bằng id
         */

        public dataChangePass getDataByIDChange(string id, OleDbConnection connection)
        {
            var query = string.Format("select * from [Sheet1$] where id = '{0}'", id);
            var value = connection.Query<dataChangePass>(query).FirstOrDefault();

            if (value.Active == null)
                value.Active = "";
            if (value.OldPass == null)
                value.OldPass = "";
            if (value.NewPass == null)
                value.NewPass = "";
            if (value.PassAgain == null)
                value.PassAgain = "";
            return value;
        }
        /**
         * lấy ra tất cả các hàng 
         */
        public void getFulldataChange()
        {
            var connection = new OleDbConnection(DataFileConection());
            connection.Open();
            var query = string.Format("select * from [Sheet1$]");
            var count = connection.Query<dataChangePass>(query).Count();
            for (int i = 1; i <= count; i++)
            {
                dataChangePass test = getDataByIDChange("Chg" + i.ToString(), connection);
                if (test.Active.ToUpper() == "TRUE")
                {
                    data_change.Add(test);
                }
            }
            connection.Close();
        }
        /**
         * sửa thông tin toàn bộ
         */
        public void writeAllData(ReadExl_ChangePass exl)
        {
            var connection = new OleDbConnection(DataFileConection());
            connection.Open();
            var debug = "";
            for (int i = 0; i < exl.data_change.Count; i++)
            {
                if (exl.data_change[i].Debug == null)
                {
                    debug = "null";
                }
                else
                {
                    debug = exl.data_change[i].Debug;
                }
                writeData(connection, i + 1, debug, exl.data_change[i].Result);
            }
            connection.Close();
        }
        /**
         * sửa thông tin 1 hàng 
         */
        public void writeData(OleDbConnection connection, int id, string debug, string result)
        {
            var query = string.Format("UPDATE [Sheet1$] SET Debug = '{0}' WHERE id = '{1}'", debug, "Chg" + id.ToString());
            connection.Query<dataChangePass>(query);
            query = string.Format("UPDATE [Sheet1$] SET Result = '{0}' WHERE id = '{1}'", result, "Chg" + id.ToString());
            connection.Query<dataChangePass>(query);
        }
    }
}
