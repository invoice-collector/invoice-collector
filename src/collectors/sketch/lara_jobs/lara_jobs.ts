
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class LaraJobsCollector extends SketchCollector {

    static CONFIG = {
        id: "lara_jobs",
        name: "Lara Jobs",
        description: "i18n.collectors.lara_jobs.description",
        version: "0",
        website: "https://larajobs.com/account/orders",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/210993.jpg",
        type: CollectorType.SKETCH,
        params: {
            email: {
                type: "email",
                name: "i18n.collectors.all.email",
                placeholder: "i18n.collectors.all.email.placeholder",
                mandatory: true
            },
            password: {
                type: "password",
                name: "i18n.collectors.all.password",
                placeholder: "i18n.collectors.all.password.placeholder",
                mandatory: true
            }
        },
        entryUrl: "https://larajobs.com/account/orders",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LaraJobsCollector.CONFIG);
    }
}
