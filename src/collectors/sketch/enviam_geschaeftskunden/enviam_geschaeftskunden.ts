
import { SketchCollector } from '../../sketchCollector';

export class EnviamGeschaeftskundenCollector extends SketchCollector {

    static CONFIG = {
        id: "enviam_geschaeftskunden",
        name: "enviam Geschaeftskunden",
        description: "i18n.collectors.enviam_geschaeftskunden.description",
        version: "0",
        website: "https://kundenportal.enviam.de/powercommerce/envia/fo/portal/invoice",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/962392.jpg",
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
        entryUrl: "https://kundenportal.enviam.de/powercommerce/envia/fo/portal/invoice",
    }

    constructor() {
        super(EnviamGeschaeftskundenCollector.CONFIG);
    }
}
