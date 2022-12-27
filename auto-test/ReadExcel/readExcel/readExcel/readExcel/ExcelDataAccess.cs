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
    class ExcelDataAccess
    {
        public List<dataSet> data { get; set; }
        public List<dataRegister> _dataRegisters { get; set; }
        public static string path { get; set; }

        public ExcelDataAccess(string _path)
        {
            data = new List<dataSet>();
            _dataRegisters = new List<dataRegister>();
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
        public dataSet getDataByID(string id, OleDbConnection connection)
        {
            var query = string.Format("select * from [Sheet1$] where id = '{0}'", id);
            var value = connection.Query<dataSet>(query).FirstOrDefault();
            if (value.Username == null)
                value.Username = "";
            if (value.Active == null)
                value.Active = "";
            if (value.Password == null)
                value.Password = "";
            return value;
        }
        public dataRegister getDataByIDRegister(string id, OleDbConnection connection)
        {
            var query = string.Format("select * from [Sheet1$] where id = '{0}'", id);
            var value = connection.Query<dataRegister>(query).FirstOrDefault();
            if (value.Username == null)
                value.Username = "";
            if (value.Active == null)
                value.Active = "";
            if (value.Password == null)
            {
                value.Password = "";
            } 
            if(value.PassAgain== null)
            {
                value.PassAgain = "";
            }
            return value;
        }
        /**
         * lấy ra tất cả các hàng 
         */
        public void getFullData()
        {
            var connection = new OleDbConnection(DataFileConection());
            connection.Open();
            var query = string.Format("select * from [Sheet1$]");
            var count = connection.Query<dataSet>(query).Count();
            for (int i = 1; i <= count; i++)
            {
                dataSet test = getDataByID("Log" + i.ToString(), connection);
                if (test.Active.ToUpper() == "TRUE")
                {
                    data.Add(test);
                }
            }
            connection.Close();
        }

        public void getFullDataRegister()
        {
            var connection = new OleDbConnection(DataFileConection());
            connection.Open();
            var query = string.Format("select * from [Sheet1$]");
            var count = connection.Query<dataRegister>(query).Count();
            for (int i = 1; i <= count; i++)
            {
                dataRegister test = getDataByIDRegister("Res" + i.ToString(), connection);
                if (test.Active.ToUpper() == "TRUE")
                {
                    _dataRegisters.Add(test);
                }
            }
            connection.Close();
        }
        /**
         * sửa thông tin toàn bộ
         */
        public  void writeAllData(ExcelDataAccess exl)
        {
            var connection = new OleDbConnection(DataFileConection());
            connection.Open();
            var debug = "";
            for (int i = 0; i< exl.data.Count; i ++)
            {
                if(exl.data[i].Debug == null)
                {
                    debug = "null";
                }
                else
                {
                    debug = exl.data[i].Debug;
                }
                writeData(connection, i+1 ,debug, exl.data[i].Result);
            }
            connection.Close();
        }
        /**
         * sửa thông tin 1 hàng 
         */ 
        public void writeData(OleDbConnection connection,int id, string debug, string result)
        {
            var query = string.Format("UPDATE [Sheet1$] SET Debug = '{0}' WHERE id = '{1}'",debug ,"Log"+id.ToString());
            connection.Query<dataSet>(query);
            query = string.Format("UPDATE [Sheet1$] SET Result = '{0}' WHERE id = '{1}'", result, "Log" + id.ToString());
            connection.Query<dataSet>(query);
        }


        /**
         * sửa thông tin toàn bộ
         */
        public void writeAllDataRegister(ExcelDataAccess exl)
        {
            var connection = new OleDbConnection(DataFileConection());
            connection.Open();
            var debug = "";
            for (int i = 0; i < exl._dataRegisters.Count; i++)
            {
                if (exl._dataRegisters[i].Debug == null)
                {
                    debug = "null";
                }
                else
                {
                    debug = exl._dataRegisters[i].Debug;
                }
                writeDataRegister(connection, i + 1, debug, exl._dataRegisters[i].Result);
            }
            connection.Close();
        }
        /**
         * sửa thông tin 1 hàng 
         */
        public void writeDataRegister(OleDbConnection connection, int id, string debug, string result)
        {
            var query = string.Format("UPDATE [Sheet1$] SET Debug = '{0}' WHERE id = '{1}'", debug, "Res" + id.ToString());
            connection.Query<dataRegister>(query);
            query = string.Format("UPDATE [Sheet1$] SET Result = '{0}' WHERE id = '{1}'", result, "Res" + id.ToString());
            connection.Query<dataRegister>(query);
        }
    }
}
