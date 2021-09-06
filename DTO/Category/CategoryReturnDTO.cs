using System;
using TeachTips.Core.Data.Entities;

namespace TeachTips.DTO {
    public class CategoryReturnDTO{
        public long Id { get; set; }
        public string Name { get; set; }
        public string Color { get; set; }
        public CategoryReturnDTO(){}

        public CategoryReturnDTO(Category category)
        {
            this.Id = category.Id;
            this.Name = category.Name;
            this.Color = "black";
        }
    }
}