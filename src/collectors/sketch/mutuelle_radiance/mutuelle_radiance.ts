
import { SketchCollector } from '../../sketchCollector';

export class MutuelleRadianceCollector extends SketchCollector {

    static CONFIG = {
        id: "mutuelle_radiance",
        name: "Mutuelle Radiance",
        description: "i18n.collectors.mutuelle_radiance.description",
        version: "0",
        website: "https://mutuelle.fr/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/130359.jpg",
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
        entryUrl: "https://mutuelle.fr/",
    }

    constructor() {
        super(MutuelleRadianceCollector.CONFIG);
    }
}
