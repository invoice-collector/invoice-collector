
import { SketchCollector } from '../../sketchCollector';

export class ModulesgardenCollector extends SketchCollector {

    static CONFIG = {
        id: "modulesgarden",
        name: "ModulesGarden",
        description: "i18n.collectors.modulesgarden.description",
        version: "0",
        website: "https://www.modulesgarden.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/22161.jpg",
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
        entryUrl: "https://www.modulesgarden.com/",
    }

    constructor() {
        super(ModulesgardenCollector.CONFIG);
    }
}
