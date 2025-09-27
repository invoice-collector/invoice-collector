
import { SketchCollector } from '../../sketchCollector';

export class CaptaincontratCollector extends SketchCollector {

    static CONFIG = {
        id: "captaincontrat",
        name: "CaptainContrat",
        description: "i18n.collectors.captaincontrat.description",
        version: "0",
        website: "https://client.captaincontrat.com/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/784156.jpg",
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
        entryUrl: "https://client.captaincontrat.com/invoices",
    }

    constructor() {
        super(CaptaincontratCollector.CONFIG);
    }
}
