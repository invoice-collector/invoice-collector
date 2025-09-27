
import { SketchCollector } from '../../sketchCollector';

export class MoqoCollector extends SketchCollector {

    static CONFIG = {
        id: "moqo",
        name: "Moqo",
        description: "i18n.collectors.moqo.description",
        version: "0",
        website: "https://portal.moqo.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/161954.jpg",
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
        entryUrl: "https://portal.moqo.de/",
    }

    constructor() {
        super(MoqoCollector.CONFIG);
    }
}
