
import { SketchCollector } from '../../sketchCollector';

export class SugaroutfittersCollector extends SketchCollector {

    static CONFIG = {
        id: "sugaroutfitters",
        name: "SugarOutfitters",
        description: "i18n.collectors.sugaroutfitters.description",
        version: "0",
        website: "https://www.sugaroutfitters.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32418.jpg",
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
        entryUrl: "https://www.sugaroutfitters.com/login",
    }

    constructor() {
        super(SugaroutfittersCollector.CONFIG);
    }
}
