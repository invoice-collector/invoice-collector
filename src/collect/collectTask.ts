import { CronJob } from 'cron';
import { IcCredential } from '../model/credential';
import { Collect } from './collect';
import { CollectPool } from './collectPool';

export class CollectTask {
    private job: CronJob;

    constructor() {
        const onTick = async () => {
            console.log('Collect Task wakes up!');

            // Get all credentials on which we need to collect invoices
            let credential_ids = await IcCredential.getCredentialsIdToCollect()
            console.log(`Found ${credential_ids.length} credentials to collect`);

            // Collect invoices for each credential one by one
            for (const credential_id of credential_ids) {
                try {
                    const collect = new Collect(credential_id);
                    
                    // Check if a collect is in progress for this credential
                    if (!CollectPool.getInstance().has(credential_id)) {
                        // Register collect in progress
                        CollectPool.getInstance().registerCollect(credential_id, collect);
                        // Start the collect
                        await collect.start();
                    }
                    else {
                        console.warn(`A collect is already in progress for credential ${credential_id}, skipping`);
                    }
                }
                catch (err) {
                    console.error(`Invoice collection for credential ${credential_id} has failed`);
                    console.error(err);
                }
                finally{
                    CollectPool.getInstance().unregisterCollect(credential_id);
                }
            }
        }

        this.job = new CronJob('0 * * * *', onTick, null, false, 'Europe/Paris');
        this.start();
    }

    public start() {
        this.job.start();
        console.log('Collect Task started! Invoice collection will be performed every hour.');
    }

    public stop() {
        this.job.stop();
    }
}
