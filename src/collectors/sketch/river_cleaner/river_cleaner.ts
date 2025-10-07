
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class RiverCleanerCollector extends SketchCollector {

    static CONFIG = {
        id: "river_cleaner",
        name: "River Cleaner",
        description: "i18n.collectors.river_cleaner.description",
        version: "0",
        website: "https://rivercleaner.com/member-profile/invoices/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/159724.jpg",
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
        entryUrl: "https://rivercleaner.com/member-profile/invoices/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(RiverCleanerCollector.CONFIG);
    }
}
