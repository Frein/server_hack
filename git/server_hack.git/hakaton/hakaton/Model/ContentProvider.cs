using hakaton.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace hakaton.Controllers
{
    public class ContentProvider
    {
        public static List<Company> Companies = new List<Company>  { new Company {Id= 1, Name="Тинькофф" },
            new Company { Id = 2, Name = "Мегафон" } };

        public static List<TitleElement> Titles = new List<TitleElement> {
            new TitleElement{
                Id=1,
                Logo="logo1",
                Title = "Title1"
                },
            new TitleElement{
                Id=2,
                Logo="logo2",
                Title = "Title2"
                }
            };



        public static List<ContentByTitle> Contents = new List<ContentByTitle>
        {
            new ContentByTitle
            {
                Contents= new List<ContentElement>{
                    new ContentElement{
                    ButtonLink="http://localhost:3000/test",
                    ImageCode="test_code",
                    Format = ContentFormat.Html,
                    ButtonName="Пройти тест",
                    Text = "кавабанга"
                },
                },
                CompanyId = 1,
                Id=1
            }
        };

        //ключ - имя компании
        public List<Tuple<string, ContentByTitle>> contentList = new List<Tuple<string, ContentByTitle>>();

        //ключ - id заголовка
        public Dictionary<int, TitleElement> titleDic = new Dictionary<int, TitleElement>();

    //    public ContentProvider()
    //    {
    //        InitializeTitleDictionary();
    //        InitializeContentDictionary();
    //    }

    //    private void InitializeTitleDictionary()
    //    {
    //        //Это повторить много  раз с разным наполнением.            

    //        var picture = ImageToByteArray("Pictures/cat.JPG");
    //        TitleElement element = new TitleElement()
    //        { Title = "Any title", Logo = picture, Description = "Описание, если оно нужно"};
    //        titleDic.Add(1, element);
    //    }

    //    private void InitializeContentDictionary()
    //    {
    //        //Это повторить много  раз с разным наполнением.

    //        var picture = ImageToByteArray("Pictures/cat.JPG");
    //        var contentByTitle = new ContentByTitle(){TitleId = 1};
    //        ContentElement content = new ContentElement()
    //        { Image = picture, ButtonName = "", ButtonLink = "", Format = ContentFormat.Html,
    //            Text = "Свойство LastChild возвращает последний дочерний узел + " +
    //                                                                    " Свойство InnerText возвращает текстовое значение узла" + 
    //                                                                    "Свойство InnerXml возвращает всю внутреннюю разметку xml узла" +
    //                                                                    " Свойство Name возвращает название узла.Например, < user > -значение св" };
    //        contentByTitle.Content = content;
    //        contentList.Add(new Tuple<string, ContentByTitle>("Tinkoff", contentByTitle));
    //    }

    //    private byte[] ImageToByteArray(string path)
    //    {
    //        return System.IO.File.ReadAllBytes(path);
    //    }
    }
    
}
