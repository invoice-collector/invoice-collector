
import { SketchCollector } from '../../sketchCollector';

export class AlmaCollector extends SketchCollector {

    static CONFIG = {
        id: "alma",
        name: "ALMA",
        description: "i18n.collectors.alma.description",
        version: "0",
        website: "https://dashboard.getalma.eu/data",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/534310.jpg",
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
        entryUrl: "https://dashboard.getalma.eu/data",
    }

    constructor() {
        super(AlmaCollector.CONFIG);
    }
}
