
import { SketchCollector } from '../../sketchCollector';

export class GradwellCollector extends SketchCollector {

    static CONFIG = {
        id: "gradwell",
        name: "Gradwell",
        description: "i18n.collectors.gradwell.description",
        version: "0",
        website: "https://login.gradwell.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9404.jpg",
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
        entryUrl: "https://login.gradwell.com/",
    }

    constructor() {
        super(GradwellCollector.CONFIG);
    }
}
