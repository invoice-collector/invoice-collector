
import { SketchCollector } from '../../sketchCollector';

export class GrosshandelHartlElektroCollector extends SketchCollector {

    static CONFIG = {
        id: "grosshandel_hartl_elektro",
        name: "Grosshandel Hartl Elektro",
        description: "i18n.collectors.grosshandel_hartl_elektro.description",
        version: "0",
        website: "https://hartl.elektro-online.de/login.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3203730.jpg",
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
        entryUrl: "https://hartl.elektro-online.de/login.html",
    }

    constructor() {
        super(GrosshandelHartlElektroCollector.CONFIG);
    }
}
