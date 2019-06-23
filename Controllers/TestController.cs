using Microsoft.AspNetCore.Mvc;

namespace MVCViewComponent
{
    public class TestController : Controller
    {
        public IActionResult Index(){
            return View();
        }

        public IActionResult Updater(){
            return ViewComponent("ControllerTime");
        }
    }
}