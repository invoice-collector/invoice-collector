
import { SketchCollector } from '../../sketchCollector';

export class EngelbertStraussCollector extends SketchCollector {

    static CONFIG = {
        id: "engelbert_strauss",
        name: "engelbert strauss",
        description: "i18n.collectors.engelbert_strauss.description",
        version: "0",
        website: "https://www.engelbert-strauss.de/Anmeldung",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/25541.jpg",
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
        entryUrl: "https://www.engelbert-strauss.de/Anmeldung",
    }

    constructor() {
        super(EngelbertStraussCollector.CONFIG);
    }
}
