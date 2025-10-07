
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class RaidboxesCollector extends SketchCollector {

    static CONFIG = {
        id: "raidboxes",
        name: "RAIDBOXES",
        description: "i18n.collectors.raidboxes.description",
        version: "0",
        website: "https://dashboard.raidboxes.de/rechnungen",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/19653.jpg",
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
        entryUrl: "https://dashboard.raidboxes.de/rechnungen",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(RaidboxesCollector.CONFIG);
    }
}
