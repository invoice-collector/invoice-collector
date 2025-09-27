
import { SketchCollector } from '../../sketchCollector';

export class QogitaCollector extends SketchCollector {

    static CONFIG = {
        id: "qogita",
        name: "Qogita",
        description: "i18n.collectors.qogita.description",
        version: "0",
        website: "https://www.qogita.com/login/?redirectTo=%2Faccount%2Fprofile%2F",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2842138.jpg",
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
        entryUrl: "https://www.qogita.com/login/?redirectTo=%2Faccount%2Fprofile%2F",
    }

    constructor() {
        super(QogitaCollector.CONFIG);
    }
}
