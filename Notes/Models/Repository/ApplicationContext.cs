using Microsoft.EntityFrameworkCore;
using System.Reflection;

namespace Notes.Models.Repository
{
    public class ApplicationContext : DbContext
    {
        string pathDb { get; }
        public DbSet<Note> Notes { get; set; }
        public ApplicationContext(DbContextOptions<ApplicationContext> options) : base(options)
        {
            pathDb = Path.Combine(Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location), "DbNote.db");
            Database.EnsureCreated();
        }
        protected override void OnConfiguring(DbContextOptionsBuilder options)
        => options.UseSqlite($"Data Source={pathDb}");
    }
}
