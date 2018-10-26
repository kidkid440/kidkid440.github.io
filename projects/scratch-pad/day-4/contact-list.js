// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following API:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 * 
 * BONUS : add a printAllContactNames() Function to your makeContactList() factory, so that the 
 *         contact-list returned has an all() API. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Your Mom
 *          
 *          WARNING: To pass the bonus test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    return {
           id: id, 
           nameFirst: nameFirst,
           nameLast: nameLast
        
    };
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        
        addContact: function(contact){
            contacts.push(contact);
        },
        
        findContact: function(fullName){
           for(var i = 0; i < contacts.length;i++){
               
              /*Check to see if fullName is equal to the first contact in the
              *list which is i looking at namefirst adding a space too check both firstName
              * and lastName
              */
               if(fullName === (contacts[i].nameFirst + " " + contacts[i].nameLast)){
                   return contacts[i];
           }else{
               if(!fullName === (contacts[i].nameFirst + " " + contacts[i].NameLast)){
               return undefined;
           } 
        }
        }
        },
        removeContact: function(contact){
           for(var i = 0;i < contacts.length;i++){
               if(contact === contacts[i]){
                   return contacts.splice(i,1);
               }
           }
            
            
        },
        
        printAllContactNames: function(){
          var str = "";
                for(var i = 0;i < contacts.length;i++){
                    if(i !== contacts.length-1){
                     str += contacts[i].nameFirst + " " + contacts[i].nameLast + '\n'; 
                    }else{
                        str += contacts[i].nameFirst + " " + contacts[i].nameLast;                  
                    }
                        
                }
            return str;
                }
            };
}
        
        
    
    





// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
