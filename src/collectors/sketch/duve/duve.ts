
import { SketchCollector } from '../../sketchCollector';

export class DuveCollector extends SketchCollector {

    static CONFIG = {
        id: "duve",
        name: "Duve",
        description: "i18n.collectors.duve.description",
        version: "0",
        website: "https://frontdesk.duve.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1349766.jpg",
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
        entryUrl: "https://frontdesk.duve.com/login",
    }

    constructor() {
        super(DuveCollector.CONFIG);
    }
}
