using Microsoft.AspNetCore.Mvc;

namespace AureliaDotnetTemplate.Controllers
{
    [Route("api/[controller]")]
    public class TestController : Controller
    {
        
        [HttpGet("[action]")]
        public string Tests()
        {
            return "test data from controller";
        }        
    }
}
