using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using TeachTips.Core.IConfiguration;

namespace TeachTips.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TipController : ControllerBase
    {

        private readonly ILogger<TipController> _logger;
        private readonly IUnitOfWork _unitOfWork;
        public TipController(ILogger<TipController> logger, IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
            _logger = logger;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try {
                var tips = await _unitOfWork.Tips.All();
                return Ok(tips);
            }
            catch(Exception e){
                _logger.LogError(e, "Failed at TipController GET");
            }

            return StatusCode(500);
        }
    }
}
