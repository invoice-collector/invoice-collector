
import { SketchCollector } from '../../sketchCollector';

export class SatconnectCollector extends SketchCollector {

    static CONFIG = {
        id: "satconnect",
        name: "satConnect",
        description: "i18n.collectors.satconnect.description",
        version: "0",
        website: "http://de.satconnect.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9231.jpg",
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
        entryUrl: "http://de.satconnect.com",
    }

    constructor() {
        super(SatconnectCollector.CONFIG);
    }
}
