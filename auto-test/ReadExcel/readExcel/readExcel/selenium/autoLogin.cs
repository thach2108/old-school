using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium.Remote;
using OpenQA.Selenium.Support.UI;
using readExcel.readExcel;

namespace readExcel.selenium
{
    class autoLogin
    {
        public ChromeDriver driver { get; set; }
        string pass = "pass";
        string fail = "fail";
        public ExcelDataAccess exl { get; set; }
        public autoLogin(ExcelDataAccess exl)
        {
            driver = new ChromeDriver(@"C:\Users\dodan\OneDrive\Desktop\readExcel\readExcel");
            driver.Manage().Window.Maximize();
            this.exl = exl;
        }

        /**
         * kịch bản
         */ 
        public void login()
        {
            try
            {
                for (int i = 0; i < this.exl.data.Count; i++)
                {
                    if (IsElementPresent(driver, By.Id("logoutForm")))
                    {
                        driver.FindElement(By.ClassName("dropdown-toggle")).Click();
                        driver.FindElement(By.Id("logout")).Click();
                    }
                    driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(2);
                    driver.Url = "http://localhost:20729/";

                    driver.FindElement(By.Id("loginLink")).Click();

                    driver.FindElement(By.Id("Email")).SendKeys(exl.data[i].Username);

                    driver.FindElement(By.Id("Password")).SendKeys(exl.data[i].Password);

                    driver.FindElement(By.Id("login")).Click();

                    checkPassLogin(i);
                }
            }
            catch (NoSuchElementException)
            {
                // 
            }

        }

        public void setTarget(int i)
        {
            if (exl.data[i].Target == exl.data[i].Debug)
            {
                exl.data[i].Result = pass;
            }
            else
            {
                exl.data[i].Result = fail;
            }
        }
        private void checkPassLogin(int i)
        {
            // nếu login thành công
            if (IsElementPresent(driver, By.Id("logoutForm")))
            {
                exl.data[i].Debug = "pass";
                setTarget(i);
                showResult(i);
            }
            else
            {
                exl.data[i].Debug = "fail";
                setTarget(i);
                showResult(i);
            }
        }
        private void showResult(int i)
        {
            if (exl.data[i].Result == pass)
            {
                Console.WriteLine("pass");
            }
            else
            {
                Console.WriteLine("fail");
            }
        }
        private bool IsElementPresent(ChromeDriver driver, By by)
        {
            try
            {
                driver.FindElement(by);
                return true;
            }
            catch (NoSuchElementException)
            {
                return false;
            }
        }
        
    }
}
