
import { SketchCollector } from '../../sketchCollector';

export class DeezerCollector extends SketchCollector {

    static CONFIG = {
        id: "deezer",
        name: "Deezer",
        description: "i18n.collectors.deezer.description",
        version: "0",
        website: "https://www.deezer.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/11888.jpg",
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
        entryUrl: "https://www.deezer.com/login",
    }

    constructor() {
        super(DeezerCollector.CONFIG);
    }
}
