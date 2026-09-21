import { CronJob } from 'cron';
import { Customer } from '../../model/customer';

/**
 * Task responsible for scheduling and creating a bill at the end of each month.
 */
export class BillTask {
    static DEFAULT_CRON_TIME = '30 0 1 * *';
    static DEFAULT_TIMEZONE = 'Europe/Paris';

    private job: CronJob;

    constructor() {
        const onTick = async () => {
            //Get all customers
            const customers = await Customer.getAll();
            // For each customer, create a bill
            for (const customer of customers) {
                // If the plan does not have no cost
                if(!customer.plan.noCost()) {
                    await customer.computeMissingBills();
                }
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

    public start() {
        this.job.start();
        console.log('Bill Task started!');
    }

    public stop() {
        this.job.stop();
    }
}
