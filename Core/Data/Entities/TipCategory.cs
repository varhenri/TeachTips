namespace TeachTips.Core.Data.Entities
{
    public class TipCategory {
        public long Id { get; set; }
        public Category Category { get; set; }
        public Tip Tip { get; set; }
        public TipCategory(){}
    }
}