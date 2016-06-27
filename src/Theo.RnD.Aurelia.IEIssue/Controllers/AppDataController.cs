using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Theo.RnD.Aurelia.IEIssue.Controllers
{
    public class Users
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string Gender { get; set; }
    }

    [Route("api/[controller]")]
    public class AppDataController : Controller
    {
        [Route("GetUsers")]
        public IEnumerable<Users> GetUsers()
        {
            IEnumerable<Users> retVal = new List<Users> {
                    new Users { FirstName = "Theodar", LastName = "Sundeep", Gender = "M" , DateOfBirth = new DateTime(2000,01,01)},
                    new Users { FirstName = "Clera", LastName = "Sundeep", Gender = "M" , DateOfBirth = new DateTime(1995,01,01)},
                    new Users { FirstName = "Jeslyn", LastName = "Sundeep", Gender = "M" , DateOfBirth = new DateTime(2001,01,01)},
                    new Users { FirstName = "Gorge", LastName = "Sundeep", Gender = "M" , DateOfBirth = new DateTime(2002,01,01)},
            };

            return retVal;
        }
    }
}
