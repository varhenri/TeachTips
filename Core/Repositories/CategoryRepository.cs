using Microsoft.Extensions.Logging;
using TeachTips.Core.IRepositories;
using TeachTips.Core.Data;
using TeachTips.Core.Data.Entities;
using System.Linq;
using System.Threading.Tasks;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace TeachTips.Core.Repositories {
        
    public class CategoryRepository : Repository<Category>, ICategoryRepository
    {
        public CategoryRepository(ApplicationDbContext context, ILogger logger) : base(context, logger) { }

        public async Task<IList<Category>> GetByIdList(long[] ids){
            return await dbSet.Where(entity => ids.Contains(entity.Id)).ToListAsync();
        }
    }
}