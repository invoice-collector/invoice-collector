
import { SketchCollector } from '../../sketchCollector';

export class TegaCollector extends SketchCollector {

    static CONFIG = {
        id: "tega",
        name: "TEGA",
        description: "i18n.collectors.tega.description",
        version: "0",
        website: "https://www.tega.de/kundenportal/de/start",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/426729.jpg",
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
        entryUrl: "https://www.tega.de/kundenportal/de/start",
    }

    constructor() {
        super(TegaCollector.CONFIG);
    }
}
