using System.Collections.Generic;

namespace TeachTips.Core.Data.Entities
{
    public class Category {
        public long Id { get; set; }
        public string Name { get; set; }
        public IList<TipCategory> Tips {get;set;}
        public Category() {}
    }
}