using Microsoft.Extensions.Logging;
using TeachTips.Core.IRepositories;
using TeachTips.Core.Data;
using TeachTips.Core.Data.Entities;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using System.Collections.Generic;

namespace TeachTips.Core.Repositories {
        
    public class TipRepository : Repository<Tip>, ITipRepository
    {
        public TipRepository(ApplicationDbContext context, ILogger logger) : base(context, logger) { }
        public async Task<IList<Tip>> GetAllWithCategories(){
            return await dbSet.Include(tip => tip.Categories).ThenInclude(tip => tip.Category).ToListAsync();
        }
    }
}