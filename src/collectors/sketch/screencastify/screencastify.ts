
import { SketchCollector } from '../../sketchCollector';

export class ScreencastifyCollector extends SketchCollector {

    static CONFIG = {
        id: "screencastify",
        name: "Screencastify",
        description: "i18n.collectors.screencastify.description",
        version: "0",
        website: "https://app.screencastify.com/account/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1360003.jpg",
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
        entryUrl: "https://app.screencastify.com/account/",
    }

    constructor() {
        super(ScreencastifyCollector.CONFIG);
    }
}
