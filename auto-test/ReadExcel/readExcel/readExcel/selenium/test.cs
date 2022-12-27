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
using System.Text.RegularExpressions;
using Selenium;

namespace readExcel.selenium
{
    public class test
    {
        public DefaultSelenium Selenium { get; set; }
        public StringBuilder verifi;

        public void SetupTest() {
            Selenium= new DefaultSelenium("localhost", 4444, "*chrome", "http://www.google.com");
            Selenium.Start();
            verifi = new StringBuilder();
        }
        public void TearDown()
        {
            try
            {
                Selenium.Stop();

            }
            catch
            {

            }
            Console.Write(verifi.ToString());
        }
        public void NewTest()
        {
            Selenium.Open("facebook.com");
            Console.Write(Selenium.GetTitle());

        }
    }
}
