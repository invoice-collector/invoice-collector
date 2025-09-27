
import { SketchCollector } from '../../sketchCollector';

export class DataclayCollector extends SketchCollector {

    static CONFIG = {
        id: "dataclay",
        name: "Dataclay",
        description: "i18n.collectors.dataclay.description",
        version: "0",
        website: "https://dataclay.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1035306.jpg",
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
        entryUrl: "https://dataclay.com",
    }

    constructor() {
        super(DataclayCollector.CONFIG);
    }
}
