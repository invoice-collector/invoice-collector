
import { SketchCollector } from '../../sketchCollector';

export class ClinicDressCollector extends SketchCollector {

    static CONFIG = {
        id: "clinic_dress",
        name: "Clinic Dress",
        description: "i18n.collectors.clinic_dress.description",
        version: "0",
        website: "https://www.clinicdress.de/bestellungsverlauf",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2445894.jpg",
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
        entryUrl: "https://www.clinicdress.de/bestellungsverlauf",
    }

    constructor() {
        super(ClinicDressCollector.CONFIG);
    }
}
