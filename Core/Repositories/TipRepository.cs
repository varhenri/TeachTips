using Microsoft.Extensions.Logging;
using TeachTips.Core.IRepositories;
using TeachTips.Core.Data;
using TeachTips.Core.Data.Entities;

namespace TeachTips.Core.Repositories {
        
    public class TipRepository : Repository<Tip>, ITipRepository
    {
        public TipRepository(ApplicationDbContext context, ILogger logger) : base(context, logger) { }

    }
}