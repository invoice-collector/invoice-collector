
import { SketchCollector } from '../../sketchCollector';

export class MysendingboxCollector extends SketchCollector {

    static CONFIG = {
        id: "mysendingbox",
        name: "MySendingBox",
        description: "i18n.collectors.mysendingbox.description",
        version: "0",
        website: "https://www.mysendingbox.fr/app/dashboard/settings/invoicing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778892.jpg",
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
        entryUrl: "https://www.mysendingbox.fr/app/dashboard/settings/invoicing",
    }

    constructor() {
        super(MysendingboxCollector.CONFIG);
    }
}
