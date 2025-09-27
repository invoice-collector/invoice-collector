
import { SketchCollector } from '../../sketchCollector';

export class ActradisCollector extends SketchCollector {

    static CONFIG = {
        id: "actradis",
        name: "Actradis",
        description: "i18n.collectors.actradis.description",
        version: "0",
        website: "https://app.actradis.fr/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1060574.jpg",
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
        entryUrl: "https://app.actradis.fr/login",
    }

    constructor() {
        super(ActradisCollector.CONFIG);
    }
}
