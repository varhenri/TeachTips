using System;
using TeachTips.Core.Data.Entities;

namespace TeachTips.DTO {
    public class TipAddDTO{
        public string Title { get; set; }
        public string Text { get; set; }
        public long[] Categories { get; set; }
        public TipAddDTO(){}
        public Tip ToEntity(){
            return new Tip{
                TipText=Text,
                TipTitle=Title,
                Timestamp=DateTime.UtcNow
            };
        }
    }
}