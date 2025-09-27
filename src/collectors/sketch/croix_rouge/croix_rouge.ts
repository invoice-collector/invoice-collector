
import { SketchCollector } from '../../sketchCollector';

export class CroixRougeCollector extends SketchCollector {

    static CONFIG = {
        id: "croix_rouge",
        name: "Croix rouge",
        description: "i18n.collectors.croix_rouge.description",
        version: "0",
        website: "https://www.croix-rouge.fr/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/105879.jpg",
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
        entryUrl: "https://www.croix-rouge.fr/",
    }

    constructor() {
        super(CroixRougeCollector.CONFIG);
    }
}
