
import { SketchCollector } from '../../sketchCollector';

export class ZasDieAbrechnungsstelleCollector extends SketchCollector {

    static CONFIG = {
        id: "zas_die_abrechnungsstelle",
        name: "ZAS Die Abrechnungsstelle",
        description: "i18n.collectors.zas_die_abrechnungsstelle.description",
        version: "0",
        website: "https://portal.die-abrechnungsstelle.de/auth/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4199687.jpg",
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
        entryUrl: "https://portal.die-abrechnungsstelle.de/auth/login",
    }

    constructor() {
        super(ZasDieAbrechnungsstelleCollector.CONFIG);
    }
}
