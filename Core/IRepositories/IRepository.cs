using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace TeachTips.Core.IRepositories  {
    public interface IRepository<T> where T : class
    {
        Task<IEnumerable<T>> All();
        Task<T> GetById(long id);
        Task<bool> Add(T entity);
        Task<bool> Delete(long id);
    }
}