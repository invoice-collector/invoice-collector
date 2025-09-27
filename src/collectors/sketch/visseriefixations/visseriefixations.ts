
import { SketchCollector } from '../../sketchCollector';

export class VisseriefixationsCollector extends SketchCollector {

    static CONFIG = {
        id: "visseriefixations",
        name: "VisserieFixations",
        description: "i18n.collectors.visseriefixations.description",
        version: "0",
        website: "https://www.visseriefixations.fr/sales/order/history/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1421358.jpg",
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
        entryUrl: "https://www.visseriefixations.fr/sales/order/history/",
    }

    constructor() {
        super(VisseriefixationsCollector.CONFIG);
    }
}
