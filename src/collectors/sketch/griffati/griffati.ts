
import { SketchCollector } from '../../sketchCollector';

export class GriffatiCollector extends SketchCollector {

    static CONFIG = {
        id: "griffati",
        name: "GRIFFATI",
        description: "i18n.collectors.griffati.description",
        version: "0",
        website: "https://www.griffati.com/fr/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/834053.jpg",
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
        entryUrl: "https://www.griffati.com/fr/",
    }

    constructor() {
        super(GriffatiCollector.CONFIG);
    }
}
