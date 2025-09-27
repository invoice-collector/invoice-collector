
import { SketchCollector } from '../../sketchCollector';

export class ConforamaCollector extends SketchCollector {

    static CONFIG = {
        id: "conforama",
        name: "Conforama",
        description: "i18n.collectors.conforama.description",
        version: "0",
        website: "https://www.conforama.fr/identification",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/27357.jpg",
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
        entryUrl: "https://www.conforama.fr/identification",
    }

    constructor() {
        super(ConforamaCollector.CONFIG);
    }
}
