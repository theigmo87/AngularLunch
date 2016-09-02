using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using MvcApiAngularBoilerplate.Models;

namespace MvcApiAngularBoilerplate
{
    public class ContactsController : ApiController
    {
        private Repositories.ContactsRepository _repo = new Repositories.ContactsRepository();
        // GET api/<controller>
        public IEnumerable<Contact> Get()
        {
            return _repo.GetAll();
        }

        // GET api/<controller>/5
        public Contact Get(int id)
        {
            return _repo.Get(id);
        }

        // POST api/<controller>
        public int Post(Contact contact)
        {
            int newId = _repo.Save(contact);
            return newId;
        }

        // PUT api/<controller>/5
        public void Put(Contact contact)
        {
            _repo.Save(contact);
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
            _repo.Delete(id);
        }
    }
}