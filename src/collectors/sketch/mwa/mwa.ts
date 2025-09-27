
import { SketchCollector } from '../../sketchCollector';

export class MwaCollector extends SketchCollector {

    static CONFIG = {
        id: "mwa",
        name: "MWA",
        description: "i18n.collectors.mwa.description",
        version: "0",
        website: "https://portal.mwa-gmbh.de//dashboard-rechnungen",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4213777.jpg",
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
        entryUrl: "https://portal.mwa-gmbh.de//dashboard-rechnungen",
    }

    constructor() {
        super(MwaCollector.CONFIG);
    }
}
