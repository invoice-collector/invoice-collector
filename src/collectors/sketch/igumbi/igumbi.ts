
import { SketchCollector } from '../../sketchCollector';

export class IgumbiCollector extends SketchCollector {

    static CONFIG = {
        id: "igumbi",
        name: "igumbi",
        description: "i18n.collectors.igumbi.description",
        version: "0",
        website: "https://www.igumbi.com/trial",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/20612.jpg",
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
        entryUrl: "https://www.igumbi.com/trial",
    }

    constructor() {
        super(IgumbiCollector.CONFIG);
    }
}
