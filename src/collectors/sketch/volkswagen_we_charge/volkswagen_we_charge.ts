
import { SketchCollector } from '../../sketchCollector';

export class VolkswagenWeChargeCollector extends SketchCollector {

    static CONFIG = {
        id: "volkswagen_we_charge",
        name: "Volkswagen - We Charge",
        description: "i18n.collectors.volkswagen_we_charge.description",
        version: "0",
        website: "https://www.volkswagen.de/de/meine-ladethemen.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/26800.jpg",
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
        entryUrl: "https://www.volkswagen.de/de/meine-ladethemen.html",
    }

    constructor() {
        super(VolkswagenWeChargeCollector.CONFIG);
    }
}
