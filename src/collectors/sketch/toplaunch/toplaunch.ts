
import { SketchCollector } from '../../sketchCollector';

export class ToplaunchCollector extends SketchCollector {

    static CONFIG = {
        id: "toplaunch",
        name: "TopLaunch",
        description: "i18n.collectors.toplaunch.description",
        version: "0",
        website: "https://toplaunch.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/930997.jpg",
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
        entryUrl: "https://toplaunch.com/login",
    }

    constructor() {
        super(ToplaunchCollector.CONFIG);
    }
}
