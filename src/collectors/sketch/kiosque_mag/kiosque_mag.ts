
import { SketchCollector } from '../../sketchCollector';

export class KiosqueMagCollector extends SketchCollector {

    static CONFIG = {
        id: "kiosque_mag",
        name: "Kiosque Mag",
        description: "i18n.collectors.kiosque_mag.description",
        version: "0",
        website: "https://www.kiosquemag.com/mon-espace/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/120416.jpg",
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
        entryUrl: "https://www.kiosquemag.com/mon-espace/",
    }

    constructor() {
        super(KiosqueMagCollector.CONFIG);
    }
}
