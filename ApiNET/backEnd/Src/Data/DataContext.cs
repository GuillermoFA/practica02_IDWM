using backEnd.Src.Models;
using Microsoft.EntityFrameworkCore;

namespace backEnd.Src.Data
{
    public class DataContext : DbContext
    {
        DbSet<Product> Products { get; set; } = null!;
        public DataContext(DbContextOptions options) : base(options)
        {
        }

    }
}