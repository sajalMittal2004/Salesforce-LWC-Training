public with sharing class AccountDataTableController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts() {
        List<Account> accList = [SELECT Id, Name, Phone, Website, Industry
                                    FROM Account
                                    ORDER BY CreatedDate DESC];
        return accList;
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
}