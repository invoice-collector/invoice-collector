
import { SketchCollector } from '../../sketchCollector';

export class SchlundtechCollector extends SketchCollector {

    static CONFIG = {
        id: "schlundtech",
        name: "SchlundTech",
        description: "i18n.collectors.schlundtech.description",
        version: "0",
        website: "https://login.schlundtech.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3420.jpg",
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
        entryUrl: "https://login.schlundtech.com/",
    }

    constructor() {
        super(SchlundtechCollector.CONFIG);
    }
}
