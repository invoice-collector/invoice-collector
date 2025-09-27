
import { SketchCollector } from '../../sketchCollector';

export class IssuuCollector extends SketchCollector {

    static CONFIG = {
        id: "issuu",
        name: "issuu",
        description: "i18n.collectors.issuu.description",
        version: "0",
        website: "https://issuu.com/signin",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8134.jpg",
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
        entryUrl: "https://issuu.com/signin",
    }

    constructor() {
        super(IssuuCollector.CONFIG);
    }
}
