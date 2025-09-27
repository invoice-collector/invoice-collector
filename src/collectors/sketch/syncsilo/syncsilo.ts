
import { SketchCollector } from '../../sketchCollector';

export class SyncsiloCollector extends SketchCollector {

    static CONFIG = {
        id: "syncsilo",
        name: "syncsilo",
        description: "i18n.collectors.syncsilo.description",
        version: "0",
        website: "https://app.syncsilo.com/settings/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1505696.jpg",
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
        entryUrl: "https://app.syncsilo.com/settings/billing",
    }

    constructor() {
        super(SyncsiloCollector.CONFIG);
    }
}
