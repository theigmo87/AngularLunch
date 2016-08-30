using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MvcApiAngularBoilerplate.Models
{
    public class Contact
    { 
        public int ID { get; set; }
        public string FirstName { get; set; }
        public string MI { get; set; }
        public string LastName { get; set; }
        public string NickName { get; set; }
        public string FullName { get
            {
                if (String.IsNullOrWhiteSpace(FirstName) || String.IsNullOrWhiteSpace(LastName))
                    return String.Empty;
                else
                    return String.IsNullOrWhiteSpace(MI) ?
                        String.Format("{0} {1}", FirstName, LastName) :
                        String.Format("{0} {1}. {2}", FirstName, MI, LastName);
            }
        }
    }
}