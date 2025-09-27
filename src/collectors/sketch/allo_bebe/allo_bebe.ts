
import { SketchCollector } from '../../sketchCollector';

export class AlloBebeCollector extends SketchCollector {

    static CONFIG = {
        id: "allo_bebe",
        name: "Allo Bebe",
        description: "i18n.collectors.allo_bebe.description",
        version: "0",
        website: "https://www.allobebe.fr/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/122467.jpg",
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
        entryUrl: "https://www.allobebe.fr/",
    }

    constructor() {
        super(AlloBebeCollector.CONFIG);
    }
}
