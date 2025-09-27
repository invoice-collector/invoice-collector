
import { SketchCollector } from '../../sketchCollector';

export class OrbitkitCollector extends SketchCollector {

    static CONFIG = {
        id: "orbitkit",
        name: "OrbitKit",
        description: "i18n.collectors.orbitkit.description",
        version: "0",
        website: "https://app.orbitkit.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/797153.jpg",
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
        entryUrl: "https://app.orbitkit.com/",
    }

    constructor() {
        super(OrbitkitCollector.CONFIG);
    }
}
