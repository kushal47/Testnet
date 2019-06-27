using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace InterviewTestCrud.Data.Service
{
    public class EmployeeService
    {

        public List<Tests> GetEmployeeDetails()
        {
            try
            {
                var dataToreturn = new List<EmployeeDetail>();
                using (var repo = new EmployeeInterviewEntities())
                {
                    dataToreturn = repo.EmployeeDetails.ToList();
                }
                var data = new List<Tests>();
                foreach(var d in dataToreturn)
                {
                    var dd = new Tests();
                    dd.Address = d.Address;
                    dd.EmailAddress = d.EmailAddress;
                    dd.FirstName = d.FirstName;
                    dd.LastName = d.LastName;
                    dd.FirstName = d.FirstName;
                    data.Add(dd);
                }
                return data;
            }
            catch(Exception ex)
            {
                throw;
            }
            
        }
        public string AddEmployee(EmployeeDetail employee)
        {

            using (var repo = new EmployeeInterviewEntities())
            {
                repo.EmployeeDetails.Add(employee);
                repo.SaveChanges();
            }
            return "Employee Added successfully.";
        }

        public EmployeeDetail GetEmployeeById(int id)
        {
            var dataToReturn = new EmployeeDetail();
            using (var repo = new EmployeeInterviewEntities())
            {
                dataToReturn = repo.EmployeeDetails.FirstOrDefault(a => a.Id == id);
            }
            return dataToReturn;
        }
        public string UpdateEmployee(EmployeeDetail employee)
        {

            using (var repo = new EmployeeInterviewEntities())
            {
                var data = repo.EmployeeDetails.SingleOrDefault(a => a.Id == employee.Id);
                if (data != null)
                {
                    data.FirstName = employee.FirstName;
                    data.LastName = employee.LastName;
                    data.PhoneNumber = employee.PhoneNumber;
                    data.EmailAddress = employee.EmailAddress;
                    data.Address = employee.Address;
                    repo.SaveChanges();
                }

            }
            return "Employee Updated successfully.";
        }

        public string DeleteEmployee(int id)
        {

            using (var repo = new EmployeeInterviewEntities())
            {
                var data = repo.EmployeeDetails.FirstOrDefault(a => a.Id == id);
                if (data != null)
                {
                    repo.EmployeeDetails.Remove(data)
                        ;
                    repo.SaveChanges();
                }
            }
            return "Employee removed successfully.";
        }

    }

    public class Tests
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string EmailAddress { get; set; }
        public string Address { get; set; }
        public string PhoneNumber { get; set; }
    }
}



