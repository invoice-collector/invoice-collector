
import { SketchCollector } from '../../sketchCollector';

export class GetklarCollector extends SketchCollector {

    static CONFIG = {
        id: "getklar",
        name: "getklar",
        description: "i18n.collectors.getklar.description",
        version: "0",
        website: "https://app.getklar.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2769517.jpg",
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
        entryUrl: "https://app.getklar.com/login",
    }

    constructor() {
        super(GetklarCollector.CONFIG);
    }
}
