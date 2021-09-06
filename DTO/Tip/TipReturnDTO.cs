using System;
using System.Collections.Generic;
using System.Linq;
using TeachTips.Core.Data.Entities;

namespace TeachTips.DTO {
    public class TipReturnDTO{
        public string Title { get; set; }
        public string Text { get; set; }
        public IList<CategoryReturnDTO> Categories { get; set; }
        public TipReturnDTO(){}

        public TipReturnDTO(Tip tip)
        {
            this.Title = tip.TipTitle;
            this.Text = tip.TipText;
            this.Categories = tip.Categories.Select(category => new CategoryReturnDTO(category.Category)).ToList();
        }
    }
}