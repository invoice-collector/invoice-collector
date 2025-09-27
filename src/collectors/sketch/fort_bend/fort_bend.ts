
import { SketchCollector } from '../../sketchCollector';

export class FortBendCollector extends SketchCollector {

    static CONFIG = {
        id: "fort_bend",
        name: "Fort Bend",
        description: "i18n.collectors.fort_bend.description",
        version: "0",
        website: "https://www.eonlinebill.com/bapp/ftbend/billing-history",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4696084.jpg",
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
        entryUrl: "https://www.eonlinebill.com/bapp/ftbend/billing-history",
    }

    constructor() {
        super(FortBendCollector.CONFIG);
    }
}
