
import { SketchCollector } from '../../sketchCollector';

export class WeapIoCollector extends SketchCollector {

    static CONFIG = {
        id: "weap_io",
        name: "Weap.io",
        description: "i18n.collectors.weap_io.description",
        version: "0",
        website: "https://app.weap.io/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/745479.jpg",
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
        entryUrl: "https://app.weap.io/login",
    }

    constructor() {
        super(WeapIoCollector.CONFIG);
    }
}
