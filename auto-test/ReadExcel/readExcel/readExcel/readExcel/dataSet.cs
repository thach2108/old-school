using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace readExcel.readExcel
{
    class dataSet
    {
        public string Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Target { get; set; }
        public string Debug { get; set; }
        public string Result { get; set; }
        public string Active { get; set; }
    }

    class dataRegister
    {
        public string Id { get; set; }
        public string Username { get; set; }
        public string Address { get; set; }
        public string Password { get; set; }
        public string PassAgain{ get; set; }
        public string Target { get; set; }
        public string Debug { get; set; }
        public string Result { get; set; }
        public string Active { get; set; }
    }
    class dataChangePass
    {
        public string Id { get; set; }
        public string OldPass { get; set; }
        public string NewPass { get; set; }
        public string PassAgain { get; set; }
        public string Target { get; set; }
        public string Debug { get; set; }
        public string Result { get; set; }
        public string Active { get; set; }
    }
}
