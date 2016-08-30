using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MvcApiAngularBoilerplate.Models;

namespace MvcApiAngularBoilerplate.Repositories
{
    static class ContactsData
    {
        public static int GetNewID()
        {
            if (Contacts.Any())
                return Contacts.Max(x => x.ID) + 1;
            else
                return 1;
        }
        public static List<Contact> Contacts = new List<Contact>()
        {
            new Contact()
            {
                ID = 1,
                FirstName = "James",
                MI = "H",
                LastName = "Gillam",
                NickName = "Jimmy"
            },
            new Contact()
            {
                ID = 2,
                FirstName = "Chris",
                MI = null,
                LastName = "Hargrave",
                NickName = "Chris"
            },
            new Contact()
            {
                ID = 3,
                FirstName = "Dennis",
                LastName = "O'Keefe"
            }
        };
    };

    public class ContactsRepository : iRepository<Contact>
    {
        public bool Delete(int id)
        {

            var index = ContactsData.Contacts.FindIndex(x => x.ID == id);
            if (index < 0)
                return false;
            else
                ContactsData.Contacts.RemoveAt(index);
            return true;
        }

        public Contact Get(int id)
        {
            return ContactsData.Contacts.FirstOrDefault(x => x.ID == id);
        }

        public List<Contact> GetAll()
        {
            var retVal = ContactsData.Contacts;
            return retVal;
        }

        public bool Save(Contact contact)
        {
            Contact _c = ContactsData.Contacts.FirstOrDefault(x => x.ID == contact.ID);
            if (_c != null)
                _c = contact;
            else
            {
                contact.ID = ContactsData.GetNewID();
                ContactsData.Contacts.Add(contact);
            }
            return true;
        }
    }

    public interface iRepository<T>
    {
        T Get(int id);
        List<T> GetAll();
        bool Delete(int id);
        bool Save(T item);
    }
}