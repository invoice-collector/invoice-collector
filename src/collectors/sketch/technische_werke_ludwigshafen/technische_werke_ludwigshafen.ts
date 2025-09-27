
import { SketchCollector } from '../../sketchCollector';

export class TechnischeWerkeLudwigshafenCollector extends SketchCollector {

    static CONFIG = {
        id: "technische_werke_ludwigshafen",
        name: "Technische Werke Ludwigshafen",
        description: "i18n.collectors.technische_werke_ludwigshafen.description",
        version: "0",
        website: "https://kundenportal.twl.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1079785.jpg",
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
        entryUrl: "https://kundenportal.twl.de/",
    }

    constructor() {
        super(TechnischeWerkeLudwigshafenCollector.CONFIG);
    }
}
