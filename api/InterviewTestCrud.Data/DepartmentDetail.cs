//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace InterviewTestCrud.Data
{
    using System;
    using System.Collections.Generic;
    
    public partial class DepartmentDetail
    {
        public int Id { get; set; }
        public string DepartmentName { get; set; }
        public Nullable<int> EmployeeId { get; set; }
    
        public virtual EmployeeDetail EmployeeDetail { get; set; }
    }
}