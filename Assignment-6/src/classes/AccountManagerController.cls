public with sharing class AccountManagerController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts() {
        return [SELECT Id, Name, Industry, Domain__c, Phone FROM Account LIMIT 10];
    }
}