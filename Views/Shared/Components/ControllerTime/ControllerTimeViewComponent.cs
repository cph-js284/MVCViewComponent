using System;
using Microsoft.AspNetCore.Mvc;

namespace MVCViewComponent
{
    public class ControllerTimeViewComponent : ViewComponent
    {
        //could also be InvokeAsync
        public IViewComponentResult Invoke(){
            var CTime = DateTime.Now.ToString();
            return View("Default", CTime);
        }
    }
}