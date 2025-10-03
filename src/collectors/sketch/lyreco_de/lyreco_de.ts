
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class LyrecoDeCollector extends SketchCollector {

    static CONFIG = {
        id: "lyreco_de",
        name: "Lyreco (.de)",
        description: "i18n.collectors.lyreco_de.description",
        version: "0",
        website: "https://www.lyreco.com/webshop/DEDE/wslogin",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4495748.jpg",
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
        entryUrl: "https://www.lyreco.com/webshop/DEDE/wslogin",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LyrecoDeCollector.CONFIG);
    }
}
