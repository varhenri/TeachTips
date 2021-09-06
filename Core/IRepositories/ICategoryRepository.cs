
using System.Collections.Generic;
using System.Threading.Tasks;
using TeachTips.Core.Data.Entities;

namespace TeachTips.Core.IRepositories  {
    public interface ICategoryRepository : IRepository<Category>
    {
        Task<IList<Category>> GetByIdList(long[] ids);
    }
    
}