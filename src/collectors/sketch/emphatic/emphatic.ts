
import { SketchCollector } from '../../sketchCollector';

export class EmphaticCollector extends SketchCollector {

    static CONFIG = {
        id: "emphatic",
        name: "emphatic",
        description: "i18n.collectors.emphatic.description",
        version: "0",
        website: "https://emphatic.co",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/405802.jpg",
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
        entryUrl: "https://emphatic.co",
    }

    constructor() {
        super(EmphaticCollector.CONFIG);
    }
}
