
import { SketchCollector } from '../../sketchCollector';

export class WatadoCollector extends SketchCollector {

    static CONFIG = {
        id: "watado",
        name: "Watado",
        description: "i18n.collectors.watado.description",
        version: "0",
        website: "https://watado.de/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1126187.jpg",
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
        entryUrl: "https://watado.de/login",
    }

    constructor() {
        super(WatadoCollector.CONFIG);
    }
}
