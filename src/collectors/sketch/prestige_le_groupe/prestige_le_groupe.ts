
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PrestigeLeGroupeCollector extends SketchCollector {

    static CONFIG = {
        id: "prestige_le_groupe",
        name: "PRESTIGE Le Groupe",
        description: "i18n.collectors.prestige_le_groupe.description",
        version: "0",
        website: "https://shop.prestige-distribution.fr/web/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/927931.jpg",
        type: CollectorType.SKETCH,
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
        entryUrl: "https://shop.prestige-distribution.fr/web/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PrestigeLeGroupeCollector.CONFIG);
    }
}
