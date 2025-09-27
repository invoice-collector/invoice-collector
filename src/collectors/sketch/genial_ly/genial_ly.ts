
import { SketchCollector } from '../../sketchCollector';

export class GenialLyCollector extends SketchCollector {

    static CONFIG = {
        id: "genial_ly",
        name: "GENIAL.LY",
        description: "i18n.collectors.genial_ly.description",
        version: "0",
        website: "https://app.genial.ly/settings/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1679599.jpg",
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
        entryUrl: "https://app.genial.ly/settings/billing",
    }

    constructor() {
        super(GenialLyCollector.CONFIG);
    }
}
