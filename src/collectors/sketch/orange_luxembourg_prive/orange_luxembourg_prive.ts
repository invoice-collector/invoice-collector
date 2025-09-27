
import { SketchCollector } from '../../sketchCollector';

export class OrangeLuxembourgPriveCollector extends SketchCollector {

    static CONFIG = {
        id: "orange_luxembourg_prive",
        name: "Orange Luxembourg Prive",
        description: "i18n.collectors.orange_luxembourg_prive.description",
        version: "0",
        website: "https://account.orange.lu/en/index/login#/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/135228.jpg",
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
        entryUrl: "https://account.orange.lu/en/index/login#/",
    }

    constructor() {
        super(OrangeLuxembourgPriveCollector.CONFIG);
    }
}
