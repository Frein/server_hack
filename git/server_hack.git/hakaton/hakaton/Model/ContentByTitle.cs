using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace hakaton.Controllers
{
    public struct ContentByTitle
    {
        public int Id { get; set; }
        public int CompanyId { get; set; }
        public List<ContentElement> Contents { get; set; }
    }
}
