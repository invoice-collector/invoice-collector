
import { SketchCollector } from '../../sketchCollector';

export class RaygunCollector extends SketchCollector {

    static CONFIG = {
        id: "raygun",
        name: "Raygun",
        description: "i18n.collectors.raygun.description",
        version: "0",
        website: "https://app.raygun.com/signin?ReturnUrl=%2f",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/777991.jpg",
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
        entryUrl: "https://app.raygun.com/signin?ReturnUrl=%2f",
    }

    constructor() {
        super(RaygunCollector.CONFIG);
    }
}
