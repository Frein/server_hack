using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using hakaton.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace hakaton.Controllers
{
    [ApiController]
    public class CompanyController : ControllerBase
    {
        [HttpGet]
        [Route("api/Company/get")]
        public List<Company> GetCompanies() {
            return ContentProvider.Companies;
        }
    }
}