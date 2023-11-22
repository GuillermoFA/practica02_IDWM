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
        [HttpGet]
        public IActionResult GetProducts()
        {
            return Ok(_context.Products);
        }

        [HttpPost]
        public IActionResult CreateProduct(Product product)
        {
            _context.Products.Add(product);
            _context.SaveChanges();
            return Ok(product);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateProduct(int id, Product product)
        {
            try
            {
                var productToUpdate = _context.Products.Find(id);

                if (productToUpdate == null)
                {
                    return NotFound($"No se encontró un producto con ID {id}");
                }

                productToUpdate.Name = product?.Name ?? productToUpdate.Name;
                productToUpdate.Price = product?.Price ?? productToUpdate.Price;
                productToUpdate.Description = product?.Description ?? productToUpdate.Description;
                productToUpdate.Image = product?.Image ?? productToUpdate.Image;

                _context.SaveChanges();
                return Ok(productToUpdate);
            }
            catch (Exception ex)
            {
                return BadRequest($"Error al actualizar el producto: {ex.Message}");
            }
}
        [HttpDelete("{id}")]
        public IActionResult DeleteProduct(int id)
        {
            try
            {
                var product = _context.Products.Find(id);

                if (product == null)
                {
                    return NotFound($"No se encontró un producto con ID {id}");
                }

                _context.Products.Remove(product);
                _context.SaveChanges();

                return Ok(product);
            }
            catch (Exception ex)
            {
                return BadRequest($"Error al eliminar el producto: {ex.Message}");
            }
        }




    }
}