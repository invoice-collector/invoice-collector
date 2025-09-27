
import { SketchCollector } from '../../sketchCollector';

export class SnapshooterCollector extends SketchCollector {

    static CONFIG = {
        id: "snapshooter",
        name: "Snapshooter",
        description: "i18n.collectors.snapshooter.description",
        version: "0",
        website: "https://snapshooter.io/dashboard/settings/billing/plans",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/150641.jpg",
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
        entryUrl: "https://snapshooter.io/dashboard/settings/billing/plans",
    }

    constructor() {
        super(SnapshooterCollector.CONFIG);
    }
}
