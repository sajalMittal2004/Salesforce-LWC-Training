public with sharing class AccountManagerWizardController {
        @AuraEnabled(cacheable=true)
        public static List<Contact> getContacts(Id accId, String searchKey) {
            String key = '%'+searchKey+'%';
            return [SELECT Id, Name, Email, Phone, Account.Name FROM Contact WHERE AccountId =: accId AND Name LIKE: key];
        }

        @AuraEnabled
        public static void createContact(Contact con) {
            try{
                insert con;
            } catch(Exception e) {
                AuraHandledException auraEx = new AuraHandledException(e.getMessage());
                auraEx.setMessage(e.getMessage()); 
                throw auraEx;
            }
        }

        @AuraEnabled(cacheable=true)
        public static Integer getContactCount(Id accId) {
            Integer contactCount = [SELECT COUNT() FROM Contact WHERE AccountId =: accId];
            return contactCount;
        }
    }