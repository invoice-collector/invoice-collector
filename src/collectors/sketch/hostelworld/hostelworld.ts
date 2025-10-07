
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class HostelworldCollector extends SketchCollector {

    static CONFIG = {
        id: "hostelworld",
        name: "Hostelworld",
        description: "i18n.collectors.hostelworld.description",
        version: "0",
        website: "https://inbox.hostelworld.com/reports/vatinvoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1866470.jpg",
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
        entryUrl: "https://inbox.hostelworld.com/reports/vatinvoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HostelworldCollector.CONFIG);
    }
}
