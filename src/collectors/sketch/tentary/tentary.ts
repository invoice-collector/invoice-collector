
import { SketchCollector } from '../../sketchCollector';

export class TentaryCollector extends SketchCollector {

    static CONFIG = {
        id: "tentary",
        name: "Tentary",
        description: "i18n.collectors.tentary.description",
        version: "0",
        website: "https://app.tentary.com/settings/revenues/customerinvoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3006290.jpg",
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
        entryUrl: "https://app.tentary.com/settings/revenues/customerinvoices",
    }

    constructor() {
        super(TentaryCollector.CONFIG);
    }
}
