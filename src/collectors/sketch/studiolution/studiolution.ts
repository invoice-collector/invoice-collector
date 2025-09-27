
import { SketchCollector } from '../../sketchCollector';

export class StudiolutionCollector extends SketchCollector {

    static CONFIG = {
        id: "studiolution",
        name: "Studiolution",
        description: "i18n.collectors.studiolution.description",
        version: "0",
        website: "https://www.studiolution.com/de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/63271.jpg",
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
        entryUrl: "https://www.studiolution.com/de/",
    }

    constructor() {
        super(StudiolutionCollector.CONFIG);
    }
}
