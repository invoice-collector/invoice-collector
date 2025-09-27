
import { SketchCollector } from '../../sketchCollector';

export class GuelphHydroCollector extends SketchCollector {

    static CONFIG = {
        id: "guelph_hydro",
        name: "Guelph Hydro",
        description: "i18n.collectors.guelph_hydro.description",
        version: "0",
        website: "http://www.guelphhydro.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8684.jpg",
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
        entryUrl: "http://www.guelphhydro.com",
    }

    constructor() {
        super(GuelphHydroCollector.CONFIG);
    }
}
