
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class LyrecoFrCollector extends SketchCollector {

    static CONFIG = {
        id: "lyreco_fr",
        name: "Lyreco (.fr)",
        description: "i18n.collectors.lyreco_fr.description",
        version: "0",
        website: "https://www.lyreco.com/webshop/FRFR/wslogin",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4495744.jpg",
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
        entryUrl: "https://www.lyreco.com/webshop/FRFR/wslogin",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LyrecoFrCollector.CONFIG);
    }
}
