using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace hakaton.Controllers
{
    [ApiController]
    public class ContentController
    {
        private ContentProvider contentProvider = new ContentProvider();

        [HttpGet]
        [Route("api/Content/GetTitles")]
        public TitleElement GetTitle()
        {
            var r = new Random();
            return ContentProvider.Titles.OrderBy(a => r.Next()).First();
        }

        // http://localhost:49169/api/content/getContent?titleId=1&companyId=1

        [HttpGet]
        [Route("api/Content/GetContent")]
        public ContentByTitle GetContent(int titleId, int companyId)
        {
            var r = new Random();
            return ContentProvider.Contents.Where(c=> c.CompanyId == companyId && c.Id==titleId).OrderBy(a => r.Next()).First();
            //var listOfContentForThisCompany = contentProvider.contentList.Where(tuple => tuple.Item1 == companyName);
            //var contentWithTitle = listOfContentForThisCompany.Where(tuple => tuple.Item2.TitleId == titleId).ToList();
            //var randomIndex = new Random().Next(contentWithTitle.Count());
            //return contentWithTitle.First(tuple => tuple.Item2.TitleId == randomIndex).Item2.Content;
        }
    }
}