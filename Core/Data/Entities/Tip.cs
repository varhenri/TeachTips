using System;
using System.Collections.Generic;

namespace TeachTips.Core.Data.Entities
{
    public class Tip {
        public long Id { get; set; }
        public string TipText { get; set; }
        public string TipTitle { get; set; }
        public DateTime Timestamp { get; set; }
        public virtual IList<TipCategory> Categories { get; set; } = new List<TipCategory>();
        public Tip(){}
    }
}