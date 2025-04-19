import { CronJob } from 'cron';
import { IcCredential } from '../model/credential';
import { Collect } from './collect';

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
                    await collect.start();
                }
                catch (err) {
                    console.error(`Invoice collection for credential ${credential_id} has failed`);
                    console.error(err);
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
