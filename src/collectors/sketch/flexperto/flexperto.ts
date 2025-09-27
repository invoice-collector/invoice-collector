
import { SketchCollector } from '../../sketchCollector';

export class FlexpertoCollector extends SketchCollector {

    static CONFIG = {
        id: "flexperto",
        name: "Flexperto",
        description: "i18n.collectors.flexperto.description",
        version: "0",
        website: "https://flexperto.recurly.com/account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/433454.jpg",
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
        entryUrl: "https://flexperto.recurly.com/account",
    }

    constructor() {
        super(FlexpertoCollector.CONFIG);
    }
}
