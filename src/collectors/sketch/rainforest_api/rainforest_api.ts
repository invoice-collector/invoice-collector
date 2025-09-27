
import { SketchCollector } from '../../sketchCollector';

export class RainforestApiCollector extends SketchCollector {

    static CONFIG = {
        id: "rainforest_api",
        name: "Rainforest API",
        description: "i18n.collectors.rainforest_api.description",
        version: "0",
        website: "https://app.rainforestapi.com/account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/553577.jpg",
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
        entryUrl: "https://app.rainforestapi.com/account",
    }

    constructor() {
        super(RainforestApiCollector.CONFIG);
    }
}
