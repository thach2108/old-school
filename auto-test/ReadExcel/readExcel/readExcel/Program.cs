using readExcel.readExcel;
using readExcel.selenium;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace readExcel
{
    class Program
    {
        static void Main(string[] args)
        {
            var n = 2;
            ExcelDataAccess exl;
           
            switch (n)
            {
                case 1:
                    exl = new ExcelDataAccess("DangNhap");
                    exl.getFullData();

                    autoLogin aud = new autoLogin(exl);
                    aud.login();
                    exl.writeAllData(exl);
                    break;
                case 2:
                    exl = new ExcelDataAccess("DangKi");
                    exl.getFullDataRegister();
                    autoRegister audReg = new autoRegister(exl);
                    audReg.register();
                    exl.writeAllDataRegister(exl);
                    break;
                case 3:
                    ReadExl_ChangePass recp = new ReadExl_ChangePass("ChangePass");
                    recp.getFulldataChange();

                    autoChangePass aud3 = new autoChangePass(recp);

                    aud3.ChangePass();
                    recp.writeAllData(recp);
                    break;
            }

            Console.ReadKey();
        }
    }
}
