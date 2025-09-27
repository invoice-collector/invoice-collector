
import { SketchCollector } from '../../sketchCollector';

export class AcquiaCollector extends SketchCollector {

    static CONFIG = {
        id: "acquia",
        name: "Acquia",
        description: "i18n.collectors.acquia.description",
        version: "0",
        website: "https://accounts.acquia.com/account/1416806/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/416020.jpg",
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
        entryUrl: "https://accounts.acquia.com/account/1416806/invoices",
    }

    constructor() {
        super(AcquiaCollector.CONFIG);
    }
}
