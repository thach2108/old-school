using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using readExcel.readExcel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace readExcel.selenium
{
    class autoChangePass
    {

        public ChromeDriver driver { get; set; }
        string pass = "pass";
        string fail = "fail";
        public ReadExl_ChangePass exl { get; set; }
        public autoChangePass(ReadExl_ChangePass exl)
        {
            driver = new ChromeDriver(@"C:\Users\dodan\OneDrive\Desktop\readExcel\readExcel");
            driver.Manage().Window.Maximize();
            this.exl = exl;
        }

        /**
         * kịch bản
         */
        public void ChangePass()
        {
            try
            {
                if (IsElementPresent(driver, By.Id("logoutForm")))
                {
                    driver.FindElement(By.ClassName("dropdown-toggle")).Click();
                    driver.FindElement(By.Id("logout")).Click();
                }
                driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(7);
                driver.Url = "http://localhost:20729/";

                driver.FindElement(By.Id("loginLink")).Click();

                driver.FindElement(By.Id("Email")).SendKeys("thachdodang@gmail.com");

                driver.FindElement(By.Id("Password")).SendKeys("1234567");

                driver.FindElement(By.Id("login")).Click();
                for (int i = 0; i < this.exl.data_change.Count; i++)
                {
                    driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(2);
                    driver.Url = "http://localhost:20729/Manage/ChangePassword/btn_change";

                    driver.FindElement(By.Id("OldPassword")).SendKeys(exl.data_change[i].OldPass); 
                    driver.FindElement(By.Id("NewPassword")).SendKeys(exl.data_change[i].NewPass); 
                    driver.FindElement(By.Id("ConfirmPassword")).SendKeys(exl.data_change[i].PassAgain); 

                    driver.FindElement(By.Id("ChangePass")).Click(); //text-success
                    checkPassChange(i);
                }
            }
            catch (NoSuchElementException)
            {
                // 
            }

        }

        public void setTarget(int i)
        {
            if (exl.data_change[i].Target == exl.data_change[i].Debug)
            {
                exl.data_change[i].Result = pass;
            }
            else
            {
                exl.data_change[i].Result = fail;
            }
        }
        private void checkPassChange(int i)
        {
            // nếu thành công
            if (IsElementPresent(driver, By.ClassName("text-success")))
            {
                exl.data_change[i].Debug = "pass";
                setTarget(i);
                showResult(i);
            }
            else
            {
                exl.data_change[i].Debug = "fail";
                setTarget(i);
                showResult(i);
            }
        }
        private void showResult(int i)
        {
            if (exl.data_change[i].Result == pass)
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
