using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using TeachTips.Core.Data.Entities;
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
                var tips = await _unitOfWork.Tips.GetAllWithCategories();
                IList<TipReturnDTO> returnDTOs = tips.Select(tip => new TipReturnDTO(tip)).ToList();

                return Ok(returnDTOs);
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
                Tip tip = dto.ToEntity();
                IList<Category> categories = await _unitOfWork.Categories.GetByIdList(dto.Categories);
                tip.Categories = categories.Select(category => new TipCategory(tip, category)).ToList();

                var success = await _unitOfWork.Tips.Add(tip);
                await _unitOfWork.CompleteAsync();
                
                IList<Tip> tips =  await _unitOfWork.Tips.GetAllWithCategories();
                IList<TipReturnDTO> returnDTOs = tips.Select(tip => new TipReturnDTO(tip)).ToList();
                
                return Ok(returnDTOs);
            }
            catch(Exception e){
                _logger.LogError(e, "Failed at TipController POST");
            }
            return StatusCode(500);
        }
    }
}
