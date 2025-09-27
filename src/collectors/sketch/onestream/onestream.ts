
import { SketchCollector } from '../../sketchCollector';

export class OnestreamCollector extends SketchCollector {

    static CONFIG = {
        id: "onestream",
        name: "onestream",
        description: "i18n.collectors.onestream.description",
        version: "0",
        website: "https://app.onestream.live",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1060548.jpg",
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
        entryUrl: "https://app.onestream.live",
    }

    constructor() {
        super(OnestreamCollector.CONFIG);
    }
}
