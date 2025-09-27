
import { SketchCollector } from '../../sketchCollector';

export class TymeCollector extends SketchCollector {

    static CONFIG = {
        id: "tyme",
        name: "Tyme",
        description: "i18n.collectors.tyme.description",
        version: "0",
        website: "http://tyme-app.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/6583.jpg",
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
        entryUrl: "http://tyme-app.com",
    }

    constructor() {
        super(TymeCollector.CONFIG);
    }
}
