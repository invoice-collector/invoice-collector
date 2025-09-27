
import { SketchCollector } from '../../sketchCollector';

export class PseglinyCollector extends SketchCollector {

    static CONFIG = {
        id: "psegliny",
        name: "PSEGliny",
        description: "i18n.collectors.psegliny.description",
        version: "0",
        website: "https://www.psegliny.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2385174.jpg",
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
        entryUrl: "https://www.psegliny.com/",
    }

    constructor() {
        super(PseglinyCollector.CONFIG);
    }
}
