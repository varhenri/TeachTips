using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using TeachTips.Core.Data.Entities;

namespace TeachTips.Core.Data
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<Category> Category { get; set; }
        public DbSet<Tip> Tip { get; set; }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
        {

        }
    }
}