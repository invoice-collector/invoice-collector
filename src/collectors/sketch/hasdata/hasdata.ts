
import { SketchCollector } from '../../sketchCollector';

export class HasdataCollector extends SketchCollector {

    static CONFIG = {
        id: "hasdata",
        name: "Hasdata",
        description: "i18n.collectors.hasdata.description",
        version: "0",
        website: "https://app.hasdata.com/sign-in",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3203640.jpg",
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
        entryUrl: "https://app.hasdata.com/sign-in",
    }

    constructor() {
        super(HasdataCollector.CONFIG);
    }
}
