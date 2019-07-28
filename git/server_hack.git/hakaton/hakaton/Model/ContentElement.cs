using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace hakaton.Controllers
{
    public class ContentElement
    {
        public string ImageCode { get; set; }
        public string ButtonName { get; set; }
        public string ButtonLink { get; set; }  
        public string Text { get; set; }
        public ContentFormat Format { get; set; }
    }
    public enum ContentFormat
    {
        Html,
        MarkDown
    }


}
