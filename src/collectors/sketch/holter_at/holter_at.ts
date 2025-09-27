
import { SketchCollector } from '../../sketchCollector';

export class HolterAtCollector extends SketchCollector {

    static CONFIG = {
        id: "holter_at",
        name: "Holter AT",
        description: "i18n.collectors.holter_at.description",
        version: "0",
        website: "https://online.holter.at/hon40/O4160W.PGM",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2729958.jpg",
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
        entryUrl: "https://online.holter.at/hon40/O4160W.PGM",
    }

    constructor() {
        super(HolterAtCollector.CONFIG);
    }
}
