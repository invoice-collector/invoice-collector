
import { SketchCollector } from '../../sketchCollector';

export class BremerSteuerInstitutEVCollector extends SketchCollector {

    static CONFIG = {
        id: "bremer_steuer_institut_e_v",
        name: "Bremer Steuer-Institut e.V",
        description: "i18n.collectors.bremer_steuer_institut_e_v.description",
        version: "0",
        website: "https://stbv-fortbildung.de/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/144288.jpg",
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
        entryUrl: "https://stbv-fortbildung.de/login/",
    }

    constructor() {
        super(BremerSteuerInstitutEVCollector.CONFIG);
    }
}
