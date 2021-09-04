using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using TeachTips.Core.IRepositories;
using TeachTips.Core.Data;

namespace TeachTips.Core.Repositories {
    public class Repository<T> : IRepository<T> where T : class
{
    protected ApplicationDbContext context;
    internal DbSet<T> dbSet;
    public readonly ILogger _logger;

    public Repository(
        ApplicationDbContext context,
        ILogger logger)
    {
        this.context = context;
        this.dbSet = context.Set<T>();
        _logger = logger;
    }

    public virtual async Task<T> GetById(long id)
    {
        return await dbSet.FindAsync(id);
    }

    public virtual async Task<bool> Add(T entity)
    {
        await dbSet.AddAsync(entity);
        return true;
    }

    public virtual Task<bool> Delete(long id)
    {
        throw new NotImplementedException();
    }

    public virtual async Task<IEnumerable<T>> All()
    {
        return await dbSet.ToListAsync();
    }
}
}