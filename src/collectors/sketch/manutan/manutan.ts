
import { SketchCollector } from '../../sketchCollector';

export class ManutanCollector extends SketchCollector {

    static CONFIG = {
        id: "manutan",
        name: "Manutan",
        description: "i18n.collectors.manutan.description",
        version: "0",
        website: "https://www.manutan.fr/fr/maf",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778786.jpg",
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
        entryUrl: "https://www.manutan.fr/fr/maf",
    }

    constructor() {
        super(ManutanCollector.CONFIG);
    }
}
