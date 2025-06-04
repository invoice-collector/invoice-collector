import { Customer } from '../src/model/customer';
import { DatabaseFactory } from '../src/database/databaseFactory';
import * as utils from '../src/utils';

async function manageDefaultCustomer() {
    try {
        // Connect to database
        await DatabaseFactory.getDatabase().connect();

        // Delete all existing customers
        const db = DatabaseFactory.getDatabase();
        await db.deleteAllCustomers();
        console.log('All existing customers have been deleted.');

        // Create default customer
        const { bearer, customer } = await Customer.createDefault();

        console.log('Default customer created successfully!');
        console.log('Customer ID:', customer.id);
        console.log('Customer Name:', customer.name);
        console.log('Bearer Token:', bearer);
        console.log('\nUse this Bearer token in your API requests like this:');
        console.log('Authorization: Bearer ' + bearer);

        // Disconnect from database
        await DatabaseFactory.getDatabase().disconnect();
    } catch (error) {
        console.error('Error:', error);
    }
}

// Run the script
manageDefaultCustomer(); 