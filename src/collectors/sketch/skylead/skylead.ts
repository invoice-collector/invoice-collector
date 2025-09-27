
import { SketchCollector } from '../../sketchCollector';

export class SkyleadCollector extends SketchCollector {

    static CONFIG = {
        id: "skylead",
        name: "Skylead",
        description: "i18n.collectors.skylead.description",
        version: "0",
        website: "https://dash.skylead.io/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1079804.jpg",
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
        entryUrl: "https://dash.skylead.io/login",
    }

    constructor() {
        super(SkyleadCollector.CONFIG);
    }
}
