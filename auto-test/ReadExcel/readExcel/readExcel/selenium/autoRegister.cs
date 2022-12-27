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
    class autoRegister
    {
        public ChromeDriver driver { get; set; }
        string pass = "pass";
        string fail = "fail";
        public ExcelDataAccess exl { get; set; }
        public autoRegister(ExcelDataAccess exl)
        {
            driver = new ChromeDriver(@"C:\Users\dodan\OneDrive\Desktop\readExcel\readExcel");
            driver.Manage().Window.Maximize();
            this.exl = exl;
        }

        public void setTarget(int i)
        {
            if (exl._dataRegisters[i].Target == exl._dataRegisters[i].Debug)
            {
                exl._dataRegisters[i].Result = pass;
            }
            else
            {
                exl._dataRegisters[i].Result = fail;
            }
        }
        // kich ban
        public void register()
        {
            try
            {
                for (int i = 0; i < this.exl._dataRegisters.Count; i++)
                {
                    if (IsElementPresent(driver, By.Id("logoutForm")))
                    {
                        driver.FindElement(By.ClassName("dropdown-toggle")).Click();
                        driver.FindElement(By.Id("logout")).Click();
                    }
                    driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(3);
                    driver.Url = "http://localhost:20729/";

                    driver.FindElement(By.Id("registerLink")).Click(); //

                    driver.FindElement(By.Id("Email")).SendKeys(exl._dataRegisters[i].Username);

                    driver.FindElement(By.Id("Hometown")).SendKeys(exl._dataRegisters[i].Address);

                    driver.FindElement(By.Id("Password")).SendKeys(exl._dataRegisters[i].Password);

                    driver.FindElement(By.Id("ConfirmPassword")).SendKeys(exl._dataRegisters[i].PassAgain);

                    driver.FindElement(By.Id("DangKi")).Click();

                    checkPassRegister(i);
                }
            }
            catch (NoSuchElementException)
            {
                // 
            }

            // 
        }

        private void checkPassRegister(int i)
        {
            if (IsElementPresent(driver, By.Id("logoutForm")))
            {
                exl._dataRegisters[i].Debug = pass;
                setTarget(i);
                showResult(i);
            }
            else
            {
                exl._dataRegisters[i].Debug = fail;
                setTarget(i);
                showResult(i);
            }
        }

        //show result in console
        private void showResult(int i)
        {
            if (exl._dataRegisters[i].Result == pass)
            {
                Console.WriteLine("pass");
            }
            else
            {
                Console.WriteLine("fail");
            }
        }

        // tim kiem phan tu
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
