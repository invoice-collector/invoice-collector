
import { SketchCollector } from '../../sketchCollector';

export class NutritiendaCollector extends SketchCollector {

    static CONFIG = {
        id: "nutritienda",
        name: "nutritienda",
        description: "i18n.collectors.nutritienda.description",
        version: "0",
        website: "https://www.nutritienda.com/de/mein-konto?tab=orders",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3200146.jpg",
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
        entryUrl: "https://www.nutritienda.com/de/mein-konto?tab=orders",
    }

    constructor() {
        super(NutritiendaCollector.CONFIG);
    }
}
