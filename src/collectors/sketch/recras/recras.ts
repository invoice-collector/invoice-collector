
import { SketchCollector } from '../../sketchCollector';

export class RecrasCollector extends SketchCollector {

    static CONFIG = {
        id: "recras",
        name: "RECRAS",
        description: "i18n.collectors.recras.description",
        version: "0",
        website: "https://www.recras.nl/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/886633.jpg",
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
        entryUrl: "https://www.recras.nl/",
    }

    constructor() {
        super(RecrasCollector.CONFIG);
    }
}
