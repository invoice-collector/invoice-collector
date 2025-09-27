
import { SketchCollector } from '../../sketchCollector';

export class PartooCollector extends SketchCollector {

    static CONFIG = {
        id: "partoo",
        name: "Partoo",
        description: "i18n.collectors.partoo.description",
        version: "0",
        website: "https://app.partoo.co/settings/main/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4679997.jpg",
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
        entryUrl: "https://app.partoo.co/settings/main/invoices",
    }

    constructor() {
        super(PartooCollector.CONFIG);
    }
}
