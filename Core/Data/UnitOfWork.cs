using System;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using TeachTips.Core.IConfiguration;
using TeachTips.Core.IRepositories;
using TeachTips.Core.Repositories;

namespace TeachTips.Core.Data{

    public class UnitOfWork : IUnitOfWork, IDisposable
    {
        private readonly ApplicationDbContext _context;
        private readonly ILogger _logger;

        public ITipRepository Tips { get; private set; }
        public ICategoryRepository Categories { get; private set; }
        public UnitOfWork(ApplicationDbContext context, ILoggerFactory loggerFactory)
        {
            _context = context;
            _logger = loggerFactory.CreateLogger("logs");

            Tips = new TipRepository(context, _logger);
            Categories = new CategoryRepository(context, _logger);
        }

        public async Task CompleteAsync()
        {
            await _context.SaveChangesAsync();
        }

        public void Dispose()
        {
            _context.Dispose();
        }
    }
}