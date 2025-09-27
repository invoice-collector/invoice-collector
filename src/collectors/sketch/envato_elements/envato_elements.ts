
import { SketchCollector } from '../../sketchCollector';

export class EnvatoElementsCollector extends SketchCollector {

    static CONFIG = {
        id: "envato_elements",
        name: "Envato Elements",
        description: "i18n.collectors.envato_elements.description",
        version: "0",
        website: "https://elements.envato.com/de/sign-in",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/125328.jpg",
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
        entryUrl: "https://elements.envato.com/de/sign-in",
    }

    constructor() {
        super(EnvatoElementsCollector.CONFIG);
    }
}
