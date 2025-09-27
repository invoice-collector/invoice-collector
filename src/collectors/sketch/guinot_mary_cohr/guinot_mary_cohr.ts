
import { SketchCollector } from '../../sketchCollector';

export class GuinotMaryCohrCollector extends SketchCollector {

    static CONFIG = {
        id: "guinot_mary_cohr",
        name: "Guinot - Mary Cohr",
        description: "i18n.collectors.guinot_mary_cohr.description",
        version: "0",
        website: "https://portailclients.guinot.com/invoice",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4614719.jpg",
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
        entryUrl: "https://portailclients.guinot.com/invoice",
    }

    constructor() {
        super(GuinotMaryCohrCollector.CONFIG);
    }
}
