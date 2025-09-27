
import { SketchCollector } from '../../sketchCollector';

export class CreoateCollector extends SketchCollector {

    static CONFIG = {
        id: "creoate",
        name: "Creoate",
        description: "i18n.collectors.creoate.description",
        version: "0",
        website: "https://www.creoate.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1173168.jpg",
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
        entryUrl: "https://www.creoate.com/",
    }

    constructor() {
        super(CreoateCollector.CONFIG);
    }
}
