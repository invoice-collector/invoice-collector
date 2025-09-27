
import { SketchCollector } from '../../sketchCollector';

export class GrooveCollector extends SketchCollector {

    static CONFIG = {
        id: "groove",
        name: "Groove",
        description: "i18n.collectors.groove.description",
        version: "0",
        website: "https://app.groovehq.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/7049.jpg",
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
        entryUrl: "https://app.groovehq.com/login",
    }

    constructor() {
        super(GrooveCollector.CONFIG);
    }
}
