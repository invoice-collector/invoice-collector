
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class GeotargetingwpCollector extends SketchCollector {

    static CONFIG = {
        id: "geotargetingwp",
        name: "GeotargetingWP",
        description: "i18n.collectors.geotargetingwp.description",
        version: "0",
        website: "https://geotargetingwp.com/dashboard/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/777342.jpg",
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
        entryUrl: "https://geotargetingwp.com/dashboard/invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GeotargetingwpCollector.CONFIG);
    }
}
