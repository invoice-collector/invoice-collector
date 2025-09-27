
import { SketchCollector } from '../../sketchCollector';

export class InterMaklerportalCollector extends SketchCollector {

    static CONFIG = {
        id: "inter_maklerportal",
        name: "INTER MaklerPortal",
        description: "i18n.collectors.inter_maklerportal.description",
        version: "0",
        website: "https://makler.inter.de/e-abrechnungsservice",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4693363.jpg",
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
        entryUrl: "https://makler.inter.de/e-abrechnungsservice",
    }

    constructor() {
        super(InterMaklerportalCollector.CONFIG);
    }
}
