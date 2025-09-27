
import { SketchCollector } from '../../sketchCollector';

export class HeyflowCollector extends SketchCollector {

    static CONFIG = {
        id: "heyflow",
        name: "heyflow",
        description: "i18n.collectors.heyflow.description",
        version: "0",
        website: "https://go.heyflow.app/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/920850.jpg",
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
        entryUrl: "https://go.heyflow.app/",
    }

    constructor() {
        super(HeyflowCollector.CONFIG);
    }
}
