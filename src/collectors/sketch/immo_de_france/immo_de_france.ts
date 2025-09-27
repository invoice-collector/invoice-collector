
import { SketchCollector } from '../../sketchCollector';

export class ImmoDeFranceCollector extends SketchCollector {

    static CONFIG = {
        id: "immo_de_france",
        name: "Immo de France",
        description: "i18n.collectors.immo_de_france.description",
        version: "0",
        website: "https://www.immodefrance.com/fr/video-services-en-ligne",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/108549.jpg",
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
        entryUrl: "https://www.immodefrance.com/fr/video-services-en-ligne",
    }

    constructor() {
        super(ImmoDeFranceCollector.CONFIG);
    }
}
