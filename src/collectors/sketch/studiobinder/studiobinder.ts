
import { SketchCollector } from '../../sketchCollector';

export class StudiobinderCollector extends SketchCollector {

    static CONFIG = {
        id: "studiobinder",
        name: "StudioBinder",
        description: "i18n.collectors.studiobinder.description",
        version: "0",
        website: "https://app.studiobinder.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/45564.jpg",
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
        entryUrl: "https://app.studiobinder.com/login",
    }

    constructor() {
        super(StudiobinderCollector.CONFIG);
    }
}
