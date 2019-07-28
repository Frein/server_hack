//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Threading.Tasks;
//using Microsoft.AspNetCore.Mvc;

//namespace hakaton.Controllers
//{
//    //[Route("api/[controller]")]
//    [ApiController]
//    public class ValuesController : ControllerBase
//    {
//        private ContentProvider contentProvider = new ContentProvider();

//        [HttpGet]
//        [Route("api/[controller]/GetTitle")]
//        public ActionResult<TitleElement> GetTitle()
//        {
//            int index = new Random().Next(contentProvider.titleDic.Count);
//            return contentProvider.titleDic[index];
//        }

//        [HttpGet]
//        [Route("api/[controller]/GetContent")]
//        public ActionResult<ContentElement> GetContent(string companyName, string type, int titleId)
//        {
//            var listOfContentForThisCompany = contentProvider.contentList.Where(tuple => tuple.Item1 == companyName);
//            var contentWithTitle = listOfContentForThisCompany.Where(tuple => tuple.Item2.TitleId == titleId).ToList();
//            var randomIndex = new Random().Next(contentWithTitle.Count());
//            return contentWithTitle.First(tuple => tuple.Item2.TitleId == randomIndex).Item2.Content;
//        }


//    }
//}
