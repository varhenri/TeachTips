using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using TeachTips.Core.IConfiguration;

namespace TeachTips.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CategoryController : ControllerBase
    {

        private readonly ILogger<TipController> _logger;
        private readonly IUnitOfWork _unitOfWork;
        public CategoryController(ILogger<TipController> logger, IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
            _logger = logger;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try {
                var categories = await _unitOfWork.Categories.All();
                return Ok(categories);
            }
            catch(Exception e){
                _logger.LogError(e, "Failed at CategoryController GET");
            }

            return StatusCode(500);
        }
    }
}
