
import { SketchCollector } from '../../sketchCollector';

export class InsurgoCollector extends SketchCollector {

    static CONFIG = {
        id: "insurgo",
        name: "Insurgo",
        description: "i18n.collectors.insurgo.description",
        version: "0",
        website: "https://hd-makler.insurgo.cloud/dokumente",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2664584.jpg",
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
        entryUrl: "https://hd-makler.insurgo.cloud/dokumente",
    }

    constructor() {
        super(InsurgoCollector.CONFIG);
    }
}
