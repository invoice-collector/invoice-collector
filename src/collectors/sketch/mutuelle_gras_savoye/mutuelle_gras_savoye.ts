
import { SketchCollector } from '../../sketchCollector';

export class MutuelleGrasSavoyeCollector extends SketchCollector {

    static CONFIG = {
        id: "mutuelle_gras_savoye",
        name: "Mutuelle Gras Savoye",
        description: "i18n.collectors.mutuelle_gras_savoye.description",
        version: "0",
        website: "http://www.grassavoye.fr",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/128932.jpg",
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
        entryUrl: "http://www.grassavoye.fr",
    }

    constructor() {
        super(MutuelleGrasSavoyeCollector.CONFIG);
    }
}
