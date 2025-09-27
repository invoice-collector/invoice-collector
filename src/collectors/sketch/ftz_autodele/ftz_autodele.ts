
import { SketchCollector } from '../../sketchCollector';

export class FtzAutodeleCollector extends SketchCollector {

    static CONFIG = {
        id: "ftz_autodele",
        name: "FTZ AUTODELE",
        description: "i18n.collectors.ftz_autodele.description",
        version: "0",
        website: "http://www.ftz.dk",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/21978.jpg",
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
        entryUrl: "http://www.ftz.dk",
    }

    constructor() {
        super(FtzAutodeleCollector.CONFIG);
    }
}
