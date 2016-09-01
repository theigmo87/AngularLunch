using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MvcApiAngularBoilerplate.Models;

namespace MvcApiAngularBoilerplate.Repositories
{
    static class ContactsData
    {
        public static List<Contact> Contacts = new Contact[]{
            new Contact()
            {
                ContactId = 1,
                FirstName = "James",
                MI = "H",
                LastName = "Gillam",
                NickName = "Jimmy",
                Email = "jgillam@taxslayer.com"
            },
            new Contact()
            {
                ContactId = 2,
                FirstName = "Chris",
                MI = null,
                LastName = "Hargrave",
                NickName = "Chris",
                Email = "chargrave@taxslayer.com"
            },
            new Contact()
            {
                ContactId = 3,
                FirstName = "Dennis",
                LastName = "O'Keefe",
                Email = "dokeefe@taxslayer.com"
            }
        }.ToList();

        public static int GetNewID()
        {
            if (Contacts.Any())
                return Contacts.Max(x => x.ContactId) + 1;
            else
                return 1;
        }
    };

    public class ContactsRepository : iRepository<Contact>
    {
        public bool Delete(int id)
        {
            var index = ContactsData.Contacts.FindIndex(x => x.ContactId == id);
            if (index < 0)
                return false;
            else
                ContactsData.Contacts.RemoveAt(index);
            return true;
        }

        public Contact Get(int id)
        {
            return ContactsData.Contacts.FirstOrDefault(x => x.ContactId == id);
        }

        public List<Contact> GetAll()
        {
            var retVal = ContactsData.Contacts;
            return retVal;
        }

        public int Save(Contact contact)
        {
            int targetId;
            Contact _c = ContactsData.Contacts.FirstOrDefault(x => x.ContactId == contact.ContactId);
            if (_c != null)
            {
                _c.FirstName = contact.FirstName;
                _c.LastName = contact.LastName;
                _c.MI = contact.MI;
                _c.Email = contact.Email;
                _c.ContactId = contact.ContactId;
                _c.NickName = contact.NickName;
                targetId = _c.ContactId;
            }
            else
            {
                contact.ContactId = ContactsData.GetNewID();
                ContactsData.Contacts.Add(contact);
                targetId = contact.ContactId;
            }
            return targetId;
        }
    }

    public interface iRepository<T>
    {
        T Get(int id);
        List<T> GetAll();
        bool Delete(int id);
        int Save(T item);
    }
}