using InterviewTestCrud.Data;
using InterviewTestCrud.Data.Service;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace InterviewTestCrud.Api.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")] // tune to your needs

    public class EmployeeDetailController : ApiController
    {
        EmployeeService employee = new EmployeeService();

        [HttpGet]
        public HttpResponseMessage GetAllEmployee()
        {
            return Request.CreateResponse(HttpStatusCode.OK, employee.GetEmployeeDetails());
        }

        [HttpGet]
        public HttpResponseMessage GetEmployeeByIOd(int id)
        {
            return Request.CreateResponse(HttpStatusCode.OK, employee.GetEmployeeById(id));
        }

        [HttpPost]
        public HttpResponseMessage AddEmployee(EmployeeDetail emp)
        {
            return Request.CreateResponse(HttpStatusCode.OK, employee.AddEmployee(emp));
        }
        [HttpPost]
        public HttpResponseMessage UpdateEmployee(EmployeeDetail emp)
        {
            return Request.CreateResponse(HttpStatusCode.OK, employee.UpdateEmployee(emp));
        }

        [HttpGet]
        public HttpResponseMessage RemoveEmployee(int id)
        {
            return Request.CreateResponse(HttpStatusCode.OK, employee.DeleteEmployee(id));
        }

    }
}
