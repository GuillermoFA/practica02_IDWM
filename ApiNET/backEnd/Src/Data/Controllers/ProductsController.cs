using backEnd.Src.Models;
using Microsoft.AspNetCore.Mvc;

namespace backEnd.Src.Data.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {
        private readonly DataContext _context;

        public ProductsController(DataContext context)
        {
            _context = context;
        }

        // GET PRODUCT
    }
}