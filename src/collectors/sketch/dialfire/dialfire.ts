
import { SketchCollector } from '../../sketchCollector';

export class DialfireCollector extends SketchCollector {

    static CONFIG = {
        id: "dialfire",
        name: "Dialfire",
        description: "i18n.collectors.dialfire.description",
        version: "0",
        website: "http://www.dialfire.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/58622.jpg",
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
        entryUrl: "http://www.dialfire.com",
    }

    constructor() {
        super(DialfireCollector.CONFIG);
    }
}
