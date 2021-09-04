using System.Threading.Tasks;
using TeachTips.Core.IRepositories;

namespace TeachTips.Core.IConfiguration {
    public interface IUnitOfWork
    {
        ITipRepository Tips { get; }

        Task CompleteAsync();
    }
}