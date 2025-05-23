import { Customer } from '../model/customer';
import { DatabaseFactory } from '../database/databaseFactory';

async function createDefaultCustomer() {
    try {
        // Connect to database
        await DatabaseFactory.getDatabase().connect();

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
        console.error('Error creating default customer:', error);
    }
}

// Run the script
createDefaultCustomer(); 