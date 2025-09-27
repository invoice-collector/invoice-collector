
import { SketchCollector } from '../../sketchCollector';

export class DiscotelCollector extends SketchCollector {

    static CONFIG = {
        id: "discotel",
        name: "discoTEL",
        description: "i18n.collectors.discotel.description",
        version: "0",
        website: "https://service.discotel.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/54361.jpg",
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
        entryUrl: "https://service.discotel.de/",
    }

    constructor() {
        super(DiscotelCollector.CONFIG);
    }
}
