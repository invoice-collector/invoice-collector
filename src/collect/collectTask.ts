import { CronJob } from 'cron';
import { IcCredential } from '../model/credential';
import { Collect } from './collect';
import { CollectPool } from './collectPool';

export class CollectTask {
    static DEFAULT_CRON_TIME = '* * * * *';
    static DEFAULT_TIMEZONE = 'Europe/Paris';

    private job: CronJob;

    constructor() {
        const onTick = async () => {
            // Get all credentials on which we need to collect invoices
            let credential_ids = await IcCredential.getCredentialsIdToCollect()

            if (credential_ids.length > 0) {
                console.log(`Found ${credential_ids.length} credentials to collect`);

                // Collect invoices for each credential one by one
                for (const credential_id of credential_ids) {
                    // Check if a collect is in progress for this credential
                    if (!CollectPool.getInstance().has(credential_id)) {
                        try {
                            const collect = new Collect(credential_id, undefined);
                        
                            // Register collect in progress
                            CollectPool.getInstance().registerCollect(credential_id, collect);
                            // Start the collect
                            await collect.start();
                        }
                        catch (err) {
                            console.error(`Invoice collection for credential ${credential_id} has failed`);
                            console.error(err);
                        }
                        finally{
                            CollectPool.getInstance().unregisterCollect(credential_id);
                        }
                    }
                    else {
                        console.warn(`A collect is already in progress for credential ${credential_id}, skipping`);
                    }
                }
            }
        }

        this.job = CronJob.from({
            cronTime: CollectTask.DEFAULT_CRON_TIME,
            onTick: onTick,
            start: false,
            waitForCompletion: true,
            timeZone: CollectTask.DEFAULT_TIMEZONE
        });
    }

    public start() {
        this.job.start();
        console.log('Collect Task started!');
    }

    public stop() {
        this.job.stop();
    }
}
