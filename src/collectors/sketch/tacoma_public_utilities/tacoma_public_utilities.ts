
import { SketchCollector } from '../../sketchCollector';

export class TacomaPublicUtilitiesCollector extends SketchCollector {

    static CONFIG = {
        id: "tacoma_public_utilities",
        name: "Tacoma Public Utilities",
        description: "i18n.collectors.tacoma_public_utilities.description",
        version: "0",
        website: "http://www.mytpu.org",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8629.jpg",
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
        entryUrl: "http://www.mytpu.org",
    }

    constructor() {
        super(TacomaPublicUtilitiesCollector.CONFIG);
    }
}
