
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ConnectilCollector extends SketchCollector {

    static CONFIG = {
        id: "connectil",
        name: "Connectil",
        description: "i18n.collectors.connectil.description",
        version: "0",
        website: "https://cloud.connectill.com/dashboard/my-account-invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2445709.jpg",
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
        entryUrl: "https://cloud.connectill.com/dashboard/my-account-invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ConnectilCollector.CONFIG);
    }
}
