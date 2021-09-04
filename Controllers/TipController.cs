using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using TeachTips.Core.IConfiguration;
using TeachTips.DTO;

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

        [HttpPost]
        public async Task<IActionResult> Post(TipAddDTO dto)
        {
            try {
                var tips = await _unitOfWork.Tips.Add(dto.ToEntity());
                await _unitOfWork.CompleteAsync();
                return Ok(dto);
            }
            catch(Exception e){
                _logger.LogError(e, "Failed at TipController GET");
            }
            return StatusCode(500);
        }
    }
}
