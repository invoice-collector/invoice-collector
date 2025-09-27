
import { SketchCollector } from '../../sketchCollector';

export class RecordjetCollector extends SketchCollector {

    static CONFIG = {
        id: "recordjet",
        name: "recordjet",
        description: "i18n.collectors.recordjet.description",
        version: "0",
        website: "https://cockpit.recordjet.com/my-profile",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1914279.jpg",
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
        entryUrl: "https://cockpit.recordjet.com/my-profile",
    }

    constructor() {
        super(RecordjetCollector.CONFIG);
    }
}
