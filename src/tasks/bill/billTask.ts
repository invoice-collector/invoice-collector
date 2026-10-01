import { CronJob } from 'cron';
import { Customer } from '../../model/customer';

/**
 * Task responsible for scheduling and creating a bill at the end of each month.
 */
export class BillTask {
    static DEFAULT_CRON_TIME = '30 * * * *';    // At 00:30 the 1st day of every month
    static DEFAULT_TIMEZONE = 'UTC';

    private job: CronJob;

    /**
     * Constructs a new tasks to create a bill at the end of each month.
     */
    constructor() {
        const onTick = async () => {
            try {
                //Get all customers
                const customers = await Customer.getAll();
                // For each customer, create a bill
                for (const customer of customers) {
                    try {
                        // If the plan does not have no cost
                        if(!customer.plan.noCost()) {
                            console.log(`Computing bills for ${customer.id}`)
                            const newBills = await customer.computeMissingBills();
                            console.log(
                                newBills.length > 0 ?
                                `${newBills.length} new bills` :
                                'No new bill to compute'
                            )
                        }
                    } catch (error) {
                        console.error(`Error occurred while creating bill for customer ${customer.id}:`);
                        console.error(error);
                    }
                }
            } catch (error) {
                console.error('Error occurred while creating bills:');
                console.error(error);
            }
        };

        this.job = CronJob.from({
            cronTime: BillTask.DEFAULT_CRON_TIME,
            onTick,
            start: false,
            waitForCompletion: true,
            timeZone: BillTask.DEFAULT_TIMEZONE,
        });
    }

    /**
     * Starts the task.
     */
    public start() {
        this.job.start();
        console.log('Bill Task started!');
    }

    /**
     * Stops the task.
     */
    public stop() {
        this.job.stop();
    }
}
