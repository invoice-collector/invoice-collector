
import { SketchCollector } from '../../sketchCollector';

export class SketchfabCollector extends SketchCollector {

    static CONFIG = {
        id: "sketchfab",
        name: "Sketchfab",
        description: "i18n.collectors.sketchfab.description",
        version: "0",
        website: "https://sketchfab.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/792828.jpg",
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
        entryUrl: "https://sketchfab.com/",
    }

    constructor() {
        super(SketchfabCollector.CONFIG);
    }
}
