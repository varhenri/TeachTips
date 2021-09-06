namespace TeachTips.Core.Data.Entities
{
        public class TipCategory {
        public long Id { get; set; }
        public virtual Category Category { get; set; }
        public long CategoryId { get; set; }
        public virtual Tip Tip { get; set; }
        public long TipId { get; set; }
        public TipCategory() {}
        public TipCategory(Tip tip, Category category) {
            this.Tip = tip;
            this.Category = category;
        }
    }
}