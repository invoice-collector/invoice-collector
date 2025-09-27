
import { SketchCollector } from '../../sketchCollector';

export class PowrCollector extends SketchCollector {

    static CONFIG = {
        id: "powr",
        name: "POWr",
        description: "i18n.collectors.powr.description",
        version: "0",
        website: "https://www.powr.io/users/me/account?id=me",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/69260.jpg",
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
        entryUrl: "https://www.powr.io/users/me/account?id=me",
    }

    constructor() {
        super(PowrCollector.CONFIG);
    }
}
