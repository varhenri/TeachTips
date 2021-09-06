
using System.Collections.Generic;
using System.Threading.Tasks;
using TeachTips.Core.Data.Entities;

namespace TeachTips.Core.IRepositories  {
    public interface ITipRepository : IRepository<Tip>
    {
        Task<IList<Tip>> GetAllWithCategories();
    }
    
}