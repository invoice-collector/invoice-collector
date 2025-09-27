
import { SketchCollector } from '../../sketchCollector';

export class BoardboosterCollector extends SketchCollector {

    static CONFIG = {
        id: "boardbooster",
        name: "BoardBooster",
        description: "i18n.collectors.boardbooster.description",
        version: "0",
        website: "https://boardbooster.com/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/7801.jpg",
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
        entryUrl: "https://boardbooster.com/billing",
    }

    constructor() {
        super(BoardboosterCollector.CONFIG);
    }
}
