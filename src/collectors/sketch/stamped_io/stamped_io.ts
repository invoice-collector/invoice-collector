
import { SketchCollector } from '../../sketchCollector';

export class StampedIoCollector extends SketchCollector {

    static CONFIG = {
        id: "stamped_io",
        name: "Stamped.io",
        description: "i18n.collectors.stamped_io.description",
        version: "0",
        website: "https://go.stamped.io/v3/#/settings/plans",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/97926.jpg",
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
        entryUrl: "https://go.stamped.io/v3/#/settings/plans",
    }

    constructor() {
        super(StampedIoCollector.CONFIG);
    }
}
