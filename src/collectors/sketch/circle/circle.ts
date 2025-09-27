
import { SketchCollector } from '../../sketchCollector';

export class CircleCollector extends SketchCollector {

    static CONFIG = {
        id: "circle",
        name: "Circle",
        description: "i18n.collectors.circle.description",
        version: "0",
        website: "https://login.circle.so/sign_in?request_host=app.circle.so",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/811765.jpg",
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
        entryUrl: "https://login.circle.so/sign_in?request_host=app.circle.so",
    }

    constructor() {
        super(CircleCollector.CONFIG);
    }
}
